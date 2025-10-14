// Vercel Serverless Function - Brevo (Sendinblue) email sender
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { user_name, user_email, company, message } = req.body || {};
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'sales@estatevisio.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@estatevisio.com';
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const payload = {
    sender: { email: fromEmail, name: 'EstateVisio Website' },
    to: [{ email: toEmail }],
    subject: `New contact form submission from ${user_name}`,
    htmlContent: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${user_name}</p>
      <p><strong>Email:</strong> ${user_email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${String(message || '').replace(/\n/g, '<br/>')}</p>
    `,
    replyTo: { email: user_email || toEmail },
    headers: { 'X-EstateVisio-Source': 'contact-form' },
  };

  try {
    const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(502).json({ error: 'Failed to send email', details: text });
    }

    const data = await resp.json().catch(() => ({}));
    return res.status(200).json({ ok: true, brevo: data });
  } catch (e) {
    return res.status(500).json({ error: 'Unexpected error' });
  }
}



import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { user_name, user_email, company, message } = body;

  if (!user_name || !user_email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'sales@estatevisio.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'no-reply@estatevisio.com';

  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
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
      return NextResponse.json({ error: 'Failed to send email', details: text }, { status: 502 });
    }

    const data = await resp.json().catch(() => ({}));
    return NextResponse.json({ ok: true, brevo: data });
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}

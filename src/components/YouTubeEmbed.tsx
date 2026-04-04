interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

const YouTubeEmbed = ({ videoId, title = 'EstateVisio Video' }: YouTubeEmbedProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold z-10 pointer-events-none" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold z-10 pointer-events-none" />
      <div className="relative rounded-xl overflow-hidden shadow-elegant" style={{ aspectRatio: '16/9' }}>
        <iframe
          className="w-full h-full absolute inset-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;

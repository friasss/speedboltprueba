export default function PostCard({ post, onClick, variant = 'default' }) {
  return (
    <article
      className={`post-card${variant === 'featured' ? ' post-card-featured' : ''}`}
      data-id={post.id}
      data-cursor="hover"
      onClick={() => onClick(post.id)}
    >
      <div className="post-cover">
        <div className="post-tag">{post.tag}</div>
        {post.cover ? (
          <img src={post.cover} alt={post.title} />
        ) : (
          <div className="post-cover-fallback">{post.coverFallback || 'SB'}</div>
        )}
      </div>
      <div className="post-body">
        <div className="post-date">{post.date}</div>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt || (post.content || '').slice(0, 140)}</p>
        <span className="post-read-more">
          Leer mas
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </span>
      </div>
    </article>
  );
}

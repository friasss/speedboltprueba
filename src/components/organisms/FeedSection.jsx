import PostCard from '../molecules/PostCard';

export default function FeedSection({ posts, onOpenPost }) {
  return (
    <section className="feed-section" id="feed">
      <div className="section-header reveal">
        <div>
          <div className="section-eyebrow">06 · Latest feed</div>
          <h2 className="section-title">Ultimas<br /><span className="accent">transmisiones.</span></h2>
        </div>
        <button className="section-link" data-cursor="hover" id="feedLoadMore" type="button">
          <span>Ir al feed completo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M7 7h10v10" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </button>
      </div>

      <div className="feed-grid" id="feedGrid">
        {posts.length ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={onOpenPost} />
          ))
        ) : (
          <div className="post-empty">
            <h3>Aun no hay transmisiones</h3>
            <p>Pronto vas a ver las novedades del equipo aqui.</p>
          </div>
        )}
      </div>
    </section>
  );
}

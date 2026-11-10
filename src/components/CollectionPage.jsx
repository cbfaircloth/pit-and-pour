
export default function CollectionPage({
  title,
  description,
  items = [],
  onBack,
  onSelect,
}) {
  return (
    <div className="recipe-page">
      <div className="recipe-page-container">
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={onBack}
        >
          ← Back to Pit & Pour
        </button>

        <div className="collection-heading">
          <p className="collection-eyebrow">
            PIT &amp; POUR COLLECTIONS
          </p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className="collection-grid">
          {items.length === 0 ? (
            <div className="collection-empty">
              <h2>Something Good Is Coming...</h2>
              <p>
                We're working on adding more to this collection.
                Check back soon!
              </p>
            </div>
          ) : (
            items.map((item) => (
              <button
                key={item.id}
                type="button"
                className="collection-card"
                onClick={() => onSelect(item.id)}
              >
                {item.image && (
                  <img src={item.image} alt={item.title} />
                )}

                <div className="collection-card-content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                 <span>
  {title === "The Weekend Pour"
    ? "Read My Review →"
    : "View Recipe →"}
</span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function CollectionPage({
  title,
  description,
  items = [],
  onBack,
  onSelect,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();


  // Only enable search and tags for food collections.
const isRecipeCollection =
  title === "The Kitchen" || title === "The Smokehouse";

 // Permanent meat categories for recipe filtering.
const meatCategories = [
  "Beef",
  "Chicken",
  "Pork",
  "Turkey",
  "Seafood",
];

// Collect tags from the recipes in this collection.
const recipeTags = items.flatMap((item) => item.tags || []);

// Combine permanent categories with recipe-specific tags.
// Remove duplicates and keep the meat categories first.
const availableTags = isRecipeCollection
  ? [
      ...meatCategories,
      ...[...new Set(recipeTags)]
        .filter((tag) => !meatCategories.includes(tag))
        .sort(),
    ]
  : [];
  const selectedTag =
  availableTags.find(
    (tag) =>
      tag.toLowerCase().replace(/\s+/g, "-") ===
      searchParams.get("tag")
  ) || null;

  // Filter recipes by title, description, ingredients, and tags.
  const filteredItems = isRecipeCollection
    ? items.filter((item) => {
        const searchableText = [
          item.title,
          item.description,
          ...(item.ingredients || []),
          ...(item.tags || []),
        ]
          .join(" ")
          .toLowerCase();

        const matchesSearch = searchableText.includes(
          searchQuery.trim().toLowerCase()
        );

        const matchesTag =
          selectedTag === null ||
          (item.tags || []).includes(selectedTag);

        return matchesSearch && matchesTag;
      })
    : items;

  const hasActiveFilters =
    isRecipeCollection &&
    (searchQuery.trim() !== "" || selectedTag !== null);

  return (
    <div className="recipe-page">
      <div className="recipe-page-container">
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={onBack}
        >
          ← Back to Pit &amp; Pour
        </button>

        <div className="collection-heading">
          <p className="collection-eyebrow">
            PIT &amp; POUR COLLECTIONS
          </p>

          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {/* Recipe search bar */}
        {isRecipeCollection && (
          <div className="recipe-search-container">
            <label
              htmlFor="recipe-search"
              className="recipe-search-label"
            >
              Find Something Good to Cook
            </label>

            <input
              id="recipe-search"
              type="search"
              className="recipe-search-input"
              placeholder="Search recipes, ingredients, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {/* Clickable recipe tags */}
        {isRecipeCollection && availableTags.length > 0 && (
          <div className="recipe-tags-container">
            <p className="recipe-tags-label">
              Browse by Tag
            </p>

            <div className="recipe-tags-list">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`recipe-tag-button${
                    selectedTag === tag ? " active" : ""
                  }`}
                  aria-pressed={selectedTag === tag}
                 onClick={() => {
  const newParams = new URLSearchParams(searchParams);

  if (selectedTag === tag) {
    newParams.delete("tag");
  } else {
    newParams.set(
      "tag",
      tag.toLowerCase().replace(/\s+/g, "-")
    );
  }

  setSearchParams(newParams);
}}
                >
                  #{tag.replace(/\s+/g, "")}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Clear filters */}
        {hasActiveFilters && (
          <div className="recipe-filter-actions">
            <button
              type="button"
              className="recipe-clear-filters"
             onClick={() => {
  setSearchQuery("");

  const newParams = new URLSearchParams(searchParams);
  newParams.delete("tag");
  setSearchParams(newParams);
}}
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Collection cards */}
        <div className="collection-grid">
          {filteredItems.length === 0 ? (
            <div className="collection-empty">
              {hasActiveFilters ? (
                <>
                  <h2>No Recipes Found</h2>
                  <p>
                    Nothing matched your search. Try another
                    ingredient or clear your filters!
                  </p>
                </>
              ) : (
                <>
                  <h2>Something Good Is Coming...</h2>
                  <p>
                    We're working on adding more to this
                    collection. Check back soon!
                  </p>
                </>
              )}
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`collection-card${
                  title === "The Kitchen"
                    ? " kitchen-collection-card"
                    : ""
                }`}
                onClick={() => onSelect(item.id)}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                  />
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

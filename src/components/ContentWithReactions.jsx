
import { useLocation } from "react-router-dom";
import { recipes } from "../data/recipes";
import { bourbonReviews } from "../data/bourbonReviews";
import ReactionButtons from "./ReactionButtons";

export default function ContentWithReactions({ children }) {
  const location = useLocation();

  // Identify a Smokehouse or Kitchen recipe.
  const recipe = recipes.find(
    (item) => item.url === location.pathname
  );

  // Identify a Weekend Pour bourbon review.
  const bourbonReview = bourbonReviews.find(
    (item) => item.url === location.pathname
  );

  const contentType = recipe
    ? recipe.category
    : bourbonReview
      ? "weekend-pour"
      : null;

  const contentId = recipe?.id || bourbonReview?.id;

  return (
    <>
      {contentType && contentId && (
        <ReactionButtons
          contentType={contentType}
          contentId={contentId}
        />
      )}

      {children}
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function RecipeHeader() {
  const navigate = useNavigate();

  return (
    <div className="recipe-brand-header">
      <button
        type="button"
        className="recipe-brand-home"
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        aria-label="Return to Pit & Pour homepage"
      >
        <img
          src="/images/branding/pit-and-pour-logo.png"
          alt="Pit & Pour"
          className="recipe-brand-logo"
        />
      </button>

      <p className="recipe-brand-tagline">
        Smoke Has a Story. So Does Every Pour.
      </p>
    </div>
  );
}
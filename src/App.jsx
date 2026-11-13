
import './App.css'
import { useNavigate, useLocation } from "react-router-dom";
import SpareRibs from "./pages/SpareRibs";
import CheesySausagePotatoes from "./pages/CheesySausagePotatoes";
import CheesyBeefRice from "./pages/CheesyBeefRice";
import KoreanBeefBowl from "./pages/KoreanBeefBowl";
import BirdDogSelectReserve from "./pages/BirdDogSelectReserve";
import PenelopeBarrelStrength from "./pages/PenelopeBarrelStrength";
import Footer from "./components/Footer";
import CollectionPage from "./components/CollectionPage";
import About from "./pages/About";
import { recipes } from "./data/recipes";
import { bourbonReviews } from "./data/bourbonReviews";

// Automatically find the newest published recipe in a collection.
const getLatestRecipe = (category) => {
  return recipes
    .filter((recipe) => recipe.category === category)
    .sort((a, b) => b.publishOrder - a.publishOrder)[0];
};

const latestSmokehouseRecipe = getLatestRecipe("smokehouse");
const latestKitchenRecipe = getLatestRecipe("kitchen");
// Automatically find the newest published bourbon review.
const latestBourbonReview = [...bourbonReviews].sort(
  (a, b) => b.publishOrder - a.publishOrder
)[0];

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const collections = {
    smokehouse: {
      title: "The Smokehouse",
      description:
        "Real backyard BBQ, smoked low and slow. Browse the cooks, recipes, and lessons learned around the pit.",
      items: recipes.filter(
        (recipe) => recipe.category === "smokehouse"
      ),
    },

    kitchen: {
      title: "The Kitchen",
      description:
        "Easy, affordable, and delicious meals for the whole family. Welcome to the Pit & Pour digital cookbook.",
      items: recipes.filter(
        (recipe) => recipe.category === "kitchen"
      ),
    },

    "weekend-pour": {
  title: "The Weekend Pour",
  description:
    "A casual look at bourbon, from the first aroma to the final sip. Real bottles, real tasting notes, and personal reviews.",
  items: bourbonReviews,
},
  };

  // About page
  if (location.pathname === "/about") {
    return (
      <>
        <div className="about-back-container">
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to Pit &amp; Pour
          </button>
        </div>

        <About />
        <Footer />
      </>
    );
  }

  // Collection pages
  const collectionKey =
    location.pathname === "/kitchen"
      ? "kitchen"
      : location.pathname === "/smokehouse"
      ? "smokehouse"
      : location.pathname === "/weekend-pour"
      ? "weekend-pour"
      : null;

  if (collectionKey && collections[collectionKey]) {
    const collection = collections[collectionKey];

    return (
      <div>
        <CollectionPage
          title={collection.title}
          description={collection.description}
          items={collection.items}
          onBack={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          onSelect={(id) => {
            if (id === "spare-ribs") {
              navigate("/smokehouse/spare-ribs");
              window.scrollTo(0, 0);
            }

            if (id === "cheesy-sausage-potatoes") {
              navigate("/kitchen/cheesy-sausage-potatoes");
              window.scrollTo(0, 0);
            }

            if (id === "cheesy-beef-rice") {
              navigate("/kitchen/cheesy-beef-rice");
              window.scrollTo(0, 0);
            }
            if (id === "korean-beef-bowl") {
  navigate("/kitchen/korean-beef-bowl");
  window.scrollTo(0, 0);
}

            if (id === "bird-dog-select-reserve") {
              navigate("/weekend-pour/bird-dog-select-reserve");
              window.scrollTo(0, 0);
            }
            if (id === "penelope-barrel-strength") {
  navigate("/weekend-pour/penelope-barrel-strength");
  window.scrollTo(0, 0);
}
          }}
        />
        <Footer />
      </div>
    );
  }
if (
  location.pathname ===
  "/weekend-pour/penelope-barrel-strength"
) {
  return (
    <div>
      <div
        className="recipe-page-container"
        style={{
          paddingTop: "30px",
          paddingBottom: "0",
        }}
      >
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={() => {
            navigate("/weekend-pour");
            window.scrollTo(0, 0);
          }}
        >
          ← Back to The Weekend Pour
        </button>
      </div>

      <PenelopeBarrelStrength />
      <Footer />
    </div>
  );
}
  // Bourbon review page
  if (
    location.pathname ===
    "/weekend-pour/bird-dog-select-reserve"
  ) {
    return (
      <div>
        <div
          className="recipe-page-container"
          style={{
            paddingTop: "30px",
            paddingBottom: "0",
          }}
        >
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/weekend-pour");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to The Weekend Pour
          </button>
        </div>

        <BirdDogSelectReserve />
        <Footer />
      </div>
    );
  }

  // Cheesy Sausage & Potatoes recipe
  if (
    location.pathname ===
    "/kitchen/cheesy-sausage-potatoes"
  ) {
    return (
      <div className="recipe-page">
        <div className="recipe-page-container">
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/kitchen");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to The Kitchen
          </button>

          <CheesySausagePotatoes />
        </div>
        <Footer />
      </div>
    );
  }

  // Cheesy Beef & Rice recipe
  if (
    location.pathname ===
    "/kitchen/cheesy-beef-rice"
  ) {
    return (
      <div className="recipe-page">
        <div className="recipe-page-container">
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/kitchen");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to The Kitchen
          </button>

          <CheesyBeefRice />
        </div>

        <Footer />
      </div>
    );
  }

  // Korean Beef Bowls recipe
  if (location.pathname === "/kitchen/korean-beef-bowl") {
    return (
      <div className="recipe-page">
        <div className="recipe-page-container">
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/kitchen");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to The Kitchen
          </button>

          <KoreanBeefBowl />
        </div>

        <Footer />
      </div>
    );
  }

  // Backyard Smoked Spare Ribs recipe
  if (location.pathname === "/smokehouse/spare-ribs") {
    return (
      <div className="recipe-page">
        <div className="recipe-page-container">
          <button
            type="button"
            className="recipe-button recipe-back-button"
            onClick={() => {
              navigate("/smokehouse");
              window.scrollTo(0, 0);
            }}
          >
            ← Back to The Smokehouse
          </button>

          <SpareRibs />
        </div>
        <Footer />
      </div>
    );
  }

  // Homepage
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a href="#home" className="site-name">
            PIT <span>&amp;</span> POUR
          </a>

          <nav
            className="main-nav"
            aria-label="Main navigation"
          >
            <a href="#home">Home</a>
            <a href="#smokehouse">The Smokehouse</a>
            <a href="#kitchen">The Kitchen</a>
            <a href="#weekend-pour">The Weekend Pour</a>

            <button
              type="button"
              className="nav-link-button"
              onClick={() => {
                navigate("/about");
                window.scrollTo(0, 0);
              }}
            >
              About
            </button>
          </nav>
        </div>
      </header>

      <main id="home" className="welcome">
        <div className="welcome-content">
          <img
            src="/images/branding/pit-and-pour-logo.png"
            alt="Pit & Pour — Smoke, Food & Bourbon"
            className="brand-logo"
          />

          <p className="tagline">
            Smoke Has a Story. So Does Every Pour.
          </p>

          <p className="description">
            From the backyard smoker to the family
            dinner table, with a little bourbon
            along the way.
          </p>

          <div className="welcome-links">
            <a href="#smokehouse">The Smokehouse</a>
            <a href="#kitchen">The Kitchen</a>
            <a href="#weekend-pour">
              The Weekend Pour
            </a>
          </div>

          <p className="coming-soon">
            Something delicious is cooking...
          </p>
        </div>
      </main>

      <section className="homepage-sections">
        <div className="sections-container">
          <p className="section-eyebrow">
            EXPLORE PIT &amp; POUR
          </p>

          <h2>
            There's Always Something Cooking
          </h2>

          <p className="sections-intro">
            Whether it's a long day at the smoker,
            a quick family dinner, or a relaxing
            weekend pour, there's always something
            worth sharing.
          </p>

          <div className="feature-grid">
            {/* THE SMOKEHOUSE */}
            <article
              id="smokehouse"
              className="feature-card"
            >
              <img
                src={
                  latestSmokehouseRecipe?.image ||
                  "/images/food/spare-ribs-after.jpeg"
                }
                alt={
                  latestSmokehouseRecipe?.title ||
                  "The Smokehouse"
                }
                className="feature-photo"
              />

              <h3>The Smokehouse</h3>

              <p>
                Real backyard BBQ, smoking
                techniques, recipes, and lessons
                learned around the pit.
              </p>

              <span>BBQ &amp; Smoking</span>

              <button
                type="button"
                className="recipe-button"
                onClick={() => {
                  navigate("/smokehouse");
                  window.scrollTo(0, 0);
                }}
              >
                View Recipes →
              </button>
            </article>

            {/* THE KITCHEN */}
            <article
              id="kitchen"
              className="feature-card"
            >
              <img
                src={
                  latestKitchenRecipe?.image ||
                  "/images/food/cheesy-potatoes-sausage.jpeg"
                }
                alt={
                  latestKitchenRecipe?.title ||
                  "The Kitchen"
                }
                className="feature-photo"
              />

              <h3>The Kitchen</h3>

              <p>
                Easy, affordable, and delicious
                meals for the whole family.
                Explore the Pit &amp; Pour cookbook.
              </p>

              <span>Recipes &amp; Cooking</span>

              <button
                type="button"
                className="recipe-button"
                onClick={() => {
                  navigate("/kitchen");
                  window.scrollTo(0, 0);
                }}
              >
                View Recipes →
              </button>
            </article>

            {/* THE WEEKEND POUR */}
            <article
              id="weekend-pour"
              className="feature-card"
            >
              <img
  src={
    latestBourbonReview?.image ||
    "/images/bourbon/birddog-bourbon.jpeg"
  }
  alt={
    latestBourbonReview?.title ||
    "The Weekend Pour"
  }
  className="feature-photo"
/> 

              <h3>The Weekend Pour</h3>

              <p>
                Real bottles, real tasting notes,
                and real honest reviews.
              </p>

              <span>Bourbon Reviews</span>

              <button
                type="button"
                className="recipe-button"
                onClick={() => {
                  navigate("/weekend-pour");
                  window.scrollTo(0, 0);
                }}
              >
                View Reviews →
              </button>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;


import './App.css'
import { useState } from "react";
import SpareRibs from "./pages/SpareRibs";
import CheesySausagePotatoes from "./pages/CheesySausagePotatoes";
import BirdDogSelectReserve from "./pages/BirdDogSelectReserve";
import Footer from "./components/Footer";
import CollectionPage from "./components/CollectionPage";
import About from "./pages/About";

function App() {
  const [showSpareRibs, setShowSpareRibs] = useState(false);
  const [activeCollection, setActiveCollection] = useState(null);
    const [
  showCheesySausagePotatoes,
  setShowCheesySausagePotatoes
] = useState(false);
const [showBirdDogSelectReserve, setShowBirdDogSelectReserve] = useState(false);
const [showAbout, setShowAbout] = useState(false);


const collections = {
  smokehouse: {
    title: "The Smokehouse",
    description:
      "Real backyard BBQ, smoked low and slow. Browse the cooks, recipes, and lessons learned around the pit.",
    items: [
      {
        id: "spare-ribs",
        title: "Backyard Smoked Spare Ribs",
        description:
          "Two racks of spare ribs smoked on the Traeger Pro 34, wrapped with Butter Bath, and finished with BBQ sauce.",
        image: "/images/food/spare-ribs-after.jpeg",
      },
    ],
  },

 
kitchen: {
  title: "The Kitchen",
  description:
    "Easy, affordable, and delicious meals for the whole family. Welcome to the Pit & Pour digital cookbook.",
  items: [
    {
      id: "cheesy-sausage-potatoes",
      title: "Cheesy Sausage & Potatoes Skillet",
      description:
        "Golden potatoes, browned smoked sausage, and plenty of melted cheddar cheese. An easy, hearty skillet dinner!",
      image: "/images/food/cheesy-potatoes-sausage.jpeg",
    },
  ],
},


  "weekend-pour": {
    title: "The Weekend Pour",
    description:
      "A casual look at bourbon, from the first aroma to the final sip. Real bottles, real tasting notes, and personal reviews.",
    
items: [
  {
    id: "bird-dog-select-reserve",
    title: "Bird Dog Select Reserve",
    description:
      "A surprisingly smooth, budget-friendly Kentucky straight bourbon with maple on the nose, a sweet swallow, and very little burn. Would I buy it again? Absolutely!",
    image: "/images/bourbon/birddog-bourbon.jpeg",
  },
],

  },
};


if (showAbout) {
  return (
    <>
      <div className="about-back-container">
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={() => {
            setShowAbout(false);
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


if (activeCollection && collections[activeCollection]) {
  const collection = collections[activeCollection];

  return (
    <div>
      <CollectionPage
        title={collection.title}
        description={collection.description}
        items={collection.items}
        onBack={() => {
          setActiveCollection(null);
          window.scrollTo(0, 0);
        }}
       
onSelect={(id) => {
  if (id === "spare-ribs") {
    setShowSpareRibs(true);
    setActiveCollection(null);
    window.scrollTo(0, 0);
  }

  if (id === "cheesy-sausage-potatoes") {
    setShowCheesySausagePotatoes(true);
    setActiveCollection(null);
    window.scrollTo(0, 0);
  }

if (id === "bird-dog-select-reserve") {
  setShowBirdDogSelectReserve(true);
  setActiveCollection(null);
  window.scrollTo(0, 0);
}

}}

      />
      <Footer />
    </div>
  );
}


if (showBirdDogSelectReserve) {
  return (
    <div>
      <div
        className="recipe-page-container"
        style={{ paddingTop: "30px", paddingBottom: "0" }}
      >
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={() => {
            setShowBirdDogSelectReserve(false);
            setActiveCollection("weekend-pour");
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


if (showCheesySausagePotatoes) {
  return (
    <div className="recipe-page">
      <div className="recipe-page-container">
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={() => {
            setShowCheesySausagePotatoes(false);
            setActiveCollection("kitchen");
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

if (showSpareRibs) {
  return (
    <div className="recipe-page">
      <div className="recipe-page-container">
        <button
          type="button"
          className="recipe-button recipe-back-button"
          onClick={() => {
            setShowSpareRibs(false);
            window.scrollTo(0, 0);
          }}
        >
          ← Back to Pit & Pour
        </button>

        <SpareRibs />
      </div>
      <Footer />
    </div>
  );
}

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a href="#home" className="site-name">
            PIT <span>&amp;</span> POUR
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#smokehouse">The Smokehouse</a>
            <a href="#kitchen">The Kitchen</a>
            <a href="#weekend-pour">The Weekend Pour</a>
            <button
  type="button"
  className="nav-link-button"
  onClick={() => {
    setShowAbout(true);
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
            Good Smoke. Good Food. Good Pour.
          </p>

          <p className="description">
            From the backyard smoker to the family dinner table,
            with a little bourbon along the way.
          </p>

          <div className="welcome-links">
            <a href="#smokehouse">The Smokehouse</a>
            <a href="#kitchen">The Kitchen</a>
            <a href="#weekend-pour">The Weekend Pour</a>
          </div>

          <p className="coming-soon">
            Something delicious is cooking...
          </p>
        </div>
      </main>
      
      <section className="homepage-sections">
        <div className="sections-container">
          <p className="section-eyebrow">EXPLORE PIT & POUR</p>
          <h2>There's Always Something Cooking</h2>
          <p className="sections-intro">
            Whether it's a long day at the smoker, a quick family
            dinner, or a relaxing weekend pour, there's always
            something worth sharing.
          </p>

          <div className="feature-grid">
            <article id="smokehouse" className="feature-card">
              
<img
  src="/images/food/spare-ribs-after.jpeg"
  alt="Two racks of homemade smoked spare ribs"
  className="feature-photo"
/>

              <h3>The Smokehouse</h3>
              <p>
                Real backyard BBQ, smoking techniques, recipes,
                and lessons learned around the pit.
              </p>
              
<span>BBQ & Smoking</span>

<button
  type="button"
  className="recipe-button"
  onClick={() => {
  setActiveCollection("smokehouse");
  window.scrollTo(0, 0);
}}
>
  View Recipes →
</button>
</article>


            <article id="kitchen" className="feature-card">
  
<img
  src="/images/food/cheesy-potatoes-sausage.jpeg"
  alt="Homemade cheesy sausage and potatoes skillet"
  className="feature-photo"
/>

  <h3>The Kitchen</h3>
  <p>
    Easy, affordable, and delicious meals for the
    whole family. Explore the Pit & Pour cookbook.
  </p>
  <span>Recipes & Cooking</span>

  <button
    type="button"
    className="recipe-button"
    onClick={() => {
      setActiveCollection("kitchen");
      window.scrollTo(0, 0);
    }}
  >
    View Recipes →
  </button>
</article>

<article id="weekend-pour" className="feature-card">
  <img
    src="/images/bourbon/birddog-bourbon.jpeg"
    alt="Bird Dog Select Reserve bourbon"
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
      setActiveCollection("weekend-pour");
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
  )
}

export default App


import './App.css'
import { useState } from "react";
import SpareRibs from "./pages/SpareRibs";
import Footer from "./components/Footer";

function App() {
  const [showSpareRibs, setShowSpareRibs] = useState(false);


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
            <a href="#about">About</a>
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
    setShowSpareRibs(true);
    window.scrollTo(0, 0);
  }}
>
  View Spare Ribs Recipe →
</button>
</article>


            <article id="kitchen" className="feature-card">
              <div className="feature-icon">🍳</div>
              <h3>The Kitchen</h3>
              <p>
                Easy, affordable, and delicious meals for the
                whole family. Explore the Pit & Pour cookbook.
              </p>
              <span>Recipes & Cooking</span>
            </article>

            <article id="weekend-pour" className="feature-card">
              <div className="feature-icon">🥃</div>
              <h3>The Weekend Pour</h3>
              <p>
                A casual look at bourbon, from the first aroma
                to the final sip.
              </p>
              <span>Bourbon Reviews</span>
            </article>
          </div>
        </div>
      </section>
<Footer />
    </>
  )
}

export default App

import { useState, useEffect } from "react";

export default function BirdDogSelectReserve() {
  const [enlargedPhoto, setEnlargedPhoto] = useState(null);

  useEffect(() => {
    if (!enlargedPhoto) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setEnlargedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [enlargedPhoto]);

  return (

    <main className="recipe-page">
      <div className="recipe-page-container">
        <div className="recipe-header">
          <span className="recipe-category">THE WEEKEND POUR / BOURBON REVIEWS</span>

          <h1>Bird Dog Select Reserve Bourbon</h1>

          <p>
            Sometimes a cheaper bottle surprises you, and this one definitely
            did. Bird Dog Select Reserve is a smooth, easy-drinking bourbon
            that I'd have no problem picking up again.
          </p>
        </div>

        <div className="recipe-info-grid">
          <div className="recipe-info-item">
            <span>THE BOTTLE</span>
            <strong>Bird Dog Select Reserve</strong>
          </div>

          <div className="recipe-info-item">
            <span>PROOF</span>
            <strong>86 Proof</strong>
          </div>

          <div className="recipe-info-item">
            <span>MY PREFERENCE</span>
            <strong>On the Rocks</strong>
          </div>

          <div className="recipe-info-item">
            <span>WOULD I BUY AGAIN?</span>
            <strong>Absolutely</strong>
          </div>
        </div>

        <section className="recipe-gallery bourbon-gallery">
          <div className="recipe-gallery-item">
           
<button
  type="button"
  className="bourbon-photo-button"
  onClick={() =>
    setEnlargedPhoto("/images/bourbon/birddog-bourbon.jpeg")
  }
  aria-label="Enlarge Bird Dog Select Reserve bottle photo"
>
  <img
    src="/images/bourbon/birddog-bourbon.jpeg"
    alt="Bird Dog Select Reserve bourbon bottle"
    loading="lazy"
  />
</button>

            <div className="recipe-gallery-caption">
              <span>01 / THE BOTTLE</span>
              <h3>Bird Dog Select Reserve</h3>
              <p>Kentucky straight bourbon whiskey, bottled at 86 proof.</p>
            </div>
          </div>

          <div className="recipe-gallery-item">
            

<button
  type="button"
  className="bourbon-photo-button"
  onClick={() =>
    setEnlargedPhoto("/images/bourbon/birddog-bourbon-iced.jpeg")
  }
  aria-label="Enlarge Bird Dog Select Reserve pour photo"
>
  <img
    src="/images/bourbon/birddog-bourbon-iced.jpeg"
    alt="Bird Dog Select Reserve bourbon served over ice"
    loading="lazy"
  />
</button>


            <div className="recipe-gallery-caption">
              <span>02 / THE POUR</span>
              <h3>My Kind of Pour</h3>
              <p>A little bourbon over ice. Just how I like it.</p>
            </div>
          </div>
        </section>

        <section className="recipe-section">
  <h2>My Tasting Notes</h2>

  <p>
    I'm always willing to try a new bourbon, especially if I can
    find something good without spending a fortune. I picked up
    a bottle of Bird Dog Select Reserve, and I've got to say,
    this one surprised me a little!
  </p>

  <div className="recipe-steps">
    <div className="recipe-step">
      <h3>The Nose</h3>
      <p>
        The first thing I noticed was the maple. There's
        definitely a sweet maple smell coming off this bourbon,
        and it's pretty noticeable right from the start.
      </p>
    </div>

    <div className="recipe-step">
      <h3>The Taste</h3>
      <p>
        For a cheaper bourbon, this stuff is actually really good!
        It's smooth going down, has a nice sweetness to it, and
        there's just a little bit of a burn at the end. Nothing
        crazy or harsh, though.
      </p>
      <p>
        I've definitely had more expensive bourbons that I didn't
        enjoy nearly as much as this one.
      </p>
    </div>

    <div className="recipe-step">
      <h3>How I Drink It</h3>
      <p>
        I'm an on-the-rocks kind of guy, so that's how I enjoyed
        this one. Pour a little over some ice, let it sit for a
        minute, and enjoy. Nothing complicated!
      </p>
    </div>
  </div>
</section>

<section className="recipe-section">
  <h2>My Final Pour</h2>

  <p>
    Overall, I'm pretty impressed with Bird Dog Select Reserve.
    It's smooth, it's got a good sweetness to it, and the little
    bit of burn doesn't take away from the experience.
  </p>

  <p>
    For a bourbon that's on the cheaper side, I think it's a
    really solid choice.
  </p>

  <p>
    <strong>Would I buy another bottle? Absolutely!</strong>
  </p>

  <p>
    If you're looking for something good to sip on without
    spending a bunch of money, I'd definitely recommend giving
    this one a try.
  </p>

  <p>
    <em>Smoke Has a Story. So Does Every Pour.</em>
  </p>
</section>
</div>
      {enlargedPhoto && (
        <div
          className="bourbon-lightbox"
          role="presentation"
          onClick={() => setEnlargedPhoto(null)}
        >
          <div
            className="bourbon-lightbox-content"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged bourbon photograph"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="bourbon-lightbox-close"
              onClick={() => setEnlargedPhoto(null)}
              aria-label="Close enlarged photograph"
            >
              ×
            </button>

            <img
              src={enlargedPhoto}
              alt="Enlarged Bird Dog Select Reserve photograph"
            />
          </div>
        </div>
      )}
    </main>
  );
}


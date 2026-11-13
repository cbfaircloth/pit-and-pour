
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            PIT <span>&amp;</span> POUR
          </h3>
          <p>"Smoke Has a Story. So Does Every Pour."</p>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Pit &amp; Pour.
            All Rights Reserved.
          </p>

          <p className="footer-tagline">
            Smoke • Food • Bourbon
          </p>
        </div>
      </div>
    </footer>
  );
}

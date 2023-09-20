import CV from "../../assets/ChandraShekhar.pdf";

function CTA() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download target="_blank" rel="noopener noreferrer">
        Download CV
      </a>

      <a className="btn btn-primary" href="#contact">
        Let&rsquo;s Talk
      </a>
    </div>
  );
}
export default CTA;

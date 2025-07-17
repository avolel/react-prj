import { useEffect } from "react";

function AI_ParkingViolationsNYC() {
  useEffect(() => {
    document.title = "AI Parking Violations NYC";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore AI-driven solutions for parking violations in New York City."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Explore AI-driven solutions for parking violations in New York City.";
      document.head.appendChild(meta);
    }

    // Set canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://andrevolel.com/ai-parking");
  }, []);

  return (
    <>
      <div
        className="container-fluid text-center py-5"
        style={{ marginTop: "80px" }}
      >
        <h1>Parking Violations in NYC</h1>
        <p className="lead">
          This application allows users to search for specific parking
          violations in NYC.
        </p>
      </div>
    </>
  );
}

export default AI_ParkingViolationsNYC;

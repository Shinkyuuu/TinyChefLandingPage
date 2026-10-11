import { StoreButtons } from "@/components/StoreButtons";
import { site } from "@/lib/site";

const features = [
  { title: "Feature one", body: "Short description of a key feature goes here." },
  { title: "Feature two", body: "Short description of a key feature goes here." },
  { title: "Feature three", body: "Short description of a key feature goes here." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="logo-placeholder" aria-hidden="true">LOGO</div>
          <h1>{site.name}</h1>
          <p>{site.tagline}</p>
          <div id="download">
            <StoreButtons />
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2>What is {site.name}?</h2>
          <div className="features">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

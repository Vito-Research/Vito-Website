import "./sectionContainer.scss";
import AboutSection from "./AboutSection";
import AlgorithmSection from "./AlgorithmSection";
import AppsSection from "./AppsSection";
import Footer from "./Footer";

export default function SectionContainer() {
  return (
    <div className="section-container">
      <AboutSection />
      <AppsSection />
      <AlgorithmSection />
      <Footer />
    </div>
  );
}

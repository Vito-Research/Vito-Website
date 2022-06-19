import AboutSection from "./AboutSection";
import AlgorithmSection from "./AlgorithmSection";
import AppsSection from "./AppsSection";
import StatsSection from "./StatsSection";
import SectionContainer from "../../SectionContainer";
import Footer from "./Footer";

export default function HomeSections() {
  return (
    <SectionContainer>
      <AboutSection />
      <StatsSection />
      <AppsSection />
      <AlgorithmSection />
      <Footer />
    </SectionContainer>
  );
}

import AboutSection from "./AboutSection";
import AlgorithmSection from "./AlgorithmSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";
import SectionContainer from "../../SectionContainer";
import HomeFooter from "./HomeFooter";

export default function HomeSections() {
  return (
    <SectionContainer>
      <AboutSection />
      <StatsSection />
      <FeaturesSection />
      <AlgorithmSection />
      <HomeFooter />
    </SectionContainer>
  );
}

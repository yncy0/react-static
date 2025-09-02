import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import PrerequisitesSection from "./PrerequisitesSection";

export default function App() {
  return (
    <main className="flex flex-col w-screen justify-center items-center">
      <HeroSection />
      <PrerequisitesSection />
      <AboutSection />
    </main>
  );
}

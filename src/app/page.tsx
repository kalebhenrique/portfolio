import Stack from "~/components/stack/";
import AboutMe from "../components/about/";
import Introduction from "../components/introduction/";
import Projects from "../components/portfolio/";

export default function HomePage() {
  return (
    <main className="relative">
      <Introduction />
      <AboutMe />
      <Stack />
      <Projects />
    </main>
  );
}

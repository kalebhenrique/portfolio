import AboutMe from "../components/about/aboutMe";
import Introduction from "../components/introduction/introduction";
import Projects from "../components/projects/projects";

export default function HomePage() {
  return (
    <main className="relative">
      <Introduction />
      <AboutMe />
      <Projects />
    </main>
  );
}

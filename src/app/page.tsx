import AboutMe from "./_components/about/aboutMe";
import Introduction from "./_components/introduction/introduction";
import Projects from "./_components/projects/projects";

export default function HomePage() {
  return (
    <main className="relative">
      <Introduction />
      <AboutMe />
      <Projects />
    </main>
  );
}

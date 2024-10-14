import Stack from "~/components/stack/";
import AboutMe from "../components/about/";
import Introduction from "../components/introduction/";
import Projects from "../components/portfolio/";
import Chat from "~/components/chat";

export default function HomePage() {
  return (
    <main className="relative mx-auto">
      <Introduction />
      <AboutMe />
      <Stack />
      <Projects />
      <Chat />
    </main>
  );
}

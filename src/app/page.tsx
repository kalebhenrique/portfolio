import AboutMe from "./_components/aboutMe";
import Footer from "./_components/footer";
import Introduction from "./_components/introduction";
import Navbar from "./_components/navbar";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Footer />
    </main>
  );
}

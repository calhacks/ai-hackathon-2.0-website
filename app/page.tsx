import SponsorsPartners from "@/components/SponsorsPartners";
import DontMissOut from "@/components/DontMissOut";
import PhotoGrid from "@/components/PhotoGrid";
import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main>
      <Nav />
      <Landing />
      <PhotoGrid />
      <FAQ />
      <SponsorsPartners />
      <DontMissOut />
    </main>
  );
}

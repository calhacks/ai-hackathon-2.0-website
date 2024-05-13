import SponsorsPartners from "@/components/SponsorsPartners";
import DontMissOut from "@/components/DontMissOut";
import PhotoGrid from "@/components/PhotoGrid";
import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Landing from "@/components/Landing";
import Revolution from "@/components/Revolution";

export default function Home() {
  return (
    <main className="bg-black bg-[url('../public/images/landing-bg.svg')] bg-cover">
      <Nav />
      <Landing />
      <Revolution />
      <PhotoGrid />
      <FAQ />
      {/* <SponsorsPartners /> */}
      <DontMissOut />
    </main>
  );
}

import SponsorsPartners from "@/components/SponsorsPartners";
import DontMissOut from "@/components/DontMissOut";
import PhotoGrid from "@/components/PhotoGrid";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <PhotoGrid />
      <FAQ />
      <SponsorsPartners />
      <DontMissOut />
    </main>
  );
}

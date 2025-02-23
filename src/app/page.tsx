import { Header } from "@/app/components/Header";
import { Banner } from "@/app/components/sections/Banner";
import { Partners } from "@/app/components/sections/Partners";
import { DifferentThinking } from "@/app/components/sections/DifferentThinking";
import { Strategies } from "@/app/components/sections/Strategies";
import { Footer } from "@/app/components/Footer";
import { LetsGrowTogheter } from "@/app/components/sections/LetsGrowTogheter";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <Banner/>
        <Partners/>
        <DifferentThinking/>
        <Strategies/>
        <LetsGrowTogheter/>
      </main>
      <Footer/>
    </>
  );
}

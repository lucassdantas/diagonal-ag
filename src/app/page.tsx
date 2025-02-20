import { Banner } from "@/app/components/sections/Banner";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="bg-main_black">
        <Banner/>
        
      </main>
      <Footer/>
    </>
  );
}

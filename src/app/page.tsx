import { Banner } from "@/app/components/Banner";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="">
        <Banner/>
      </main>
      <Footer/>
    </>
  );
}

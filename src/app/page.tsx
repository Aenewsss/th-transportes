import Differentials from "@/components/Differentials";
import Feedbacks from "@/components/Feedbacks";
import Footer from "@/components/Footer";
import HomeTop from "@/components/HomeTop";
import Services from "@/components/Services";
import WhatsAppFixed from "@/components/WhatsAppFixed";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeTop />
      <Services />
      <Differentials />
      <div className="bg-black d-flex justify-content-center gap-3 align-items-center py-5">
        <p className="display-4 text-location my-4 text-center">Mudanças<br/>interestaduais</p>
      </div>
      <Feedbacks />
      <Footer />
      <WhatsAppFixed />
    </main>
  )
}

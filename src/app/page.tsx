import Asgardsofa from "@/components/Asgardsofa";
import Hero from "@/components/Hero";
import Ourblogs from "@/components/Ourblogs";
import Sidetables from "@/components/Sidetables";
import Toppicks from "@/components/Toppicks";
import Ourinsta from "@/components/Ourinsta";


export default function Home() {
  return (
    <div className="overflow-hidden w-[1440px]">
      <Hero/>
      <Sidetables/>
      <Toppicks/>
      <Asgardsofa/>
      <Ourblogs/>
      <Ourinsta/>
    </div>
  );
}

import Image from "next/image";
import Ourproducts from "./components/Ourproducts";
import Featured from "./components/Featured";
import Welcome from "./components/Welcome";
import Brands from "./components/Brands";
import Topcategories from "./components/Topcategories";
import ExplorenewProducts from "./components/ExplorenewProducts";

export default function Home() {
  return (
    <div className="mb-32">
    <Welcome/>
    <Brands/>
    <div className="heading text-3xl  flex justify-start font-bold text-[#272343] pt-24 pb-10">
      Featured Products
    </div>
    <Featured/>
    <Topcategories/>
    <ExplorenewProducts/>
    <div className="heading text-3xl md:text-center font-bold text-[#272343] pt-28 pb-16">
      Our Products
    </div>
    <Ourproducts/>
    </div>
  );
}

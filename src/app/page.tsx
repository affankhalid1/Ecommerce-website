import Ourproducts from "../components/Ourproducts";
import Featured from "../components/Featured";
import Welcome from "../components/Welcome";
import Carousel from "@/components/Carousel";
import Category from "../components/Category";
import ExplorenewProducts from "../components/ExplorenewProducts";



export default function Home() {
  return (
    <div className="mb-32">

    <Welcome/>
    <Carousel/>
    <div className="heading text-2xl justify-center text-center sm:text-start  sm:text-3xl  flex sm:justify-start font-bold text-[#272343] pt-8 sm:pt-24 pb-4 sm:pb-10">
      Featured Products
    </div> 
    <Featured/>
    <Category/>
    <ExplorenewProducts/>
    <div className="heading text-2xl flex justify-center text-center sm:text-start  sm:text-3xl  sm:justify-start font-bold text-[#272343]  pt-8 sm:pt-24 pb-4 sm:pb-10">
      Our Products
    </div>
    <Ourproducts/>
    
    </div>
  );
}

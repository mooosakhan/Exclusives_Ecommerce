import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FlashSales from "./components/FlashSales";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Gamepad from "./assets/assets/GamePad.png";
import hodie from "./assets/assets/hodie.png";
import Enhance_image from './components/Enahnce_image'
import table from './assets/assets/table.png'
import PC from './assets/assets/psGaming.png'
import Featured from './components/Featured'
import  Tags from './components/Tags'






function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <FlashSales main="Todays" text="Flash Sales" type="block" />
      <Cards Image={Gamepad} types=""/>
      <hr className="mx-44 my-16" />
      <FlashSales main="Categories" text="Browse By Category" type="hidden" />
      <Categories />
      <hr className="mx-44 my-16" />
      <FlashSales main="This Month" text="Best Selling Products" type="hidden" />
      <Cards Image={hodie}  types=""/>
      <Enhance_image/>
      <FlashSales main="Our Products" text="Explore Our Products" type="hidden" />
      <Cards Image={table} types="hidden"/>
      <Cards Image={PC} types=""/>
      <FlashSales main="Featured" text="New Arrival" type="hidden"
      type2="hidden" />
      <Featured/>
      <Tags/>
      
    
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FlashSales from "./components/FlashSales";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Gamepad from "./assets/assets/GamePad.png";
import hodie from "./assets/assets/hodie.png";



function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <FlashSales main="Todays" text="Flash Sales" type="block" />
      <Cards Gamepad={Gamepad} />
      <hr className="mx-44 my-16" />
      <FlashSales main="Categories" text="Browse By Category" type="hidden" />
      <Categories />
      <hr className="mx-44 my-16" />
      <FlashSales main="This Month" text="Best Selling Products" type="hidden" />
      <Cards Gamepad={hodie} />
    </>
  );
}

export default App;

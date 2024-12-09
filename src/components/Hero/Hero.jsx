import hero_image from "../../assets/assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex my-6 justify-center mx-[7vw] gap-4 h-[50vh]">
      <div className="lists border-r-2 border-zinc-300 p-8 flex-col justify-center gap-[1vw] text-lg lg:flex hidden">
        <div className="list">Women's fashion</div>
        <div className="list">Men's fashion</div>
        <div className="list">Electronics</div>
        <div className="list">Home & Lifestyle</div>
        <div className="list">Medicine</div>
        <div className="list">Sports & Outdoor</div>
        <div className="list">Baby's & Toys</div>
        <div className="list">Groceries & Pets</div>
        <div className="list">Health & Beauty</div>
      </div>
      <div className="Hero_image flex justify-center p-6">
        <img src={hero_image}  alt="" />
      </div>
    </div>
  );
};

export default Hero;

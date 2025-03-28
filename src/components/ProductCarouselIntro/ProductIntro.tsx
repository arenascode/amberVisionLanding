import "./productIntro.scss";
//*Imgs //
import amberLensesSide from "/assets/product/amberLensesSide.webp";
import amberLensesFront from "/assets/product/amberLensesFront.webp";
import amberLensesBack from "/assets/product/amberLensesBack.webp";
import amberLensesSide2 from "/assets/product/amberLensesSideTwo.webp";
import amberLensesSideMini from "/assets/product/amberLensesSideMini.webp";
import amberLensesBackMini from "/assets/product/amberLensesBackMini.webp";
import amberLensesSideTwoMini from "/assets/product/amberLensesSideTwoMini.webp";
import amberLensesFrontMini from "/assets/product/amberLensesFrontMini.webp";

const ProductIntro = () => {

  const changeSlide = (slideId: string) => {
    console.log({slideId});
    
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
      targetSlide.scrollIntoView({ block: "nearest", inline: "center" });
    }
    const miniImgs = document.querySelectorAll(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    miniImgs.forEach((img) => {
      if (img.dataset.img == slideId) {
        img.style.borderColor = "#ff9068";
      }
    });
  };

  const handleMiniImgs = (e: React.MouseEvent<HTMLDivElement>) => {
    const slideNumber = e.target.parentNode.dataset.img;
    changeSlide(slideNumber);
    const miniImgs = document.querySelectorAll(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    e.currentTarget.style.borderColor = "#ff9068";
  };

  return (
    <div>
      <div className="h-full w-full" id="product">
        {/* <Banner messageOne={`Envío Gratis, Paga Al Recibir`} /> */}
        <div className="productImagesContainer" id="productSlider">
          <div className="imgContainer">
            <div
              id="carouselImgs"
              className="w-full carousel rounded-box h-[inherit]"
            >
              <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                  src={amberLensesSide}
                  className="w-full"
                  alt="allModels"
                  loading="eager"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src={amberLensesFront}
                  className="w-full slide2"
                  alt="Packaging1"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full ">
                <img
                  src={amberLensesBack}
                  className="w-full"
                  alt="Tailwind CSS Carousel component"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img src={amberLensesSide2} className="w-full" alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  src={amberLensesSide}
                  className="w-full"
                  alt="strenght levels"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-fire-btn/60 border-none text-white"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
            <div className="miniImgsContainer">
              <div
                className="miniImg slide1 border-2"
                data-img="slide1"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesSideMini} alt="" />
              </div>
              <div
                className="miniImg slide2 border-2"
                data-img="slide2"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesFrontMini} alt="" />
              </div>
              <div
                className="miniImg slide3 border-2"
                data-img="slide3"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesBackMini} alt="" />
              </div>
              <div
                className="miniImg slide4 border-2"
                data-img="slide4"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesSideTwoMini} alt="" />
              </div>
              <div
                className="miniImg slide5 border-2"
                data-img="slide5"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesFrontMini} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;


import "./productIntro.scss";
//*Imgs //
import manUsingGlasses from "/assets/img/manUsingGlasses.webp";
import amberLensesSide from "/assets/product/amberLensesSide.webp";
import amberLensesBack from "/assets/product/amberLensesBack.webp";
import amberLensesSideTwo from "/assets/product/amberLensesSideTwo.webp";
import amberLensesFront from "/assets/product/amberLensesFront.webp";
import manUsingGlassesMini from "/assets/img/manUsingGlassesMini.webp";
import amberLensesBackMini from "/assets/product/amberLensesBackMini.webp";
import amberLensesSideMini from "/assets/product/amberLensesSideMini.webp";
import amberLensesSideTwoMini from "/assets/product/amberLensesSideTwoMini.webp";
import amberLensesFrontMini from "/assets/product/amberLensesFrontMini.webp";

const ProductIntro = () => {

  const changeSlide = (slideId: string) => {
    console.log({slideId});
    
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) {
      console.log({targetSlide});
      
      targetSlide.scrollIntoView({ block: "nearest", inline: "center" });
    }
    const miniImgs = document.querySelectorAll<HTMLImageElement>(".miniImg")
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    miniImgs.forEach((img) => {
      if (img.dataset.img == slideId) {
        img.style.borderColor = "#ff9068";
      }
    });
  };

  const handleMiniImgs = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement; // Explicitly cast e.target to HTMLElement
    const parent = target.parentElement as HTMLElement | null; // Use parentElement (better than parentNode)

    if (!parent) return; // Ensure parent exists before accessing dataset

    const slideNumber = parent.dataset.img;
    if (slideNumber) changeSlide(slideNumber);

    const miniImgs = document.querySelectorAll<HTMLImageElement>(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));

    (e.currentTarget as HTMLElement).style.borderColor = "#ff9068";
  };


  return (
    <div>
      <div className="h-full w-full" id="product">
        {/* <Banner messageOne={`Envío Gratis, Paga Al Recibir`} /> */}
        <div className="productImagesContainer" id="productSlider">
          <div className="imgContainer">
            <div
              id="carouselImgs"
              className="w-full carousel rounded-box xl:h-[450px]"
            >
              <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                  src={manUsingGlasses}
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
                  src={amberLensesSide}
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
                  src={amberLensesFront}
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
                <img src={amberLensesBack} className="w-full" alt="" />
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
                  src={amberLensesSideTwo}
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
                <img src={manUsingGlassesMini} alt="" />
              </div>
              <div
                className="miniImg slide2 border-2"
                data-img="slide2"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesSideMini} alt="" />
              </div>
              <div
                className="miniImg slide3 border-2"
                data-img="slide3"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesFrontMini} alt="" />
              </div>
              <div
                className="miniImg slide4 border-2"
                data-img="slide4"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesBackMini} alt="" />
              </div>
              <div
                className="miniImg slide5 border-2"
                data-img="slide5"
                onClick={handleMiniImgs}
              >
                <img src={amberLensesSideTwoMini} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;


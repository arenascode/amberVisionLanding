import "../styles/css/app.css";
import {
  Check,
  Star,
  ShoppingCart,
  Clock,
  Shield,
  Truck,
  Eye,
  Moon,
  AlertTriangle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CountdownTimer from "@/components/ui/countdown-timer";
import TestimonialCarousel from "@/components/ui/testimonial-carousel";
import ProductIntro from "../components/ProductCarouselIntro/ProductIntro";
// import  HamburgerButton  from "../components/ui/hamburguerBtn";
import AnnouncementCarousel from "../components/ui/annoouncement-carousel";
import { useEffect, useState } from "react";
import FadeIn from "../components/ui/fadeIn";
import CheckoutModal from "../components/checkout/CheckoutModal";
import { Product } from "../components/checkout/CheckoutForm";
import amberLensesSingle from "/assets/product/singlePair.webp";
import amberLensesPairPromo from "/assets/product/pairLenses.webp";
import CheckoutSuccessPage from "../components/checkout/SuccessPurchase";
// import NavBarMobile from "../../components/navBar/navBarMobile";
import imageSolution from "/assets/img/manUsingGlasses2.avif";
import tiredMan from "/assets/img/tiredMan.avif";
import comfortableMan from "/assets/img/comfortableMan.avif";
import founderImage from "/assets/img/imageFounder.avif";
import manCoding from "/assets/img/manCodingV2.avif";
import measure1 from "/assets/product/measure1.avif";
import measure2 from "/assets/product/measure2.avif";
import iconGlasses from "/assets/icons/iconGlasses.webp";
import coupleWatchingMovies from "/assets/img/coupleWatchingMovies.avif";
import testingVideo from "/assets/video/testingVideo.mp4";
import peopleUsingGlasses from "/assets/img/peopleUsingGlasses-desktop.avif";
import ReactPixel from "react-facebook-pixel";
import BeforeAfterTransition from "@/components/ui/BeforeAfterTransition";
import ebook1 from "/assets/img/ebook1.avif";
import ebook2 from "/assets/img/ebook2.avif";
import TrackedSection from "@/components/TrackedSection";


interface HomeProps {
  isMobile: boolean;
}

const products = [
  {
    id: "basic",
    name: "1 Par de Gafas Amber Vision con filtro de luz azul",
    price: 119999,
    priceBefore: 150000,
    image: amberLensesSingle,
    gift1:
      "+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul",
    gift2:
      "RECUPERA TU SUEÑO - La Guía Práctica y Cientifica Para Despertar Lleno de Energía",
    gift3:
      "¡SOS PANTALLAS! Tu Guía de Hábitos y Ejercicios para una Visión Descansada y Ojos Felices",
  },
  {
    id: "promo",
    name: "2 Pares de Gafas Amber Vision con filtro de luz azul",
    price: 219999,
    priceBefore: 300000,
    image: amberLensesPairPromo,
    gift1:
      "(+ Estuche Carcasa Dura + Estuche Tela + Paño Microfibra + Tarjeta de Prueba Anti Luz Azul) X 2",
    gift2:
      "RECUPERA TU SUEÑO - La Guía Práctica y Cientifica Para Despertar Lleno de Energía",
    gift3:
      "¡SOS PANTALLAS! Tu Guía de Hábitos y Ejercicios para una Visión Descansada y Ojos Felices",
  },
]


export default function Home({ isMobile }: HomeProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // const [isNavBarMenuOpen, setIsNavBarMenuOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [successPage, setSuccessPage] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const fbq = ReactPixel;
  const openCheckout = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      fbq.trackCustom("OpenForm", { product: product.id });
      setSelectedProduct(product);
      setIsCheckoutOpen(true);
    }
  };
  //effect for closing checkout
  const handleOrderNumberFromChild = (data: string) => {
    setOrderNumber(data);
  };

  useEffect(() => {
    if (successPage) {
      setIsCheckoutOpen(false);
    }
  }, [successPage]);

  return (
    <div className="flex min-h-screen flex-col relative">
      <AnnouncementCarousel />
      <main className="text-white">
        {/* Single fixed gradient background */}
        <div className="fixed inset-0 z-[-1] bg-black">
          {/* Main radial gradient with orange accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,140,0,0.7)_10%,transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(255,140,0,0.7)_10%,transparent_50%),radial-gradient(circle_at_center,#2c2c2c_0%,#1f1f1f_5%,#000000_60%)] md:bg-[radial-gradient(ellipse_at_top_right,#ff8c00_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,#ff8c00_0%,transparent_45%),radial-gradient(circle_at_center,#2c2c2c_0%,#1f1f1f_0%,#000000_70%)]"></div>

          {/* Optional subtle noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        </div>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] py-6 md:py-8 lg:py-10 items-center lg:flex justify-center mt-22 xl:mt-27"
        >
          <div className="container px-2 md:px-6 lg:px-2 lg:w-full justify-center">
            <div className="flex flex-col gap-8 md:gap-10 lg:flex-row items-center lg:items-start xl:gap-20 xl:w-full xl:px-10">
              <div className="flex flex-col justify-between w-full gap-5 lg:gap-9">
                <Badge
                  className="w-fit border-1 border-white text-sm xl:text-lg text-white"
                  variant="outline"
                >
                  Protección Premium para tus Ojos
                </Badge>
                <h1 className="text-xl font-bold tracking-wider text-center sm:text-2xl md:text-3xl lg:text-2xl xl:text-[2.2rem] font-body uppercase fade-in-up leading-tight">
                  ¿Tus ojos arden o te cuesta dormir después de usar el celular
                  o el computador?
                </h1>

                {/* <h1 className="text-lg font-bold tracking-wider  sm:text-3xl md:text-3xl xl:text-[2.2rem] font-body uppercase fade-in-up">
                  La exposición a pantallas desgasta tu vista y altera tu sueño
                  - <br />{" "}
                  <span className="">
                    nuestras gafas te devuelven el bienestar desde el primer
                    uso.
                  </span>
                </h1> */}
                {/* <span className="italic text-xl mt-[-15px]">
                  Nuestras gafas te devuelven el bienestar desde el primer uso.
                </span> */}
                <p className="text-lg md:text-xl text-center mt-2 text-primary-foreground">
                  Nuestras gafas con filtro ámbar bloquean la luz azul dañina y
                  te ayudan a recuperar el bienestar visual y tu descanso desde
                  el primer uso.
                </p>

                {/* <p className="text-sidebar-primary-foreground font-body md:text-xl lg:text-xl">
                  Decenas de personas como tú sintieron alivio inmediato en sus
                  ojos al usar nuestras gafas... y, sin esperarlo, también
                  comenzaron a dormir mejor.
                </p> */}
                <div className="md:hidden mobile">
                  {isMobile && <ProductIntro />}
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:flex-wrap items-flex-start gap-2 pt-2">
                  <div className="stars_qty_sold flex self-start items-center lg:hidden gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#FFD700] border-[#FFD700] stroke-[#FFD700]"
                          size="large"
                        />
                      ))}
                    </div>
                    <span className="text-lg lg:text-xl font-medium xl:text-nowrap font-bold">
                      + 500 Vendidas
                    </span>
                  </div>

                  <p className="text-lg text-start text-primary-foreground max-w-xl mx-auto">
                    Cientos de personas como tú sintieron alivio inmediato en
                    sus ojos al usarlas... y sin esperarlo, también comenzaron a
                    dormir mejor.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-1">
                  <div className="stars_qty_sold lg:flex self-start items-center gap-2 hidden lg:flex">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#FFD700] border-[#FFD700] stroke-[#FFD700]"
                          size="large"
                        />
                      ))}
                    </div>
                    <span className="text-lg lg:text-xl font-medium xl:text-nowrap  font-bold">
                      + 500 Vendidas
                    </span>
                  </div>
                  <Button
                    size="default"
                    className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <a
                      href="#pricing"
                      className="flex items-center gap-3 text-[1rem] xl:text-lg"
                    >
                      Quiero Aliviar Mis Ojos y Dormir Mejor
                      <ShoppingCart className="h-5 w-5" />
                    </a>
                  </Button>

                  <div className="flex items-center gap-2 text-sm lg:text-lg text-sidebar-primary-foreground">
                    <Shield className="h-4 w-4" />
                    <span>100% Satisfacción Garantizada</span>
                  </div>
                </div>
                {/* <div className="flex items-center gap-2 pt-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[#FFD700] border-[#FFD700] stroke-[#FFD700]"
                        size="large"
                      />
                    ))}
                  </div>
                  <span className="text-sm lg:text-lg font-medium xl:text-nowrap">
                    4.9/5 Basado en más de 300 reseñas verificadas
                  </span>
                </div> */}
              </div>
              {!isMobile && (
                <div className="hidden md:flex md:justify-center xl:h-[600px] w-[60%] lg:w-[50%] xl:w-[45%]">
                  <ProductIntro />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section
          id="benefits"
          className="py-10 lg:py-16 lg:flex lg:justify-center"
        >
          <div className="container px-4 md:px-6 lg:flex lg:flex-col lg:items-center">
            {/* Encabezado principal */}
            <div className="flex flex-col items-center text-start gap-5 mb-12 lg:text-center lg:self-center lg:w-[70%]">
              <FadeIn delay={200}>
                <h2 className="text-2xl lg:text-4xl font-bold text-center">
                  La exposición a pantallas desgasta tu vista y altera tu sueño
                </h2>
                <p className="text-xl text-center mt-6 lg:text-2xl lg:tracking-wider">
                    Nuestras gafas te devuelven el bienestar desde el primer
                    uso.
                  </p>
              </FadeIn>

              {/* <p className="text-sidebar-prymary-foreground text-lg max-w-[800px] lg:hidden">
                Menos fatiga, más foco. Menos desvelo, más descanso. Todo
                gracias a unas gafas diseñadas para protegerte del mundo
                digital.
              </p> */}
            </div>

            {/* Beneficios clave */}
            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={100}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <Eye className="text-sidebar-primary-foreground h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Menos Fatiga Visual
                    </h3>
                    <p className="text-lg text-sidebar-primary-foreground">
                      ¿Pasas horas frente a pantallas? Estas gafas reducen el
                      cansancio, la sequedad y la irritación ocular desde el
                      primer uso.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={200}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <Moon className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Duerme Mejor
                    </h3>
                    <p className="text-lg text-sidebar-primary-foreground">
                      La luz azul interfiere con la producción de melatonina,
                      afectando tu descanso. Usa nuestras gafas antes de dormir
                      y despierta renovado.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 md:h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <AlertTriangle className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Menos Dolores de Cabeza
                    </h3>
                    <p className="text-lg text-sidebar-primary-foreground">
                      Despidete de las migrañas por tensión visual. Trabaja,
                      estudia o mira series sin molestias.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Sección de solución con imagen */}
            <div className="mt-14 rounded-xl p-1 shadow-md backdrop-blur-lg bg-white/10 border border-white/10">
              <div className="grid gap-2 lg:grid-cols-2 items-center">
                <div className="relative h-[300px] md:h-[400px] xl:h-[450px] rounded-lg overflow-hidden">
                  <img
                    src={imageSolution}
                    alt="Persona usando gafas con filtro de luz azul"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="xl:self-baseline xl:pt-12">
                  <h3 className="text-2xl font-bold mb-8 xl:text-3xl">
                    Gafas con Filtro de Luz Azul Amber Vision
                  </h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold text-[17px] xl:text-lg">
                          Reducen la fatiga ocular y los dolores de cabeza
                        </span>
                        <p className="text-sidebar-primary-foreground mt-0.5">
                          Usalas durante tu jornada digital y nota el cambio en
                          tus ojos: menos tensión visual y molestias provocadas
                          por el uso prolongado de pantallas.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold text-[17px] xl:text-lg">
                          Favorecen un sueño profundo y natural
                        </span>
                        <p className="text-sidebar-primary-foreground mt-0.5">
                          Ayudan a restaurar tu ciclo circadiano estimulando la
                          producción de melatonina, para que concilies el sueño
                          más rápido y descanses mejor.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold text-[17px] xl:text-lg">
                          Bloquean hasta el 99% de la luz azul más dañina
                        </span>
                        <p className="text-sidebar-primary-foreground mt-0.5">
                          Nuestras gafas especializadas filtran las longitudes
                          de onda más dañinas (415 a 455 nm), responsables de la
                          fatiga ocular y la alteración del sueño.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits & Features */}
        <TrackedSection eventName="features_section_trigger">
          <section
            id="features"
            className="py-6 md:py-10 lg:py-5 xl:flex xl:justify-center"
          >
            <div className="container px-4 md:px-6">
              {/* Encabezado principal */}
              <div className="w-full flex flex-col items-center text-center text-wrap gap-4 mb-12">
                <FadeIn delay={100}>
                  <h2 className="text-3xl xl:text-4xl font-bold tracking-tight xl:mb-5">
                    Antes y Después de Usarlas
                  </h2>
                </FadeIn>

                <p className="text-sidebar-primary-foreground text-lg xl:text-xl max-w-[800px]">
                  Descubre cómo nuestras gafas de bloqueo de luz azul pueden
                  transformar tu día y mejorar tu descanso.
                </p>
              </div>

              {/* Comparación de efectos */}
              <div className="grid gap-8 md:grid-cols-2 mb-8 xl:px-20 max-w-full">
                {/* Sin protección */}
                <div className="rounded-xl p-2 shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:flex xl:flex-col xl:place-items-center">
                  <h3 className="text-xl font-bold mb-4 text-center text-red-500">
                    Sin Protección: <br /> Estrés Visual Constante
                  </h3>
                  <div className="relative h-[320px] xl:h-[400px] w-full xl:w-[400px] rounded-lg overflow-hidden mb-4">
                    <img
                      src={tiredMan}
                      alt="Persona con ojos cansados e irritados"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <ul className="w-full space-y-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:p-4">
                    {[
                      "Vista cansada e irritada.",
                      "Dificultad para dormir.",
                      "Dolores de cabeza frecuentes.",
                      "Falta de concentración y fatiga.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="w-full flex items-start gap-2 text-white text-lg xl:text-lg"
                      >
                        <X className="h-5 w-5 text-red-500 xl:h-7 xl:w-7" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Con protección */}
                <div className="rounded-xl p-2 shadow-md backdrop-blur-lg bg-white/10 border-white/10 border xl:flex xl:flex-col xl:place-items-center">
                  <h3 className="text-xl font-bold mb-4 text-center text-green-500">
                    Con Gafas Amber Vision: <br /> Comodidad y Descanso Total
                  </h3>
                  <div className="relative h-[320px] xl:h-[400px] w-full xl:w-[400px] rounded-lg overflow-hidden mb-4">
                    <img
                      src={comfortableMan}
                      alt="Persona con visión relajada y enfocada"
                      className="object-cover h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <ul className="space-y-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:p-4">
                    {[
                      "Ojos descansados y sin tensión.",
                      "Sueño profundo y reparador.",
                      "Menos dolores de cabeza.",
                      "Mayor enfoque y productividad.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-white text-lg xl:text-lg"
                      >
                        <Check className="h-5 w-5 xl:h-7 xl:w-7 text-success" />
                        <strong className="tracking-wide">{item}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* CTA */}
              <div className="CTA-container flex flex-col justify-center mt-10 md:mt-12 lg:my-20 mb-8 md:mb-14 xl:mb-16 ">
                <Button
                  size="default"
                  className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold p-6 xl:py-6 xs:p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2 w-full lg:w-[80%] mx-auto"
                >
                  <a
                    href="#pricing"
                    className="flex flex-col sm:flex-row items-center gap-0 sm:gap-3 text-[16px] xl:text-xl"
                  >
                    Pruébalas hoy, tus ojos te lo agradecerán
                    <ShoppingCart className="h-5 w-5" />
                  </a>
                </Button>
                <small className="italic self-center md:text-sm xl:mt-1">
                  Compra segura: envío rápido y pagas al recibir 🛡️
                </small>
              </div>

              <div className="beforeAndAfter-container lg:flex lg:flex-row lg:mt-26">
                <BeforeAfterTransition />
                <div className="scienceBehind mt-4 lg:mt-0 px-2 md:px-6 lg:pl-4 lg:pr-0 xl:px-12 max-w-4xl mx-auto text-left lg:flex-1">
                  <img
                    src="/assets/img/Wave-Icon-White.svg"
                    alt="wave icon"
                    className="self-start w-1/2 md:w-1/3"
                    loading="lazy"
                  />
                  <FadeIn delay={100}>
                    <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold mb-4 mt-3 lg:mt-0">
                      La Ciencia Detrás de Amber Vision
                    </h3>
                  </FadeIn>

                  <p className="text-base md:text-lg mb-3">
                    La luz azul y verde —especialmente entre los{" "}
                    <span className="font-semibold">400 y 520 nanómetros</span>—
                    altera tu capacidad para relajarte y
                    <span className="font-semibold">
                      {" "}
                      afecta tu ritmo circadiano
                    </span>
                    , el reloj interno que regula tu descanso.
                  </p>
                  <p className="text-base md:text-lg mb-3">
                    En esta era digital, estamos expuestos a fuentes de{" "}
                    <span className="font-semibold">
                      luz artificial como celulares, computadores o luces LED.
                    </span>{" "}
                    Aunque parezcan inofensivas, incluso niveles bajos de esta
                    luz impiden la correcta producción de melatonina, la hormona
                    clave que le dice a tu cuerpo cuándo es hora de dormir.
                  </p>
                  <p className="text-base md:text-lg mb-3">
                    Nuestras gafas{" "}
                    <span className="font-semibold">Amber Vision</span> filtran
                    selectivamente esta luz nociva, creando un entorno visual
                    más cálido y natural, similar al del atardecer. Al usarlas
                    en las ultimas horas del día,{" "}
                    <span className="font-semibold">
                      tu cuerpo se relajará, dormirás mejor y le dirás adiós a
                      la fatiga ocular si estás muchas horas frente a la
                      pantalla.
                    </span>
                  </p>
                </div>
              </div>
              {/* Video de prueba */}
              <section className="w-full rounded-xl shadow-md backdrop-blur-lg bg-white/10 border-white/10 border p-2 lg:p-5 flex flex-col lg:flex-row items-center mt-10 mb-6">
                <div className="textContainer flex flex-col p-2 lg:self-start lg:flex-2 xl:flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                    Prueba Real de Efectividad 🔎
                  </h2>
                  <p className="text-[1rem] md:text-xl text-start max-w-2xl mb-6 lg:mt-8">
                    Mira cómo nuestras gafas bloquean eficazmente la luz azul.
                    Usamos una tarjeta sensible a esta luz junto con un LED azul
                    intenso. El área sin protección se tiñe de morado, mientras
                    que el área protegida por nuestras lentes permanece intacta.
                  </p>
                  <p className="text-sm hidden md:text-lg lg:text-xl lg:text-wrap text-center font-semibold italic lg:mt-10 lg:block">
                    Te regalamos esta misma tarjeta de prueba para que lo
                    compruebes tú mismo desde casa. 🧪🎁
                  </p>
                </div>

                <div className="videoContainer flex flex-col items-center justify-center lg:flex-1.5 xl:flex-1">
                  <video
                    className="rounded-xl shadow-lg w-full opacity-80 max-w-2xl mb-2 md:w-[40%] lg:w-[100%] xl:w-[60%]"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={testingVideo} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>

                  <p className="text-sm md:text-lg text-center font-semibold italic lg:hidden">
                    Te regalamos esta misma tarjeta de prueba para comprobarlo
                    tú mismo desde casa. 🧪🎁
                  </p>
                </div>
              </section>
              {/* Beneficios adicionales */}
              <div className="grid gap-8 mt-8 md:mt-12 lg:grid-cols-4 xl:px-20 md:flex md:flex-col md:items-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 mt-3 lg:mt-10 text-center">
                  Diseño que se adapta a cualquier rostro
                </h2>
                <div className="imgFeaturesContainer flex flex-col items-center justify-center md:w-[65%] lg:mt-10">
                  <img
                    src={measure1}
                    alt="Medidas gafas frente"
                    className="object-cover"
                    loading="lazy"
                  />
                  <img
                    src={measure2}
                    alt="Medidas Gafas Lateral"
                    loading="lazy"
                    className="mt-5 object-cover"
                  />
                </div>
                <Card className="border-none shadow-md backdrop-blur-lg bg-white/10 border-white/10 h-full">
                  <CardContent className="p-5 flex flex-col md:flex-row items-center text-center gap-4">
                    <div className="cardBody flex flex-col items-center gap-4 text-left md:flex-1">
                      <div className="h-12 lg:h-15 w-12 lg:w-15 rounded-full bg-amber-500/80 flex items-center justify-center text-sidebar-primary-foreground">
                        <img src={iconGlasses} alt="" loading="lazy" />
                      </div>
                      <h3 className="font-bold text-sidebar-primary-foreground text-[1.3rem] lg:text-2xl xl:text-3xl lg:mb-8">
                        Estilo Unisex
                      </h3>
                      <p className="lg:text-xl text-sidebar-primary-foreground">
                        Inspiradas en el estilo atemporal{" "}
                        <strong>Ray-Ban</strong>, estas gafas se ven bien en
                        todo tipo de cara — desde rostros delgados hasta anchos.
                      </p>
                      <p className="text-[1.1rem] lg:text-xl text-sidebar-primary-foreground">
                        Están fabricadas con <strong>TR90 suizo</strong>, un
                        material premium reconocido por su{" "}
                        <strong>ligereza, flexibilidad y resistencia</strong>.
                      </p>
                      <p className="text-[1.1rem] lg:text-xl text-sidebar-primary-foreground">
                        Se ajustan suavemente a tu rostro sin generar presión,
                        incluso tras horas de uso.
                      </p>
                    </div>
                    <div className="cardImg rounded-xl overflow-hidden md:flex-1">
                      <img
                        src={peopleUsingGlasses}
                        alt="Personas usando gafas amber vision"
                        loading="lazy"
                      />
                    </div>
                  </CardContent>
                </Card>
                {/* {[
                {
                  icon: (
                    <Eye className="h-6 w-6 text-sidebar-primary-foreground" />
                  ),
                  title: "Filtran el 99% de la luz azul",
                  description:
                    "Nuestras gafas protegen tu vista y reducen la fatiga ocular en cualquier entorno.",
                },
                {
                  icon: (
                    <Moon className="h-6 w-6 text-sidebar-primary-foreground" />
                  ),
                  title: "Sueño más reparador",
                  description:
                    "Mejoran tu ciclo circadiano para que descanses mejor cada noche.",
                },
                {
                  icon: (
                    <Sun className="h-6 w-6 text-sidebar-primary-foreground" />
                  ),
                  title: "Ligeras y cómodas",
                  description:
                    "Diseñadas para largas jornadas sin molestias ni presión en el rostro.",
                },
                {
                  icon: (
                    <Book className="h-6 w-6 text-sidebar-primary-foreground" />
                  ),
                  title: "Ideales para pantallas",
                  description:
                    "Perfectas para trabajar, leer o ver TV sin afectar tu bienestar.",
                },
              ].map((feature, index) => (
                <FadeIn delay={100}>
                  <Card
                    key={index}
                    className="border-none shadow-md backdrop-blur-lg bg-white/10 border-white/10 h-full"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center text-sidebar-primary-foreground">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-sidebar-primary-foreground text-lg xl:text-xl">
                        {feature.title}
                      </h3>
                      <p className="xl:text-lg text-sidebar-primary-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))} */}
              </div>
            </div>
          </section>
        </TrackedSection>

        {/* Social Proof & Testimonials */}
        <section
          id="testimonials"
          className="py-10 pb-2 md:py-4 overflow-hidden xl:flex xl:justify-center min-h-[900px] md:h-[600px] md:min-h-[418px] lg:min-h-[650px]"
        >
          <div className="container px-4 md:px-6 overflow-hidden h-full md:h-full">
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center gap-4 mb-12 lg:mt-10">
              <FadeIn delay={100}>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  Lo Que Dicen Nuestros Clientes
                </h2>
              </FadeIn>

              <p className="text-sidebar-primary-foreground md:text-lg lg:text-xl max-w-[800px]">
                Cientos de personas han mejorado su sueño y reducido la fatiga
                ocular con nuestras gafas.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel />

            {/* Featured Testimonial */}
            {/* <FadeIn delay={100}>
              <div className="mt-16 rounded-xl p-2 flex flex-col md:flex-row gap-8 items-center shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:mt-28">
                
                <div className="md:w-1/2 ">
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=600&width=600"
                      alt="Video testimonial thumbnail"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="md:w-1/2">
                  <div className="flex mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-[#FFD700] stroke-[#FFD700]"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-sidebar-primary-foreground">
                    "Estas gafas cambiaron mi vida. ¡Duermo mejor que nunca!"
                  </h3>
                  <p className="text-sidebar-primary-foreground mb-4">
                    Después de años de insomnio, dudaba que unas gafas pudieran
                    ayudarme. Pero en solo una semana, comencé a dormir más
                    rápido y despertar con más energía cada mañana.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div>
                    <div>
                      <p className="font-medium">Rodrigo Garcia</p>
                      <p className="text-sm text-sidebar-primary-foreground">
                        Desarrollador Web
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn> */}
          </div>
        </section>

        {/*Gift Section */}
        <TrackedSection eventName="gift_section_trigger">
          <div
            id="purchaseGiftContainer"
            className="px-3 sm:px-6 lg:px-12 xl:px-16 xl:px-28 xl:mx-10 rounded-2xl shadow-lg mt-4 lg:mt-16"
          >
            <div className="giftSection_Container p-2 shadow-md backdrop-blur-lg bg-white/10 border-white/10 rounded-2xl shadow-lg py-5 pb-2 md:py-4 lg:flex lg:flex-col lg:justify-center lg:px-10">
              <div className="text-center mb-7">
                <span className="text-amber-400 font-semibold tracking-widest uppercase text-[1rem] lg:text-lg">
                  🔥 ¡OFERTA EXCLUSIVA! 🔥
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-2">
                  Mejora Tu Vista y Tu Descanso con Estos Regalos Exclusivos 🎁
                </h2>
              </div>
              <div className="gap-8 items-center">
                <div className="text-sidebar-primary-foreground text-lg md:self-start space-y-4 ">
                  <p className="lg:text-xl mb-10">
                    Con tu compra de las Gafas Amber Vision no solo proteges tus
                    ojos y duermes mejor…{" "}
                    <strong>
                      ¡También te regalamos 2 eBooks prácticos y poderosos que
                      transformarán tu rutina nocturna y tu bienestar general!
                      🧘‍♂️📘
                    </strong>
                  </p>

                  <ul className="space-y-2 text-base xl:text-xl xl:space-y-4 font- md:flex md:flex-col md:gap-5">
                    <li className="flex flex-col items-start md:items-center md:flex-row md:gap-3">
                      <div className="left md:flex-1 flex flex-col gap-2">
                        <h3 className="font-bold text-lg md:text-xl mb-2 text-center">
                          📘🌟 EBOOK 1: "RECUPERA TU SUEÑO: La Guía Práctica y
                          Cientifica Para Despertar Lleno de Energía"
                        </h3>

                        <p className="text-base text-[1.1rem] md:text-lg">
                          Descubre estrategias prácticas y fáciles (luz,
                          nutrición, hábitos, estrés) formulados por expertos
                          para alcanzar un sueño profundo y reparador,
                          transformando tus noches y despertando cada día con
                          energía y vitalidad renovada.
                        </p>
                        <span className="font-bold text-lg md:text-xl">
                          (Valorado en $69.900 – ¡Hoy GRATIS para ti!)
                        </span>
                      </div>

                      <div
                        className="right md:flex-1 self-center mt-4 lg:flex lg:justify-center"
                        data-aos="fade-up"
                      >
                        <img
                          src={ebook1}
                          alt="Gift"
                          loading="lazy"
                          className="w-80 sm:w-[300px] h-[250px] md:h-[350px]"
                        />
                      </div>
                    </li>
                    <li className="flex text-5xl justify-center">+</li>
                    <li className="flex flex-col items-start md:items-center md:flex-row-reverse md:gap-3">
                      <div className="left md:flex-1 flex flex-col gap-2 mt-4">
                        <h3 className="font-bold text-lg text-center md:text-xl mb-4">
                          📘🌟 EBOOK 2: "Cuidado Visual en la Era Digital:
                          Estrategias y ejercicios simples para reducir el daño
                          ocular frente a pantallas y mantener tu visión
                          saludable por años. 👁️"
                        </h3>
                        <p className="text-base md:text-lg">
                          Accede a los ejercicios y hábitos más efectivos
                          recomendados por especialistas en salud visual para
                          proteger tus ojos del uso intensivo de pantallas y
                          mantener una visión clara y saludable por años.
                        </p>
                        <span className="font-bold text-lg md:text-xl">
                          (Valorado en $59.900 – ¡También GRATIS para ti!)
                        </span>
                      </div>

                      <div
                        className="right md:flex-1 flex justify-center self-center mt-4"
                        data-aos="fade-up"
                      >
                        <img
                          src={ebook2}
                          alt="Gift"
                          loading="lazy"
                          className="w-80 sm:w-[300px] h-[250px] md:h-[350px]"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TrackedSection>

        {/* Urgency & Call-href-Action */}
        <TrackedSection eventName="pricing_section_trigger">
          <section
            id="pricing"
            className="py-6 pt-8 md:py-10 xl:flex xl:justify-center"
          >
            <div className="container px-4 md:px-6">
              {/* Urgency & Headline */}
              <div className="flex flex-col items-center text-center gap-4 mb-12">
                <Badge className="px-3 py-1 bg-green-600 xl:text-lg">
                  Oferta por Tiempo Limitado ⏳
                </Badge>
                <FadeIn delay={100}>
                  <h2 className="text-3xl font-bold tracking-tight xl:mt-4 lg:text-4xl">
                    Descuento Especial de Lanzamiento
                  </h2>
                </FadeIn>

                <p className="text-sidebar-primary-foreground md:text-lg lg:text-xl max-w-[800px]">
                  Aprovecha nuestro precio exclusivo antes de que desaparezca
                </p>
                <div className="mt-4">
                  <CountdownTimer />
                </div>
              </div>

              {/* Pricing Section */}
              <div className="grid gap-8 xl:gap-12 md:grid-cols-2 max-w-[1000px] mx-auto">
                {/* Basic Package - 1 Pair */}
                <FadeIn delay={100}>
                  <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden h-full">
                    <div className="p-3 sm:p-6">
                      <h3 className="text-xl xl:text-2xl font-bold mb-2 text-sidebar-primary-foreground">
                        1 Par de Gafas Amber Vision
                      </h3>
                      <p className="text-sidebar-primary-foreground mb-4 xl:text-lg">
                        Protege tu vista y mejora tu descanso con un par de
                        gafas Amber Vision.
                      </p>
                      <div className="imgContainer container rounded-lg overflow-hidden">
                        <img
                          src={manCoding}
                          alt="man coding"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-end gap-1 mb-4 mt-2 text-sidebar-primary-foreground">
                        <span className="text-3xl font-bold">$119.999</span>
                        <span className="italic line-through">$150.000</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {[
                          "Lentes Amber Vision",
                          "Montura ligera y cómoda",
                          "Estuche protector rígido",
                          "Estuche de tela para evitar rayones",
                          "Paño de microfibra para limpieza",
                          "Tester de luz azul para comprobar su eficacia",
                          "Garantía de 6 meses por defectos de fábrica*",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-success" />
                            <span className="text-[16px] xl:text-lg text-sidebar-primary-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="btn-buy w-full text-lg tracking-wider cursor-pointer"
                        onClick={() => openCheckout("basic")}
                        data-kit="One Pair"
                      >
                        Elegir <ShoppingCart className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </Card>
                </FadeIn>

                <FadeIn delay={100}>
                  <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-600 text-primary-foreground px-3 py-1 text-xs xl:text-sm font-medium rounded-bl-lg">
                      Mejor Oferta 🔥
                    </div>
                    <div className="p-3 pt-6 sm:p-6 text-sidebar-primary-foreground">
                      <h3 className="text-xl xl:text-2xl font-bold mb-2">
                        2 Pares de Gafas Amber Vision
                      </h3>
                      <p className="mb-4 font-medium xl:text-lg">
                        ¡Comparte la protección con alguien especial y ahorra
                        más!
                      </p>
                      <div className="imgContainer container rounded-lg overflow-hidden">
                        <img
                          src={coupleWatchingMovies}
                          alt="couple watching movies"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex items-end gap-1 mb-2 mt-2">
                        <span className="text-3xl font-bold">$219.999</span>
                        <span className="text-sidebar-primary-foreground italic line-through">
                          $300.000
                        </span>
                      </div>
                      <p className="text-white font-semibold mb-4 bg-green-600 rounded-lg p-1 text-center">
                        ¡Ahorra $80.000 y paga solo $109.999 por cada par!
                      </p>
                      <ul className="space-y-2 mb-6">
                        {[
                          "2 pares de lentes Amber Vision",
                          "Monturas ligeras y cómodas",
                          "2 estuches protectores rígidos",
                          "2 estuches de tela para evitar rayones",
                          "2 paños de microfibra para limpieza",
                          "2 testers de luz azul para comprobar su eficacia",
                          "Garantía de 6 meses por defectos de fábrica*",
                        ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-success" />
                            <span className="text-[16px] xl:text-lg">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="btn-buy w-full bg-primary hover:bg-primary/90 tracking-wider text-lg cursor-pointer"
                        onClick={() => openCheckout("promo")}
                        data-kit="promo"
                      >
                        Aprovechar Oferta{" "}
                        <ShoppingCart className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
                {/* Best Value - 2 Pairs */}

                {/* Ultimate Package */}
                {/* <Card className="border shadow-md relative overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ultimate</h3>
                  <p className="text-muted-foreground mb-4">
                    Para profesionales y usuarios intensivos
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">$359.900</span>
                    <span className="text-muted-foreground line-through">
                      $599.900
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Lentes rojos premium",
                      "Bloquea 99.9% de la luz azul",
                      "Montura ultra cómoda y resistente",
                      "Recubrimiento anti-reflejo y anti-rayones",
                      "Garantía de por vida",
                      "Incluye estuche premium y kit de limpieza",
                      "E-book sobre mejora del sueño",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Elegir Plan</Button>
                </div>
              </Card> */}
              </div>

              {/* Additional Benefits */}
              <div className="flex justify-center mt-8 lg:mt-16">
                <div className="flex items-center gap-1 md:gap-3 lg:gap-4 text-sm lg:text-lg xl:text-xl text-muted-foreground text-pretty">
                  {[
                    {
                      icon: Shield,
                      text: "Garantía de devolución de dinero por 30 días",
                    },
                    { icon: Truck, text: "Envío Gratis a Todo el País" },
                    { icon: Clock, text: "Entrega Rápida" },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 xl:gap-3 font-bold text-sidebar-primary-foreground"
                    >
                      <benefit.icon className="h-8 w-8 xl:h-10 xl:w-10" />
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </TrackedSection>

        {/* Nota Personal del Fundador */}
        <section
          id="founderNote"
          className="py-6 lg:py-14 xl:py-5 xl:flex xl:justify-center"
        >
          <div className="container px-4 md:px-6 ">
            <FadeIn delay={100}>
              <div className="max-w-[800px] p-2 mx-auto shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:px-10 rounded-xl items-center">
                <div className="flex flex-col gap-6 xl:py-6">
                  <div className="h-28 lg:h-48 w-28 lg:w-48 mt-4 rounded-full mx-auto overflow-hidden">
                    <img
                      src={founderImage}
                      alt="Fundador de Amber Vision"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center">
                    Un Mensaje de Nuestro Fundador
                  </h2>
                  <p className="text-sidebar-primary-foreground text-center lg:text-lg">
                    "Después de años lidiando con migrañas e insomnio por pasar
                    más de 12 horas al día frente a pantallas, descubrí el
                    impacto de la luz azul en mi salud. Decidí crear estas gafas
                    con filtro ámbar, y el cambio fue increíble: descanso mejor,
                    se acabaron los dolores de cabeza y la fatiga ocular
                    desapareció.
                  </p>
                  <p className="text-sidebar-primary-foreground text-center lg:text-lg">
                    Hoy, mi misión es ayudar a más personas a proteger su vista
                    y mejorar su descanso. Estas gafas no son solo un accesorio,
                    sino una inversión en tu bienestar y calidad de vida en esta
                    era digital."
                  </p>
                  <div className="text-center">
                    <p className="font-semibold text-lg xl:text-xl">
                      Miguel Arenas
                    </p>
                    <p className="text-sm xl:text-lg text-sidebar-primary-foreground">
                      Fundador, Amber Vision
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <TrackedSection eventName="faq_section_trigger">
          <section
            id="faq"
            className="py-8 md:py-10 md:px-6 xl:py-16 xl:flex xl:justify-center"
          >
            <div className="container px-4 md:px-6">
              {/* Section Title */}
              <div className="flex flex-col items-center text-center gap-4 mb-12">
                <FadeIn delay={100}>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Preguntas Frecuentes
                  </h2>
                </FadeIn>

                <p className="text-sidebar-primary-foreground md:text-lg lg:text-xl max-w-[800px]">
                  Todo lo que necesitas saber sobre nuestras gafas bloqueadoras
                  de luz azul
                </p>
              </div>

              {/* Accordion FAQ */}
              <div className="max-w-[800px] xl:max-w-[1000px] mx-auto shadow-md backdrop-blur-lg bg-white/10 border border-white/10 p-4 rounded-xl">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full lg:text-xl xl:text-2xl"
                >
                  {/* Pregunta 1 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left underline">
                      ¿Puedo usar estas gafas para conducir?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-lg flex flex-col gap-3">
                      <p>
                        Estas gafas no restan visibilidad y pueden brindar mayor
                        comodidad al conducir, especialmente frente al brillo
                        intenso de las luces de los vehículos en sentido
                        contrario. Las hemos probado personalmente y hemos
                        podido manejar con ellas durante la noche. Sin embargo,{" "}
                        <span className="font-extrabold">
                          dejamos a tu criterio
                        </span>{" "}
                        su uso para la conducción nocturna, ya que nuestra
                        preferencia es no recomendarlas específicamente para
                        este propósito.
                      </p>

                      <p>
                        <span className="font-semibold">
                          Y un dato importante:
                        </span>{" "}
                        no recomendamos usarlas durante la noche cuando está
                        lloviendo, ya que las condiciones de visibilidad pueden
                        reducirse y lo más importante siempre es tu seguridad.
                      </p>

                      <p>
                        Lo que sí te garantizamos es que son perfectas para
                        interiores con luces intensas, como pantallas de
                        dispositivos, centros comerciales, hospitales o
                        cualquier ambiente donde la luz blanca o azul pueda
                        perjudicar tu descanso y salud. Además, son ideales para
                        trabajos nocturnos donde la luz artificial resulta
                        molesta.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 2 */}
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left underline">
                      ¿Estas gafas tienen aumento o graduación visual?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-lg flex flex-col gap-3">
                      <p>
                        <strong>
                          No, estas gafas no tienen aumento o graduación alguna.{" "}
                        </strong>
                        Están diseñadas exclusivamente para proteger tus ojos de
                        la luz azul nociva emitida por dispositivos electrónicos
                        y luces LED. Gracias a su ligereza y comodidad, puedes
                        usarlas fácilmente sobre tus gafas graduadas sin sentir
                        molestias.
                      </p>
                      <p>
                        ¡Protege tu visión sin renunciar a tu corrección visual!
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 3 */}
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left underline">
                      ¿Son cómodas para usarlas por varias horas?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-lg flex flex-col gap-3">
                      <p>
                        <strong>¡Absolutamente!</strong> Nuestras gafas están
                        diseñadas pensando en tu comodidad. Las monturas son
                        ligeras y ergonómicas, lo que evita la presión en la
                        cabeza y las orejas, incluso después de horas de uso.
                      </p>

                      <p>
                        Muchos de nuestros clientes las llevan puestas durante
                        más de 5 horas sin sentir ninguna molestia. ¡Son tan
                        cómodas que te olvidarás de que las llevas puestas!
                        Úsalas el tiempo que necesites sin preocuparte por la
                        incomodidad.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 4 */}
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left underline">
                      ¿Cuándo debo usar estas gafas?
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-lg flex flex-col gap-3">
                      <p>
                        Para obtener los mejores resultados, úsalas
                        <strong> 2-3 horas antes de dormir. </strong>
                        Esto permite que tu cuerpo
                        <strong> produzca melatonina de forma natural</strong>,
                        ayudándote a conciliar el sueño más rápido y disfrutar
                        de un descanso reparador.
                      </p>
                      <p>
                        Son ideales para actividades nocturnas como ver
                        pantallas, leer o realizar tareas en interiores antes de
                        acostarte. Además, durante el día también pueden
                        ayudarte a <strong>reducir la fatiga ocular</strong>,
                        especialmente en ambientes con luz artificial intensa.
                      </p>
                      <p>
                        ¡Incorpora este hábito y nota la diferencia en tu
                        descanso y bienestar visual!
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Pregunta 5 */}
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left underline">
                      ¿Cómo debo limpiar y cuidar mis gafas?
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <ul className="list-disc pl-5 flex flex-col gap-3 lg:text-lg">
                          <li>
                            <strong>Limpieza diaria:</strong> Utiliza el{" "}
                            <span className="font-semibold">
                              paño de microfibra
                            </span>{" "}
                            incluido en todos los paquetes para retirar polvo y
                            huellas sin rayar los lentes.
                          </li>
                          <li>
                            <strong>Limpieza profunda:</strong> Lava los lentes
                            con{" "}
                            <span className="font-semibold">
                              agua tibia y jabón neutro
                            </span>{" "}
                            para eliminar suciedad persistente y restos de
                            grasa. Luego, sécalos con el paño de microfibra para
                            evitar marcas.
                          </li>
                          <li>
                            <strong>Cuidados importantes:</strong> Evita usar{" "}
                            <span className="font-semibold">
                              papel, pañuelos o productos químicos agresivos
                            </span>
                            , ya que pueden rayar los lentes o afectar los
                            recubrimientos especiales.
                          </li>
                          <li>
                            <strong>Almacenamiento seguro:</strong> Guarda tus
                            gafas siempre en su estuche cuando no las uses. Así
                            las proteges de golpes y rayones, asegurando que te
                            acompañen por mucho tiempo.
                          </li>
                        </ul>
                        <p className="mt-4 lg:text-lg font-medium">
                          ¡Cuídalas como se merecen y disfruta de su comodidad y
                          estilo por más tiempo! 😎
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </TrackedSection>

        {/* Purchase Warranty */}
        <TrackedSection eventName="warranty_section_trigger">
        <section
          id="securePurchase"
          className="py-2 text-text text-center px-3 md:px-12 "
        >
          <div className="max-w-3xl p-3 mx-auto md:p-3 shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:px-10 rounded-xl items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Dale una oportunidad real a tu descanso
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6">
              Estamos tan seguros de que nuestras gafas{" "}
              <span className="font-semibold text-brand">Amber Vision</span>{" "}
              transformarán tu bienestar, que te damos{" "}
              <span className="font-semibold">30 días para comprobarlo</span>.
            </p>
            <p className="text-md md:text-lg mb-4">
              Póntelas, úsalas, siente la diferencia en tu vista y en la calidad
              de tu sueño. Si no notas mejoría o simplemente no te convencen,
              puedes{" "}
              <span className="font-semibold text-fire-dark">
                devolverlas sin explicaciones
              </span>
              .
            </p>
            <p className="text-sm lg:text-lg italic">
              Tu salud visual está primero, y tu compra está 100% protegida. 🛡️
            </p>
          </div>
        </section>
        </TrackedSection>
        

        {/* CTA */}
        <div className="CTA-container flex flex-col justify-center mt-6 mb-8 xl:flex xl:justify-center">
          <Button
            size="default"
            className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold py-6 sm:px-6 sm:py-3 lg:mt-8 xl:py-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2 w-[85%]
            lg:w-[60%] xl:w-max mx-auto"
          >
            <a
              href="#pricing"
              className="flex items-center sm:gap-3 text-[16px] lg:text-xl xl:p-2 flex-col sm:flex-row"
            >
              Protege Tus Ojos y mejora tu sueño!
              <ShoppingCart className="h-5 w-5" />
            </a>
          </Button>
          <small className="italic self-center lg:text-lg xl:mt-1">
            envío GRATIS. Pocas unidades disponibles 📦
          </small>
        </div>
        {/* More Social Proof */}
        <section
          id="moreSocialProof"
          className="py-6 md:py-10 xl:flex xl:justify-center"
        >
          <div className="container px-3 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Únete a Cientos de Clientes Satisfechos
              </h2>
              <p className="text-sidebar-primary-foreground md:text-lg xl:text-xl max-w-[800px]">
                Descubre lo que dicen las personas sobre su experiencia con
                nuestras gafas
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  review:
                    "No podía creer lo cómodas que son estas gafas. Paso muchas horas frente a la computadora y desde que las uso, ya no sufro de dolor de cabeza ni fatiga visual. ¡Definitivamente una gran inversión!",
                  name: "Sofía G.",
                  img: "./assets/img/person-review11.webp",
                },
                {
                  review:
                    "No sabía que la luz azul afectaba tanto mi sueño hasta que probé estas gafas. Ahora duermo mucho mejor después de usar el celular o ver TV en la noche. ¡Protegen mis ojos y me ayudan a descansar de verdad! Además, son cómodas y se ven bien.",
                  name: "Luis M.",
                  img: "./assets/img/person-review5.webp",
                },
                {
                  review:
                    "Son ligeras y si siento que me protegen del brillo de las pantallas. Las uso a partir de que la luz del día se comienza a ir (cuando ya hay que prender luces en la casa) y sigo trabajando en la computadora y/o viendo tele. Las uso de corrido hasta la hora de dormir para que también me protege de la luz de los focos de la casa. Mis ojos se cansan mucho menos. ¡Las recomiendo al 100%!",
                  name: "Valentina R.",
                  img: "./assets/img/person-review10.webp",
                },
                {
                  review:
                    "Soy programador y paso muchas horas frente a múltiples pantallas. Estas gafas han cambiado por completo mi rutina: ya no tengo ojos cansados y puedo concentrarme mucho mejor. ¡Una compra excelente!",
                  name: "Diego P.",
                  img: "./assets/img/person-review9.webp",
                },
                {
                  review:
                    "Me sorprendió lo ligeras que son. A veces olvido que las tengo puestas de lo cómodas que son ya que paso horas frente a la computadora ya que trabajo remoto. Además, me gusta su diseño estilo Rayban.",
                  name: "Camilo T.",
                  img: "./assets/img/person-review12.webp",
                },
              ].map((testimonial, i) => (
                <FadeIn delay={100}>
                  <Card
                    key={i}
                    className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 h-full"
                  >
                    <CardContent className="p-3 sm:p-6">
                      <div className="flex mb-4 gap-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="h-4 w-4 fill-[#FFD700] text-primary"
                            stroke="#FFD700"
                          />
                        ))}
                      </div>
                      <p className="text-sidebar-primary-foreground mb-4">
                        "{testimonial.review}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-20 w-20 rounded-full bg-muted-foreground/20 overflow-hidden">
                          <img
                            src={testimonial.img}
                            alt="customer review"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-sidebar-primary-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-sidebar-primary-foreground">
                            Comprador Verificado
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-12 xl:py-20 xl:flex xl:justify-center">
          <div className="container px-4 md:px-6 ">
            <FadeIn delay={100}>
              <div className="max-w-[800px] mx-auto rounded-xl p-2 sm:p-4 text-center border shadow-md backdrop-blur-lg bg-white/10 border-white/10">
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  ¿Listo para Transformar tu Descanso?
                </h2>
                <p className="text-sidebar-primary-foreground mb-6 md:text-lg">
                  Únete a cientos de clientes que han mejorado la calidad de su
                  sueño y han reducido la fatiga ocular gracias a nuestras gafas
                  bloqueadoras de luz azul.
                </p>
                <Button
                  size={isMobile ? "default" : "lg"}
                  className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold py-6 sm:px-6 sm:py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-white font-semibold mb-4 text-[16px] xl:text-lg"
                >
                  <a
                    href="#pricing"
                    className="flex items-center flex-col sm:flex-row"
                  >
                    ¡Ordena Ahora – Stock Limitado!
                    <ShoppingCart className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <div className="flex flex-col items-center lg:flex-row justify-center gap-4 text-sm">
                  <div className="flex flex-col lg:flex-row items-center gap-1 ">
                    <Shield className="h-6 w-6" />
                    <span>Garantía de Devolución de Dinero por 30 Días</span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-1">
                    <Truck className="h-6 w-6" />
                    <span>Envío Gratis</span>
                  </div>
                </div>
                <p className="text-xs xl:text-sm mt-4">
                  *Pruébalas por 30 días – ¡Ámalas o te devolvemos tu dinero!
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      {/*Checkout Modal*/}
      {
        <CheckoutModal
          product={selectedProduct}
          isOpen={isCheckoutOpen}
          onClose={() => {
            setIsCheckoutOpen(false);
            fbq.trackCustom("CheckOutClosed", { product: selectedProduct?.id });
          }}
          setSuccessPage={setSuccessPage}
          handleOrderNumberFromChild={handleOrderNumberFromChild}
        />
      }
      {successPage && (
        <CheckoutSuccessPage
          setSuccessPage={setSuccessPage}
          orderNumber={orderNumber}
        />
      )}
    </div>
  );
}

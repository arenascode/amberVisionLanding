import "./styles/css/app.css";
import {
  Check,
  Star,
  Play,
  ShoppingCart,
  Clock,
  Shield,
  Truck,
  Eye,
  Moon,
  AlertTriangle,
  X,
  Sun,
  Book,
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
import CountdownTimer from "@/components/countdown-timer";
import TestimonialCarousel from "@/components/testimonial-carousel";
// import { useState } from "react";
import ProductIntro from "./components/ProductCarouselIntro/ProductIntro";
import { HamburgerButton } from "./components/ui/hamburguerBtn";
import AnnouncementCarousel from "./components/ui/annoouncement-carousel";
import { useEffect, useState } from "react";
import FadeIn from "./components/ui/fadeIn";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  console.log({ isMobile });

  return (
    <div className="flex min-h-screen flex-col relative">
      {/* Header/Navigation */}
      <header className="fixed z-50 w-full bg-nav-footer text-white backdrop-blur supports-[backdrop-filter] lg:px-5">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-widest font-title uppercase p-2 ml-1">
            <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
              Amber
            </span>

            <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
              Vision
            </span>
            <img
              src="./assets/logo_AV.webp"
              alt="Brand Logo"
              width={60}
              style={{ marginLeft: "-1.1rem" }}
            />
          </div>
          <nav className="hidden md:flex gap-6 xl:gap-10">
            <a
              href="#benefits"
              className="text-sm font-medium hover:text-primary"
            >
              Beneficios
            </a>
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Carácteristicas
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonios
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Oferta
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
          </nav>
          <div className="lg:hidden">
            <HamburgerButton />
          </div>
        </div>
      </header>
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
        <section className="relative overflow-hidden bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] py-6 md:py-20 lg:py-10 items-center lg:flex justify-center mt-22 xl:mt-24">
          <div className="container px-4 md:px-6 lg:px-2 lg:w-full justify-center">
            <div className="flex flex-col gap-8 md:gap-10 lg:flex-row items-center xl:gap-20 xl:w-full xl:px-10">
              <div className="flex flex-col justify-between gap-5 xl:gap-9">
                <Badge
                  className="w-fit border-1 border-white xl:text-sm text-white"
                  variant="outline"
                >
                  Protección Premium para tus Ojos
                </Badge>
                <h1 className="text-2xl font-bold tracking-wider sm:text-3xl md:text-4xl lg:text-4xl xl:text-[2.5rem] font-body uppercase fade-in-up">
                  Protege tu vista, mejora tu descanso — <br />
                  descubre el poder de los Lentes Ambar
                </h1>

                <p className="text-sidebar-primary-foreground font-body md:text-xl lg:text-xl">
                  Bloquea la luz azul artificial, reduce la fatiga visual y
                  disfruta de un sueño más profundo cada noche.
                </p>
                <div className="lg:hidden mobile">
                  {isMobile && <ProductIntro />}
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-1">
                  <Button
                    size="default"
                    className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Cuida Tus Ojos y Duerme Mejor
                  </Button>

                  <div className="flex items-center gap-2 text-sm lg:text-lg text-sidebar-primary-foreground">
                    <Shield className="h-4 w-4" />
                    <span>100% Satisfacción Garantizada</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
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
                </div>
              </div>
              {!isMobile && (
                <div className="hidden lg:flex xl:h-[600px] w-[70%]">
                  <ProductIntro />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section
          id="benefits"
          className="py-10 md:py-24 lg:flex lg:justify-center"
        >
          <div className="container px-4 md:px-6">
            {/* Encabezado principal */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <FadeIn delay={200}>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  Protege tus Ojos y Mejora tu Descanso
                </h2>
              </FadeIn>

              <p className="text-sidebar-prymary-foreground md:text-lg max-w-[800px]">
                La luz azul de las pantallas afecta tu vista y tu ciclo de
                sueño. Descubre cómo reducir el daño y recuperar tu bienestar.
              </p>
            </div>

            {/* Beneficios clave */}
            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={100}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <Eye className="text-sidebar-primary-foreground h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Menos Fatiga Visual
                    </h3>
                    <p className="text-sidebar-primary-foreground">
                      La exposición prolongada a pantallas causa cansancio,
                      sequedad e irritación en los ojos. Nuestras lentes
                      protegen tu vista desde el primer uso.
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
                    <p className="text-sidebar-primary-foreground">
                      La luz azul interfiere con la producción de melatonina,
                      afectando tu descanso. Usa nuestras gafas antes de dormir
                      y despierta renovado.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={300}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 xl:h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-500/80 flex items-center justify-center">
                      <AlertTriangle className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Menos Dolores de Cabeza
                    </h3>
                    <p className="text-sidebar-primary-foreground">
                      Reduce la tensión ocular y evita las migrañas provocadas
                      por la luz azul. Trabaja y estudia sin molestias.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            {/* Sección de solución con imagen */}
            <div className="mt-16 rounded-xl p-4 shadow-md backdrop-blur-lg bg-white/10 border border-white/10">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] xl:h-[450px] rounded-lg overflow-hidden">
                  <img
                    src="/assets/img/OrangeLensesModel1.webp"
                    alt="Persona usando gafas con filtro de luz azul"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="xl:self-baseline xl:pt-12">
                  <h3 className="text-2xl font-bold mb-8 xl:text-3xl">
                    La Solución: Gafas con Filtro de Luz Azul
                  </h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold xl:text-lg">
                          Bloquean el 99% de la luz azul dañina
                        </span>
                        <p className="text-sidebar-primary-foreground">
                          Nuestras lentes especializadas filtran las longitudes
                          de onda más perjudiciales para tus ojos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold xl:text-lg">
                          Favorecen un sueño reparador
                        </span>
                        <p className="text-sidebar-primary-foreground">
                          Estimula la producción natural de melatonina,
                          ayudándote a conciliar el sueño más rápido y mejorar
                          su calidad.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-success mt-0.5" />
                      <div className="xl:flex xl:flex-col xl:gap-2">
                        <span className="font-semibold xl:text-lg">
                          Reducen la fatiga ocular y las migrañas
                        </span>
                        <p className="text-sidebar-primary-foreground">
                          Evita la tensión visual y las molestias provocadas por
                          el uso prolongado de pantallas.
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
        <section id="features" className="py-6 md:py-14">
          <div className="container px-2 md:px-6">
            {/* Encabezado principal */}
            <div className="w-full flex flex-col items-center text-center text-wrap gap-4 mb-12">
              <FadeIn delay={100}>
                <h2 className="text-3xl xl:text-4xl font-bold tracking-tight xl:mb-5">
                  Antes y Después de Usarlas
                </h2>
              </FadeIn>

              <p className="text-sidebar-primary-foreground md:text-lg xl:text-xl max-w-[800px]">
                Descubre cómo nuestras gafas de bloqueo de luz azul pueden
                transformar tu día y mejorar tu descanso.
              </p>
            </div>

            {/* Comparación de efectos */}
            <div className="grid gap-8 md:grid-cols-2 mb-16 xl:px-20 max-w-full">
              {/* Sin protección */}
              <div className="max-w-full place-items-center rounded-xl p-2 shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:flex xl:flex-col xl:place-items-center">
                <h3 className="w-max text-xl font-bold mb-4 text-center text-red-500">
                  Sin Protección: <br /> Estrés Visual Constante
                </h3>
                <div className="relative h-[380px] xl:h-[400px] w-full xl:w-[400px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="/assets/img/tiredMan.webp"
                    alt="Persona con ojos cansados e irritados"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="w-full space-y-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:p-4">
                  {[
                    "Vista cansada e irritada",
                    "Dificultad para dormir",
                    "Dolores de cabeza frecuentes",
                    "Falta de concentración y fatiga",
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
                <h3 className="text-xl font-bold mb-4 text-center text-success">
                  Con Protección: <br /> Comodidad y Descanso Total
                </h3>
                <div className="relative h-[380px] xl:h-[400px] w-full xl:w-[400px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="/assets/img/comfortableMan.webp"
                    alt="Persona con visión relajada y enfocada"
                    className="object-cover h-full w-full"
                  />
                </div>
                <ul className="space-y-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:p-4">
                  {[
                    "Ojos descansados y sin tensión",
                    "Sueño profundo y reparador",
                    "Menos dolores de cabeza",
                    "Mayor enfoque y productividad",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-white text-lg xl:text-lg"
                    >
                      <Check className="h-5 w-5 xl:h-7 xl:w-7 text-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Beneficios adicionales */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: (
                    <Eye className="h-6 w-6 text-sidebar-primary-foreground" />
                  ),
                  title: "Filtran el 99% de la luz azul",
                  description:
                    "Protege tu vista y reduce la fatiga ocular en cualquier entorno.",
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
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof & Testimonials */}
        <section id="testimonials" className="py-10 md:py-16 overflow-hidden">
          <div className="container px-4 md:px-6 overflow-hidden">
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <FadeIn delay={100}>
                <h2 className="text-3xl font-bold tracking-tight">
                  Lo Que Dicen Nuestros Clientes
                </h2>
              </FadeIn>

              <p className="text-sidebar-primary-foreground md:text-lg max-w-[800px]">
                Más de 300 personas han mejorado su sueño y reducido la fatiga
                ocular con nuestras gafas.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel />

            {/* Featured Testimonial */}
            <FadeIn delay={100}>
              <div className="mt-16 rounded-xl p-2 flex flex-col md:flex-row gap-8 items-center shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:mt-28">
                {/* Video Testimonial */}
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

                {/* Written Testimonial */}
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
            </FadeIn>
          </div>
        </section>
        {/* Urgency & Call-href-Action */}
        <section className="py-6 md:py-14">
          <div className="container px-4 md:px-6">
            {/* Urgency & Headline */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <Badge className="px-3 py-1 bg-green-600 xl:text-sm">
                Oferta por Tiempo Limitado ⏳
              </Badge>
              <FadeIn delay={100}>
                <h2 className="text-3xl font-bold tracking-tight xl:mt-2">
                  Descuento Especial de Lanzamiento
                </h2>
              </FadeIn>

              <p className="text-sidebar-primary-foreground md:text-lg max-w-[800px]">
                Aprovecha nuestro precio exclusivo antes de que desaparezca
              </p>
              <div className="mt-4">
                <CountdownTimer />
              </div>
            </div>

            {/* Pricing Section */}
            <div
              id="pricing"
              className="grid gap-8 xl:gap-12 md:grid-cols-2 max-w-[1000px] mx-auto"
            >
              {/* Basic Package - 1 Pair */}
              <FadeIn delay={100}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden h-full">
                  <div className="p-6">
                    <h3 className="text-xl xl:text-2xl font-bold mb-2 text-sidebar-primary-foreground">
                      1 Par de Gafas Amber Vision
                    </h3>
                    <p className="text-sidebar-primary-foreground mb-4 xl:text-lg">
                      Protege tu vista y mejora tu descanso con un par de gafas
                      Amber Vision.
                    </p>
                    <div className="flex items-end gap-1 mb-4 text-sidebar-primary-foreground">
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
                          <span className="text-sm xl:text-lg text-sidebar-primary-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full xl:text-lg">Elegir</Button>
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={100}>
                <Card className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-600 text-primary-foreground px-3 py-1 text-xs xl:text-sm font-medium rounded-bl-lg">
                    Mejor Oferta 🔥
                  </div>
                  <div className="p-6 text-sidebar-primary-foreground">
                    <h3 className="text-xl xl:text-2xl font-bold mb-2">
                      2 Pares de Gafas Amber Vision
                    </h3>
                    <p className="mb-4 font-medium xl:text-lg">
                      ¡Comparte la protección con alguien especial y ahorra más!
                    </p>
                    <div className="flex items-end gap-1 mb-2">
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
                          <span className="text-sm xl:text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90 xl:text-lg">
                      Aprovechar Oferta
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
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-1 xl:gap-4 text-sm text-muted-foreground text-pretty">
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
        {/* Nota Personal del Fundador */}
        <section className="py-6 md:py-24 xl:py-5">
          <div className="container px-4 md:px-6 ">
            <FadeIn delay={100}>
              <div className="max-w-[800px] p-2 mx-auto shadow-md backdrop-blur-lg bg-white/10 border border-white/10 xl:px-10 rounded-xl">
                <div className="flex flex-col gap-6 xl:py-6">
                  <div className="h-16 w-16 rounded-full mx-auto"></div>
                  <h2 className="text-2xl font-bold text-center">
                    Un Mensaje de Nuestro Fundador
                  </h2>
                  <p className="text-sidebar-primary-foreground text-center xl:text-lg">
                    "Después de años lidiando con migrañas e insomnio por pasar
                    más de 12 horas al día frente a pantallas, descubrí el
                    impacto de la luz azul en mi salud. Decidí crear estas gafas
                    con filtro ámbar, y el cambio fue increíble: descanso mejor,
                    se acabaron los dolores de cabeza y la fatiga ocular
                    desapareció.
                  </p>
                  <p className="text-sidebar-primary-foreground text-center xl:text-lg">
                    Hoy, mi misión es ayudar a más personas a proteger su vista
                    y mejorar su descanso. Estas gafas no son solo un accesorio,
                    sino una inversión en tu bienestar y calidad de vida en esta
                    era digital."
                  </p>
                  <div className="text-center">
                    <p className="font-medium xl:text-lg">Miguel Arenas</p>
                    <p className="text-sm text-sidebar-primary-foreground">
                      Fundador, Amber Vision
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Section Title */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <FadeIn delay={100}>
                <h2 className="text-3xl font-bold tracking-tight">
                  Preguntas Frecuentes
                </h2>
              </FadeIn>

              <p className="text-sidebar-primary-foreground md:text-lg max-w-[800px]">
                Todo lo que necesitas saber sobre nuestras gafas bloqueadoras de
                luz azul
              </p>
            </div>

            {/* Accordion FAQ */}
            <div className="max-w-[800px] xl:max-w-[1000px] mx-auto shadow-md backdrop-blur-lg bg-white/10 border border-white/10 p-4 rounded-xl">
              <Accordion
                type="single"
                collapsible
                className="w-full xl:text-2xl"
              >
                {/* Pregunta 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left underline">
                    ¿Puedo usar estas gafas para conducir?
                  </AccordionTrigger>
                  <AccordionContent className="xl:text-lg flex flex-col gap-3">
                    <p>
                      Estas gafas no restan visibilidad y pueden brindar mayor
                      comodidad al conducir, especialmente frente al brillo
                      intenso de las luces de los vehículos en sentido
                      contrario. Las hemos probado personalmente y hemos podido
                      manejar con ellas durante la noche. Sin embargo,{" "}
                      <span className="font-extrabold">
                        dejamos a tu criterio
                      </span>{" "}
                      su uso para la conducción nocturna, ya que nuestra
                      preferencia es no recomendarlas específicamente para este
                      propósito.
                    </p>

                    <p>
                      Lo que sí te garantizamos es que son perfectas para
                      interiores con luces intensas, como pantallas de
                      dispositivos, centros comerciales, hospitales o cualquier
                      ambiente donde la luz blanca o azul pueda perjudicar tu
                      descanso y salud. Además, son ideales para trabajos
                      nocturnos donde la luz artificial resulta molesta.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left underline">
                    ¿Estas gafas tienen aumento o graduación visual?
                  </AccordionTrigger>
                  <AccordionContent className="xl:text-lg flex flex-col gap-3">
                    <p>
                      <strong>
                        No, estas gafas no tienen aumento o graduación alguna.{" "}
                      </strong>
                      Están diseñadas exclusivamente para proteger tus ojos de
                      la luz azul nociva emitida por dispositivos electrónicos y
                      luces LED. Gracias a su ligereza y comodidad, puedes
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
                  <AccordionContent className="xl:text-lg flex flex-col gap-3">
                    <p>
                      <strong>¡Absolutamente!</strong> Nuestras gafas están
                      diseñadas pensando en tu comodidad. Las monturas son
                      ligeras y ergonómicas, lo que evita la presión en la
                      cabeza y las orejas, incluso después de horas de uso.
                    </p>

                    <p>
                      Muchos de nuestros clientes las llevan puestas durante más
                      de 5 horas sin sentir ninguna molestia. ¡Son tan cómodas
                      que te olvidarás de que las llevas puestas! Úsalas el
                      tiempo que necesites sin preocuparte por la incomodidad.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left underline">
                    ¿Cuándo debo usar estas gafas?
                  </AccordionTrigger>
                  <AccordionContent className="xl:text-lg flex flex-col gap-3">
                    <p>
                      Para obtener los mejores resultados, úsalas
                      <strong> 2-3 horas antes de dormir. </strong>
                      Esto permite que tu cuerpo
                      <strong> produzca melatonina de forma natural</strong>,
                      ayudándote a conciliar el sueño más rápido y disfrutar de
                      un descanso reparador.
                    </p>
                    <p>
                      Son ideales para actividades nocturnas como ver pantallas,
                      leer o realizar tareas en interiores antes de acostarte.
                      Además, durante el día también pueden ayudarte a{" "}
                      <strong>reducir la fatiga ocular</strong> , especialmente
                      en ambientes con luz artificial intensa.
                    </p>
                    <p>
                      ¡Incorpora este hábito y nota la diferencia en tu descanso
                      y bienestar visual!
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
                      <ul className="list-disc pl-5 flex flex-col gap-3 xl:text-lg">
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
                          para eliminar suciedad persistente y restos de grasa.
                          Luego, sécalos con el paño de microfibra para evitar
                          marcas.
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
                      <p className="mt-4 xl:text-lg font-medium">
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

        {/* More Social Proof */}
        <section className="py-6 md:py-16 xl:py-10">
          <div className="container px-4 md:px-6">
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
                    "No podía creer lo cómodas que son estas gafas. Paso muchas horas frente a la computadora y desde que las uso, ya no sufro de dolor de cabeza ni fatiga visual. ¡Definitivamente una inversión increíble!",
                  name: "Sofía G.",
                },
                {
                  review:
                    "¡Estoy encantado! Las gafas no solo lucen elegantes, sino que realmente noto la diferencia en la calidad del sueño. Solía despertarme agotado, pero desde que las uso antes de dormir, mi descanso ha mejorado notablemente.",
                  name: "Luis M.",
                },
                {
                  review:
                    "Tengo problemas de visión y estaba preocupado por usar lentes con prescripción, pero el proceso fue muy sencillo. Mis gafas llegaron perfectas y ahora disfruto de una visión clara y sin molestias oculares. ¡Las recomiendo al 100%!",
                  name: "Valentina R.",
                },
                {
                  review:
                    "Soy programador y paso muchas horas frente a múltiples pantallas. Estas gafas han cambiado por completo mi rutina: ya no tengo ojos cansados y puedo concentrarme mucho mejor. ¡Una compra excelente!",
                  name: "Diego P.",
                },
                {
                  review:
                    "Me sorprendió lo ligeras que son. A veces olvido que las tengo puestas de lo cómodas que son. Además, el diseño es moderno y recibo muchos cumplidos. ¡Son perfectas para cuidar la vista sin perder el estilo!",
                  name: "Camila T.",
                },
              ].map((testimonial, i) => (
                <FadeIn delay={100}>
                  <Card
                    key={i}
                    className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10 h-full"
                  >
                    <CardContent className="p-6">
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
                        <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div>
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
        <section className="py-8 md:py-24 ">
          <div className="container px-4 md:px-6 ">
            <FadeIn delay={100}>
              <div className="max-w-[800px] mx-auto rounded-xl p-4 text-center border shadow-md backdrop-blur-lg bg-white/10 border-white/10">
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
                className="bg-primary hover:bg-primary/90 text-white font-semibold mb-4 text-sm xl:text-lg"
              >
                ¡Ordena Ahora – Stock Limitado!
                <ShoppingCart className="ml-2 h-5 w-5" />
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

      {/* Footer */}
      <footer className="border-t  bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)]">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4 ">
                <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
                  Amber
                </span>
                <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
                  Vision
                </span>
              </div>
              <p className="text-sm text-sidebar-primary-foreground mb-4">
                Protegiendo tus ojos en la era digital con tecnología innovadora
                de bloqueo de luz azul.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  {/* Icono de Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  {/* Icono de Instagram */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  {/* Icono de Twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.896-.795-1.497-1.77-1.676-2.07-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.242-.579-.487-.5-.672-.51-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
                Enlaces rápidos
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
                Legal
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Política de envíos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sidebar-primary-foreground hover:text-fire-btn"
                  >
                    Política de devoluciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
                Contáctanos
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                  <span>📞</span> +57 316 4278515
                </li>
                <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                  <span>✉️</span> support@ambervision.com
                </li>
                <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                  <span>📍</span> Bogotá, Colombia.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-sidebar-primary-foreground mt-8">
            © {new Date().getFullYear()} Amber Vision. Todos los derechos
            reservados.
          </p>
          <p className="text-center text-xs text-sidebar-primary-foreground mt-2">
            Designed with ❤️ by the Amber Vision Team.
          </p>
        </div>
      </footer>
    </div>
  );
}

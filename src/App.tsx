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

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky hrefp-0 z-50 w-full border-b bg-nav-footer  text-white backdrop-blur supports-[backdrop-filter]">
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
          <nav className="hidden md:flex gap-6">
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
          <HamburgerButton />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-href-b from-background href-muted py-6 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="flex flex-col gap-4">
                <Badge
                  className="w-fit border-1 border-black"
                  variant="outline"
                >
                  Protección Premium para tus Ojos
                </Badge>
                <h1 className="text-2xl font-bold tracking-wide sm:text-3xl md:text-5xl lg:text-6xl font-title uppercase">
                  Protege tu vista, mejora tu descanso — descubre el poder de
                  los Lentes Ambar
                </h1>
                <p className="text-muted-foreground font-body md:text-xl ">
                  Bloquea la luz azul artificial, reduce la fatiga visual y
                  disfruta de un sueño más profundo cada noche.
                </p>
                {/* <div className="relative h-[350px] rounded-lg overflow-hidden">
                  <img
                    src="/assets/product/amberLenses.webp"
                    alt="Person wearing red blue-light-blocking glasses"
                    className="object-cover w-full h-full"
                    
                  />
                  <div className="absolute inset-0 bg-gradient-href-r from-primary/20 href-transparent"></div>
                </div> */}
                <ProductIntro />
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Cuida Tus Ojos y Duerme Mejor
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>100% Satisfacción Garantizada</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    4.9/5 Basado en más de 300 reseñas verificadas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section id="benefits" className="py-10 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Encabezado principal */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Protege tus Ojos y Mejora tu Descanso
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
                La luz azul de las pantallas afecta tu vista y tu ciclo de
                sueño. Descubre cómo reducir el daño y recuperar tu bienestar.
              </p>
            </div>

            {/* Beneficios clave */}
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Eye className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Menos Fatiga Visual</h3>
                  <p className="text-muted-foreground">
                    La exposición prolongada a pantallas causa cansancio,
                    sequedad e irritación en los ojos. Nuestras lentes protegen
                    tu vista desde el primer uso.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Moon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Duerme Mejor</h3>
                  <p className="text-muted-foreground">
                    La luz azul interfiere con la producción de melatonina,
                    afectando tu descanso. Usa nuestras gafas antes de dormir y
                    despierta renovado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Menos Dolores de Cabeza</h3>
                  <p className="text-muted-foreground">
                    Reduce la tensión ocular y evita las migrañas provocadas por
                    la luz azul. Trabaja y estudia sin molestias.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sección de solución con imagen */}
            <div className="mt-16 bg-muted rounded-xl p-4">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <img
                    src="/assets/img/OrangeLensesModel1.webp"
                    alt="Persona usando gafas con filtro de luz azul"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    La Solución: Gafas con Filtro de Luz Azul
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-primary mt-0.5" />
                      <div>
                        <span className="font-semibold">
                          Bloquean el 99% de la luz azul dañina
                        </span>
                        <p className="text-muted-foreground">
                          Nuestras lentes especializadas filtran las longitudes
                          de onda más perjudiciales para tus ojos.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-primary mt-0.5" />
                      <div>
                        <span className="font-semibold">
                          Favorecen un sueño reparador
                        </span>
                        <p className="text-muted-foreground">
                          Estimula la producción natural de melatonina,
                          ayudándote a conciliar el sueño más rápido y mejorar
                          su calidad.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-10 text-primary mt-0.5" />
                      <div>
                        <span className="font-semibold">
                          Reducen la fatiga ocular y las migrañas
                        </span>
                        <p className="text-muted-foreground">
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
        <section
          id="features"
          className="py-16 md:py-24 bg-gradient-to-b from-background to-muted"
        >
          <div className="container px-2 md:px-6">
            {/* Encabezado principal */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Antes y Después de Usarlas
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
                Descubre cómo nuestras gafas de bloqueo de luz azul pueden
                transformar tu día y mejorar tu descanso.
              </p>
            </div>

            {/* Comparación de efectos */}
            <div className="grid gap-8 md:grid-cols-2 mb-16">
              {/* Sin protección */}
              <div className="bg-background rounded-xl p-2 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-center text-red-500">
                  Sin Protección: Estrés Visual Constante
                </h3>
                <div className="relative h-[380px] w-[380px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="/assets/img/tiredMan.webp"
                    alt="Persona con ojos cansados e irritados"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2">
                  {[
                    "Vista cansada e irritada",
                    "Dificultad para dormir",
                    "Dolores de cabeza frecuentes",
                    "Falta de concentración y fatiga",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <X className="h-5 w-5 text-red-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Con protección */}
              <div className="bg-background rounded-xl p-2 shadow-md border border-primary/20">
                <h3 className="text-xl font-bold mb-4 text-center text-primary">
                  Con Protección: Comodidad y Descanso Total
                </h3>
                <div className="relative h-[380px] w-[380px] rounded-lg overflow-hidden mb-4">
                  <img
                    src="/assets/img/comfortableMan.webp"
                    alt="Persona con visión relajada y enfocada"
                    className="object-cover h-full w-full"
                  />
                </div>
                <ul className="space-y-2">
                  {[
                    "Ojos descansados y sin tensión",
                    "Sueño profundo y reparador",
                    "Menos dolores de cabeza",
                    "Mayor enfoque y productividad",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="h-5 w-5 text-primary" />
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
                  icon: <Eye className="h-6 w-6 text-primary" />,
                  title: "Filtran el 99% de la luz azul",
                  description:
                    "Protege tu vista y reduce la fatiga ocular en cualquier entorno.",
                },
                {
                  icon: <Moon className="h-6 w-6 text-primary" />,
                  title: "Sueño más reparador",
                  description:
                    "Mejoran tu ciclo circadiano para que descanses mejor cada noche.",
                },
                {
                  icon: <Sun className="h-6 w-6 text-primary" />,
                  title: "Ligeras y cómodas",
                  description:
                    "Diseñadas para largas jornadas sin molestias ni presión en el rostro.",
                },
                {
                  icon: <Book className="h-6 w-6 text-primary" />,
                  title: "Ideales para pantallas",
                  description:
                    "Perfectas para trabajar, leer o ver TV sin afectar tu bienestar.",
                },
              ].map((feature, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof & Testimonials */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Section Heading */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
                Más de 300 personas han mejorado su sueño y reducido la fatiga
                ocular con nuestras gafas.
              </p>
            </div>

            {/* Testimonial Carousel */}
            <TestimonialCarousel />

            {/* Featured Testimonial */}
            <div className="mt-16 bg-muted rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
              {/* Video Testimonial */}
              <div className="md:w-1/2">
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
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  "Estas gafas cambiaron mi vida. ¡Duermo mejor que nunca!"
                </h3>
                <p className="text-muted-foreground mb-4">
                  Después de años de insomnio, dudaba que unas gafas pudieran
                  ayudarme. Pero en solo una semana, comencé a dormir más rápido
                  y despertar con más energía cada mañana.
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Desarrollador Web
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Urgency & Call-href-Action */}
        <section className="py-6 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            {/* Urgency & Headline */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <Badge className="px-3 py-1 bg-success">
                Oferta por Tiempo Limitado ⏳
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                Descuento Especial de Lanzamiento
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
                Aprovecha nuestro precio exclusivo antes de que desaparezca
              </p>
              <div className="mt-4">
                <CountdownTimer />
              </div>
            </div>

            {/* Pricing Section */}
            <div
              id="pricing"
              className="grid gap-8 md:grid-cols-3 max-w-[1000px] mx-auto"
            >
              {/* Basic Package - 1 Pair */}
              <Card className="border shadow-md relative overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    1 Par de Gafas Amber Vision
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Protege tu vista y mejora tu descanso con un par de gafas
                    Amber Vision.
                  </p>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">$119.999</span>
                    <span className="text-muted-foreground line-through">
                      $150.000
                    </span>
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
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Elegir</Button>
                </div>
              </Card>

              {/* Best Value - 2 Pairs */}
              <Card className="border border-primary shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-green-600 text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Mejor Oferta 🔥
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    2 Pares de Gafas Amber Vision
                  </h3>
                  <p className="text-muted-foreground mb-4 font-medium">
                    ¡Comparte la protección con alguien especial y ahorra más!
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold">$219.999</span>
                    <span className="text-muted-foreground line-through">
                      $300.000
                    </span>
                  </div>
                  <p className="text-green-600 font-semibold mb-4">
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
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Aprovechar Oferta
                  </Button>
                </div>
              </Card>

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
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                    className="flex items-center gap-1 font-bold"
                  >
                    <benefit.icon className="h-7 w-7" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Nota Personal del Fundador */}
        <section className="py-6 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-[800px] mx-auto">
              <div className="flex flex-col gap-6">
                <div className="h-16 w-16 rounded-full bg-background mx-auto"></div>
                <h2 className="text-2xl font-bold text-center">
                  Un Mensaje de Nuestro Fundador
                </h2>
                <p className="text-muted-foreground text-center">
                  "Creé estas gafas después de años sufriendo de migrañas e
                  insomnio. Como desarrollador de software, pasaba más de 12
                  horas al día frente a pantallas, sin darme cuenta del daño que
                  la luz azul estaba causando a mi salud. Después de investigar
                  sus efectos, diseñé estas lentes con filtro rojo que lo
                  cambiaron todo. Hoy, mi misión es ayudar a más personas a
                  proteger su vista y mejorar su descanso. Estas gafas no son
                  solo un accesorio, sino una inversión en tu bienestar y
                  calidad de vida en esta era digital."
                </p>
                <div className="text-center">
                  <p className="font-medium">Miguel Arenas</p>
                  <p className="text-sm text-muted-foreground">
                    Fundador, Amber Vision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-7 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Section Title */}
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
                Todo lo que necesitas saber sobre nuestras gafas bloqueadoras de
                luz azul
              </p>
            </div>

            {/* Accordion FAQ */}
            <div className="max-w-[800px] mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {/* Pregunta 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    ¿Puedo usar estas gafas para conducir?
                  </AccordionTrigger>
                  <AccordionContent>
                    No recomendamos usarlas al conducir de noche, ya que el
                    tinte rojo puede alterar la percepción de los colores en
                    semáforos y señales de tránsito. Estas gafas están diseñadas
                    principalmente para uso en interiores, especialmente antes
                    de dormir o al trabajar con pantallas digitales.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    ¿Puedo usarlas con fórmula médica?
                  </AccordionTrigger>
                  <AccordionContent>
                    ¡Sí! Nuestras gafas Premium y Ultimate pueden personalizarse
                    con tu fórmula. Durante la compra, tendrás la opción de
                    subir tu receta, y nuestro equipo óptico se encargará del
                    proceso sin costo adicional. El paquete Básico no permite
                    personalización con fórmula.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 3 */}
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    ¿Son cómodas para usarlas por varias horas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutamente. Diseñamos nuestras monturas con materiales
                    ligeros y ergonómicos para garantizar comodidad. Cuentan con
                    almohadillas ajustables para la nariz y brazos flexibles que
                    no generan presión en la cabeza o las orejas. Muchos de
                    nuestros clientes las usan durante 3-4 horas sin sentir
                    molestias. Los modelos Premium y Ultimate ofrecen una
                    comodidad mejorada para uso prolongado.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 4 */}
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    ¿Cuándo debo usar estas gafas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Para obtener los mejores resultados, recomendamos usarlas
                    **2-3 horas antes de dormir**. Esto permite que tu cuerpo
                    **produzca melatonina naturalmente**, ayudándote a conciliar
                    el sueño más rápido y descansar mejor. Son ideales para ver
                    pantallas en la noche, leer o realizar actividades en
                    interiores antes de acostarte. También pueden ayudar durante
                    el día a reducir la fatiga ocular.
                  </AccordionContent>
                </AccordionItem>

                {/* Pregunta 5 */}
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    ¿Cómo debo limpiar y cuidar mis gafas?
                  </AccordionTrigger>
                  <AccordionContent>
                    Limpia los lentes con el **paño de microfibra** incluido en
                    todos los paquetes. Para una limpieza más profunda, usa
                    **agua tibia y jabón neutro**, secando con el paño. **Evita
                    usar papel, pañuelos o productos químicos agresivos**, ya
                    que pueden rayar los lentes o dañar los recubrimientos
                    especiales. **Guárdalas siempre en su estuche** cuando no
                    las uses para prolongar su vida útil.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* More Social Proof */}
        <section className="py-8 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Únete a Cientos de Clientes Satisfechos
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[800px]">
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
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      "{testimonial.review}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Comprador Verificado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-[800px] mx-auto bg-muted rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                ¿Listo para Transformar tu Descanso?
              </h2>
              <p className="text-muted-foreground mb-6 md:text-lg">
                Únete a cientos de clientes que han mejorado la calidad de su
                sueño y han reducido la fatiga ocular gracias a nuestras gafas
                bloqueadoras de luz azul.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold mb-4"
              >
                ¡Ordena Ahora – Stock Limitado!
                <ShoppingCart className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Garantía de Devolución de Dinero por 30 Días</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Envío Gratis</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Pruébalas por 30 días – ¡Ámalas o te devolvemos tu dinero!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <span className="text-primary">Amber</span>
                <span>Vision</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Protegiendo tus ojos en la era digital con tecnología innovadora
                de bloqueo de luz azul.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
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
                  className="text-muted-foreground hover:text-foreground"
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
                  className="text-muted-foreground hover:text-foreground"
                >
                  {/* Icono de Twitter */}
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#benefits"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Beneficios
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Testimonios
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Política de envíos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Política de devoluciones
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contáctanos</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span>📞</span> +123 456 7890
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span>✉️</span> support@ambervision.com
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span>📍</span> Calle 123, Ciudad, País
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} Amber Vision. Todos los derechos
            reservados.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-2">
            Designed with ❤️ by the Amber Vision Team.
          </p>
        </div>
      </footer>
    </div>
  );
}

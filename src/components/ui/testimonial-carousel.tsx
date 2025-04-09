"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Carolina López",
    role: "Diseñadora Gráfica",
    content:
      "Estas gafas me sorprendieron. Varias veces sentí dolor en los ojos después de estar frente al computador, me puse las gafas y, en cuestión de minutos, el dolor desapareció. Solo por eso ya valen la pena. Si pasas mucho tiempo frente a pantallas, te recomiendo estas gafas así no sientas molestias todavía. El daño de la luz azul es acumulativo y puede ser permanente. ¡Ojalá hubiera conocido estas gafas antes!",
    rating: 5,
  },
  {
    id: 2,
    name: "Andrés Ramirez",
    role: "Desarrollador de Software",
    content:
      "Trabajo hasta tarde programando, y estas gafas han sido un salvavidas. Mis ojos se sienten mucho menos cansados, puedo quedarme más tiempo frente a la pc y me duermo más rápido que nunca.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sebastián Torres",
    role: "Analista Financiero",
    content:
      "Después de años luchando contra el insomnio, estas gafas han hecho una diferencia notable. Me duermo más rápido y me despierto mucho más descansado.",
    rating: 5,
  },
  {
    id: 3,
    name: "Juan Camilo Rodríguez",
    role: "Ingeniero de Software",
    content:
      "Trabajo muchas horas frente al computador y estas gafas me han ayudado a reducir el cansancio visual y mejorar el sueño. Son cómodas, modernas y bloquean la luz azul. ¡Una gran inversión para quienes pasan mucho tiempo en pantalla, sus ojos se lo agradecerán!",
    rating: 4,
  },
  {
    id: 4,
    name: "Valentina Moreno",
    role: "Creadora de Contenido",
    content:
      "Estas gafas han cambiado completamente mi rutina nocturna. Ahora puedo editar videos hasta tarde sin sufrir fatiga visual ni afectar mi sueño.",
    rating: 5,
  },

  {
    id: 6,
    name: "Laura Castillo",
    role: "Docente Virtual",
    content:
      "Dar clases online en la noche solía dejarme acelerada y sin poder dormir. ¡Estas gafas han resuelto completamente ese problema!",
    rating: 4,
  },
];


export default function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextPage()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentPage])

  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        {currentTestimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="border shadow-md backdrop-blur-lg bg-white/10 border-white/10"
          >
            <CardContent className="p-6">
              <div className="flex mb-4 xl:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-[#FFD700] text-sidebar-primary-foreground  stroke-[#FFD700]"
                        : "text-sidebar-primary-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sidebar-primary-foreground mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                {/* <div className="h-10 w-10 rounded-full bg-muted-foreground/20"></div> */}
                <div>
                  <p className="font-medium text-sidebar-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-sidebar-primary-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={prevPage}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            variant={i === currentPage ? "default" : "outline"}
            size="icon"
            className={`h-2 w-2 rounded-full p-0 ${i === currentPage ? "bg-white" : " bg-none"} cursor-pointer`}
            onClick={() => setCurrentPage(i)}
          >
            <span className="sr-only">Page {i + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full cursor-pointer"
          onClick={nextPage}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  );
}


"use client";
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// Define the product type
export type Product = {
  id: string
  name: string
  price: number
  image: string
  variant?: string
}

export default function SimpleCheckoutForm({ product, shippingCost = 10 }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    idNumber: "",
    city: "",
    state: "",
    address: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    alert("Order submitted successfully!");
  };

  // Calculate totals
  const subtotal = product.price;
  const total = subtotal + shippingCost;

  return (
    <div className="container max-w-6xl lg:px-4 lg:py-4">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Order Summary */}
        <Card className="md:col-span-1 bg-gray-300 xl:px-1">
          <CardHeader>
            <CardTitle className="text-center tracking-wide">
              Resumen de tu compra
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Product */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-40 w-40 xl:h-60 xl:w-62 rounded-md border bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-center">{product.name}</h3>
                {product.variant && (
                  <p className="text-sm text-muted-foreground text-center">
                    {product.variant}
                  </p>
                )}
                <p className="mt-1 font-medium text-center">
                  $
                  {product.price.toLocaleString("es-CO", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>

            <Separator />

            {/* Price Breakdown */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>
                  $
                  {subtotal.toLocaleString("es-CO", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Envío</span>
                <span>
                  <strong className="text-green-600">GRATIS</strong>
                </span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>
                  $
                  {subtotal.toLocaleString("es-CO", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Information Form */}
        <Card className="md:col-span-2 bg-gray-200">
          <CardHeader>
            <CardTitle className="tracking-wide">
              Información para tu envío
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Nombre Y Apellido
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    required
                    className="border-b-gray-700 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Correo Electronico
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    required
                    className="border-b-gray-700 rounded-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Telefono / WhatsApp
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="320 123 4567"
                    required
                    className="border-b-gray-700 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Documento <small>(Solo para la transportadora)</small>
                  </label>
                  <Input
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="123456789"
                    className="border-b-gray-700 rounded-none"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ciudad</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Tu Ciudad"
                    required
                    className="border-b-gray-700 rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Departamento</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border-b-gray-700 bg-background px-3 py-2 text-sm"
                    required
                  >
                    <option value="" className="border-b-gray-700">
                      Selecciona tu departamento
                    </option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Antioquia">Antioquia</option>
                    <option value="Arauca">Arauca</option>
                    <option value="Atlántico">Atlántico</option>
                    <option value="Bolívar">Bolívar</option>
                    <option value="Boyacá">Boyacá</option>
                    <option value="Caldas">Caldas</option>
                    <option value="Caquetá">Caquetá</option>
                    <option value="Casanare">Casanare</option>
                    <option value="Cauca">Cauca</option>
                    <option value="Cesar">Cesar</option>
                    <option value="Chocó">Chocó</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Cundinamarca">Cundinamarca</option>
                    <option value="Guainía">Guainía</option>
                    <option value="Guaviare">Guaviare</option>
                    <option value="Huila">Huila</option>
                    <option value="La Guajira">La Guajira</option>
                    <option value="Magdalena">Magdalena</option>
                    <option value="Meta">Meta</option>
                    <option value="Nariño">Nariño</option>
                    <option value="Norte de Santander">
                      Norte de Santander
                    </option>
                    <option value="Putumayo">Putumayo</option>
                    <option value="Quindío">Quindío</option>
                    <option value="Risaralda">Risaralda</option>
                    <option value="San Andrés y Providencia">
                      San Andrés y Providencia
                    </option>
                    <option value="Santander">Santander</option>
                    <option value="Sucre">Sucre</option>
                    <option value="Tolima">Tolima</option>
                    <option value="Valle del Cauca">Valle del Cauca</option>
                    <option value="Vaupés">Vaupés</option>
                    <option value="Vichada">Vichada</option>
                    {/* Add other states as needed */}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Dirección</label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Calle xxx, barrio, cerca a..."
                  required
                  className="border-b-gray-700
                  rounded-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Datos Adicionales</label>
                <Textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Instrucciones de entrega, localidad, barrio, municipio cercano, area suburbana o cualquier información adicional que consideres necesaria."
                  className="min-h-[100px] border-gray-700
                  rounded-md"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold cursor-pointer tracking-wider"
              >
                Completar Compra
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

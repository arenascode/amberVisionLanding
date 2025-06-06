"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { makeRequest } from "../../utils/axios";
import { FormErrors, ValidationRules } from "@/types/rulesValidationForm";
import { normalizePhoneNumber, validateForm } from "@/utils/validationForm";
import { Loader2 } from "lucide-react";
import ReactPixel from "react-facebook-pixel"
import ebook1 from "/assets/img/ebook1.webp";
import ebook2 from "/assets/img/ebook2.webp";
import accessories from "/assets/img/accessories.webp";
import freeDelivery from "/assets/img/freeDelivery.webp";
import { DialogDescription } from "../ui/dialog";
// Define the product type
export type Product = {
  id: string;
  name: string;
  price: number;
  priceBefore: number
  image: string;
  gift1: string;
  gift2: string;
  gift3: string;
};
export interface CheckOutFormProps {
  product: Product;
  setSuccessPage: React.Dispatch<React.SetStateAction<boolean>>;
  handleOrderNumberFromChild: (data: string) => void;
}

const SimpleCheckoutForm: React.FC<CheckOutFormProps> = ({
  product,
  setSuccessPage,
  handleOrderNumberFromChild,
}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    cedula: "",
    ciudad: "",
    departamento: "",
    direccion: "",
    datos_adicionales: "",
    producto: product.name,
    kit: product.id,
    valor_compra: product.price,
    numero_orden: `AV-${Math.floor(100000 + Math.random() * 900000)}`,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [someError, setSomeError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fbq = ReactPixel

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    setSomeError(false);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "telefono") {
      const cleanedNumber = normalizePhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: cleanedNumber }));
    }
  };

  const validationRules: Record<string, ValidationRules> = {
    nombre: {
      required: true,
      minLength: 3,
      messageRequired:
        "¡Hey! No seas tímido, cuéntanos tu nombre para poder enviarte el pedido.",
    },
    email: {
      required: true,
      minLength: 3,
      pattern: /\S+@\S+\.\S+/,
      messageInvalid:
        "¿Eso era un correo? 🤔 Revisa el formato, parece que algo falta.",
      messageRequired:
        "Necesitamos tu correo para enviarte la guía y mantenerte al tanto. ¡Prometemos no enviarte memes! (bueno, quizás uno o dos).",
    },
    cedula: {
      required: true,
      minLength: 5,
      pattern: /^(\d{5,10}|[a-zA-Z0-9]{6,12})$/,
      messageRequired:
        "Necesitamos tu número de documento para que la transportadora no se pierda. ¡No querrás que tu paquete viaje solo!",
      messageInvalid:
        "Parece que el número de documento se tomó el día libre. Revisa que esté bien.",
      messageLength:
        "El número de documento debe tener al menos 5 caracteres. ¡Dale un poco más de personalidad!",
    },
    direccion: {
      required: true,
      minLength: 5,
      messageRequired:
        "¿Sin dirección? ¡Eso sí que es una misión imposible para la transportadora! Ayúdanos a llevarlo a tu puerta.",
      messageLength:
        "Es una dirección muy corta, danos un poco más de detalle.",
    },
    telefono: {
      required: true,
      minLength: 7,
      pattern:
        /^\+?[1-9]\d{0,2}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      messageInvalid:
        "Mmm... ese número no parece de este planeta. ¡Revisa otra vez!",
      messageRequired:
        "Necesitamos tu número para avisarte cuando el pedido esté en camino. ¡Nada de llamadas molestas, lo prometemos!",
    },
    departamento: {
      required: true,
      minLength: 3,
      messageRequired:
        "¿Dónde vives? ¡El departamento no puede faltar para que el pedido llegue bien!",
    },
    ciudad: {
      required: true,
      minLength: 3,
      messageRequired:
        "La ciudad es fundamental para que el paquete no termine de vacaciones en otro lado. ¡Dinos dónde estás!",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSomeError(true);
    } else {
      try {
        setIsLoading(true);

        await makeRequest
          .post("/purchase/newPurchase", formData)
          .then((res) => {
            if (res.status === 201) {
              handleOrderNumberFromChild(formData.numero_orden);
              fbq.track("Purchase", {currency: "COL" , value: product.price})
              setSuccessPage(true);
              //navigate to thanks page!
            } else if (res.status === 400) {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      } catch (err: unknown) {
        if (err instanceof Error) {
          alert(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Calculate totals
  const subtotal = product.price;

  return (
    <div className="container max-w-6xl lg:px-4 lg:py-4">
      <div className="hidden justify-center lg:flex lg:flex-col">
        <span className="text-red-500 font-semibold text-lg text-center lg:text-2xl">
          🚨 Atencion 🚨
        </span>
        <DialogDescription className="text-lg lg:text-xl text-sidebar-primary-foreground text-center w-[80%] lg:w-[72%] lg:mb-10 mx-auto">
          Asegúrate de proporcionar la información correcta para el envío de tu
          pedido. Es crucial incluir un número de teléfono con WhatsApp.
        </DialogDescription>
      </div>
      <div className="grid gap-5 md:grid-cols-1 lg:flex lg:flex-shrink md:gap-2">
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
              <div className="box flex gap-2 border p-2 rounded-sm bg-gray-100 w-full justify-between ">
                <div className="h-20 w-20  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 rounded-md border border-gray-400 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center gap-1 justify-between ">
                  <span className="font-medium text-left text-sm md:text-lg">
                    {product.name}
                  </span>
                  <div className="font-medium text-center text-sm md:text-lg flex flex-col">
                    <span className="italic line-through text-end">
                      $
                      {product.priceBefore.toLocaleString("es-CO", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                    <span className="font-bold text-green-600">
                      $
                      {product.price.toLocaleString("es-CO", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
                <div className="h-22 w-22 md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={accessories}
                    alt={product.gift1}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <span className="font-medium text-left text-[13px] md:text-lg">
                    {product.gift1}
                  </span>
                  <div className="font-medium text-center text-sm md:text-lg flex flex-col">
                    <span className="italic line-through text-end">
                      $30.000
                    </span>
                    <span className="font-bold text-green-600">GRATIS</span>
                  </div>
                </div>
              </div>
              <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
                <div className="h-22 w-22  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={ebook1}
                    alt={product.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <span className="font-medium text-left text-[13px] md:text-lg">
                    {product.gift2}
                  </span>
                  <div className="font-medium text-center flex flex-col md:text-lg">
                    <span className="italic line-through text-end">
                      $59.900
                    </span>
                    <span className="font-bold text-green-600">GRATIS</span>
                  </div>
                </div>
              </div>
              <div className="box flex gap-1 border p-2 rounded-sm bg-gray-100">
                <div className="h-22 w-22  md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden">
                  <img
                    src={ebook2}
                    alt={product.name}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center gap-1">
                  <span className="font-medium text-left text-[13px] md:text-lg">
                    {product.gift3}
                  </span>
                  <div className="font-medium text-center flex flex-col md:text-lg">
                    <span className="italic line-through text-end">
                      $59.900
                    </span>
                    <span className="font-bold text-green-600">GRATIS</span>
                  </div>
                </div>
              </div>
              <div className="box flex gap-4 border p-2 rounded-sm bg-gray-100 w-full justify-between">
                <div className="h-22 w-22 md:w-50 md:h-48 lg:w-30 lg:h-30 xl:w-40 xl:h-40 flex items-center justify-center overflow-hidden rounded-md border border-gray-400">
                  <img
                    src={freeDelivery}
                    alt="Delivery Gratis"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex items-center gap-1 justify-between">
                  <span className="font-medium text-left text-[13px] md:text-lg flex flex-col">
                    ENTREGA DE 2 A 4 DÍAS
                    <small className="font-italic">
                      Dependiendo de tu ciudad
                    </small>
                  </span>
                  <div className="font-medium text-center flex flex-col md:text-lg">
                    <span className="font-bold text-green-600">GRATIS</span>
                  </div>
                </div>
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
        <div>
          <div className="flex flex-col justify-center lg:hidden mb-4">
            <span className="text-red-500 font-semibold text-lg text-center xl:text-xl">
              🚨 Atencion 🚨
            </span>
            <DialogDescription className="text-lg text-sidebar-primary-foreground text-center w-[80%] lg:w-full lg:mb-4 mx-auto">
              Asegúrate de proporcionar la información correcta para el envío de
              tu pedido. Es crucial incluir un número de teléfono con WhatsApp.
            </DialogDescription>
          </div>
          {/* Customer Information Form */}
          <Card className="md:col-span-2 bg-gray-300">
            <CardHeader>
              <CardTitle className="tracking-wide">
                Información para tu envío
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                id="purchaseForm"
              >
                <div className="grid gap-4 sm:grid-cols-2 mb-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Nombre Y Apellido
                    </label>
                    <Input
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="border-b-gray-700 placeholder-gray-400"
                    />
                    {errors.nombre && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.nombre}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Correo Electronico
                    </label>
                    <Input
                      name="email"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tucorreo@ejemplo.com"
                      className="border-b-gray-700"
                    />
                    {errors.email && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Telefono / WhatsApp
                    </label>
                    <Input
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      onBlur={handleOnBlur}
                      placeholder="320 123 4567"
                      className="border-b-gray-700 "
                    />
                    {errors.telefono && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.telefono}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium md:text-nowrap">
                      Documento <small>(Solo para la transportadora)</small>
                    </label>
                    <Input
                      name="cedula"
                      value={formData.cedula}
                      onChange={handleChange}
                      placeholder="123456789"
                      className="border-b-gray-700 "
                    />
                    {errors.cedula && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.cedula}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ciudad</label>
                    <Input
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Tu Ciudad"
                      className="border-b-gray-700 "
                    />
                    {errors.ciudad && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.ciudad}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Departamento</label>
                    <select
                      name="departamento"
                      value={formData.departamento}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-white px-3 py-2 shadow-sm transition-all duration-300 focus:outline-none focus:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" className="">
                        Selecciona tu departamento
                      </option>
                      <option value="Amazonas">Amazonas</option>
                      <option value="Antioquia">Antioquia</option>
                      <option value="Arauca">Arauca</option>
                      <option value="Atlántico">Atlántico</option>
                      <option value="Bogotá">Bogotá</option>
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
                    {errors.departamento && (
                      <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                        {errors.departamento}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Dirección</label>
                  <Input
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="ej: Calle 123 #45-67, depto 89, torre 10.."
                    className="border-b-gray-700 mb-0
                  "
                  />
                  <small className="text-[0.7rem] md:text-[0.9rem] italic">
                   Debe ser exacta para que la transportadora pueda ubicarse
                  </small>
                  {errors.direccion && (
                    <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
                      {errors.direccion}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Datos Adicionales
                  </label>
                  <Textarea
                    name="datos_adicionales"
                    value={formData.datos_adicionales}
                    onChange={handleChange}
                    placeholder="Instrucciones de entrega, localidad, barrio, municipio cercano, area suburbana o cualquier información adicional que consideres necesaria."
                    className="min-h-[100px] flex h-10 w-full border-input rounded-md px-3 bg-white py-2 text-base shadow-sm shadow-gray-800 transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-gray-400 focus:placeholder:text-gray-100 focus:outline-none focus:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                {/* Alert Confirm Purchase */}
                <div className="flex flex-col justify-center text-center items-center gap-2 mb-3 lg:mt-10">
                  <span className="text-red-500 font-semibold text-lg text-center lg:text-xl">
                    🚨 Atencion 🚨
                  </span>
                  <span className="font-bold text-center">
                    TU COMPRA ES UN COMPROMISO
                  </span>
                  <p className="text-sm lg:text-[1rem] text-black">
                    Al confirmar tu compra, activamos todo el proceso logístico:
                    personal, preparación y el envío que te regalamos 💌.
                  </p>
                  <p className="text-sm lg:text-[1rem] text-black">
                    Por eso, te pedimos que solo realices el pedido si estás
                    seguro, así evitamos devoluciones que generan costos
                    innecesarios y nos ayudan a seguir ofreciendo este beneficio
                    a más personas 🙏
                  </p>
                  <span className="text-center font-bold lg:text-xl lg:mt-4">
                    ¡Gracias por tu comprensión! 🩶
                  </span>
                </div>
                {someError && (
                  <span className="someError text-red-500 text-[12px] text-center mt-[-0.5rem]">
                    Revisa todos los campos, hubo un error o faltó alguno
                  </span>
                )}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mb-0 cursor-pointer tracking-wider text-lg"
                  id="formPurchaseBtn"
                  data-purchasedproduct={product.name}
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}{" "}
                  {isLoading ? "Procesando..." : "Confirmar Compra"}
                </Button>
                <p className="text-sm mt-1 text-center">
                  🔒 Solo pagas al recibir!
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SimpleCheckoutForm;

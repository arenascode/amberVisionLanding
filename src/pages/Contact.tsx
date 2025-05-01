import { FormErrors, ValidationRules } from "@/types/rulesValidationForm";
import { makeRequest } from "@/utils/axios";
import { validateForm } from "@/utils/validationForm";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import "../styles/scss/app.scss";

const Contact = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [someError, setSomeError] = useState<boolean>(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setSomeError(false);
  };

  const validationRules: Record<string, ValidationRules> = {
    nombre: {
      required: true,
      minLength: 3,
      messageRequired:
        "Tu nombre es requerido, queremos saber quien nos contacta 😃",
    },
    email: {
      required: true,
      minLength: 3,
      pattern: /\S+@\S+\.\S+/,
      messageInvalid:
        "¿Eso era un correo? 🤔 Revisa el formato, parece que algo falta.",
      messageRequired:
        "Necesitamos tu correo para ponernos en contacto contigo.",
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
    mensaje: {
      required: true,
      minLength: 10,
      messageRequired:
        "¡Queremos saber de ti! Cuéntanos qué necesitas o cómo podemos ayudarte.",
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSomeError(true);
      return;
    } else {
      try {
        setIsLoading(true);
        await makeRequest.post("/contact", form).then((res) => {
          if (res.status === 200) {
            setErrors({});
            setSomeError(false);
            alert(res.data.message);
          } else if (res.status === 500) {
            alert(res.data.message);
          }
        });
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      } finally {
        setIsLoading(false)
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 mt-18 xl:mt-24">
      {/* Información de contacto */}
      <div className="text-gray-800 darkMode">
        <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
        <p className="mb-6">
          Estamos aquí para ayudarte. Si tienes preguntas sobre tu pedido,
          nuestros productos o cualquier otra inquietud, no dudes en
          escribirnos.
        </p>
        <div className="space-y-4 text-sm">
          <div>
            <span className="font-semibold">Teléfono / WhatsApp:</span>{" "}
            <a
              href="tel:+573001234567"
              className="text-blue-600 hover:underline"
            >
              +57 316 427 8515
            </a>
          </div>
          <div>
            <span className="font-semibold">Correo electrónico:</span>{" "}
            <a
              href="mailto:ventas@focusfitshop.com"
              className="text-blue-600 hover:underline"
            >
              ventas@focusfitshop.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Horario de atención:</span> Lunes a
            viernes de 8:00 a.m. a 7:00 p.m. / Sábados: 09:00 AM - 02:00 PM
          </div>
          <div>
            <span className="font-semibold">Ubicación:</span> Bogotá, Colombia
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <form
        className="p-6 rounded-lg border-1 shadow-lg space-y-5"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-semibold mb-2">Envíanos un mensaje</h3>

        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 darkMode"
          >
            Nombre completo
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleForm}
            value={form.nombre}
          />
          {errors.nombre && (
            <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
              {errors.nombre}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 darkMode"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleForm}
            value={form.email}
          />
          {errors.email && (
            <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
              {errors.email}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 darkMode"
          >
            Teléfono celular
          </label>
          <input
            type="tel"
            id="phone"
            name="telefono"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={form.telefono}
            onChange={handleForm}
          />
          {errors.telefono && (
            <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
              {errors.telefono}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 darkMode"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="mensaje"
            rows={5}
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleForm}
            value={form.mensaje}
          ></textarea>
          {errors.mensaje && (
            <span className="inputError text-red-500 text-[12px] mt-[-0.3rem]">
              {errors.mensaje}
            </span>
          )}
        </div>
        <div className="container flex flex-col gap-4">
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 flex items-center justify-center gap-4 pointer"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}{" "}
            {isLoading ? "Procesando..." : "Enviar Mensaje"}
          </button>
          {someError && (
            <span className="someError text-red-500 text-[12px] text-center mt-[-0.5rem] xl:ml-3">
              Revisa todos los campos, hubo un error o faltó alguno
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
export default Contact;

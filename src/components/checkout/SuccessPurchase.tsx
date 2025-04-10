import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessPageProps {
  setSuccessPage: React.Dispatch<React.SetStateAction<boolean>>;
  orderNumber: string;
}

const CheckoutSuccessPage = ({
  setSuccessPage,
  orderNumber,
}: SuccessPageProps) => {
  return (
    <div className="modalContainer fixed w-full h-full bg-black/70 overflow-x-scroll z-50">
      <div className="container max-w-md xl:max-w-[80%] mx-auto px-2 py-6 text-center bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] xl:mt-11 relative flex flex-col lg:flex xl:h-[80%] items-center xl:p-8 gap-5 xl:gap-10">
        <div className="container lg:flex lg:flex-col lg:h-[100%]">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-6 lg:mt-8" />

          <h1 className="text-3xl font-bold mb-2 text-sidebar-primary-foreground">
            Orden Confirmada!
          </h1>
          <p className="text-sidebar-primary-foreground mb-8 lg:text-lg">
            Muchas gracias por tu compra. Hemos recibido tu pedido y lo
            procesaremos de inmediato.
          </p>
          <p className="text-sidebar-primary-foreground lg:text-lg">
            Recibirás un correo electrónico de confirmación en breve con los
            detalles de tu compra.
          </p>

          <div className="space-y-4">
            <p className=" text-sidebar-primary-foreground lg:text-lg mt-2 lg:mt-4 font-extrabold">
              Orden # {orderNumber}
            </p>
          </div>
        </div>
        <div className="container nextSteps">
         <div className="bg-gray-300 p-4 rounded-lg text-left">
          <p className="font-medium mb-5 xl:text-lg text-black">¿Cuáles son los siguientes pasos?</p>
          <ol className="flex flex-col gap-3 space-y-2 text-sm lg:text-[16px] text-black list-decimal list-inside">
            <li>
              📥 Procesaremos y enviaremos tu pedido hoy mismo. (Si es un día
              laboral)
            </li>
            <li>
              📲 Recibirás información de seguimiento por correo electrónico o
              WhatsApp.
            </li>
            <li>
              🚚 Tu pedido llegará en aproximadamente 2-3 días laborables,
              dependiendo de tu ciudad.
            </li>
            <li>
              😎 Paga al recibir y experimenta un mejor descanso y bienestar
              visual para optimizar tu productividad y disfrute.
            </li>
          </ol>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            asChild
            className="flex-1 bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)] xl:text-xl"
          >
            <a href="/">
              <Home
                className="mr-2 h-4 w-4 lg:h-6 lg:w-6"
                onClick={() => setSuccessPage(false)}
              />
              Volver
            </a>
          </Button>

          {/* <Button asChild className="flex-1">
            <a href="/#pricing">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Shop More
            </a>
          </Button> */}
        </div> 
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;

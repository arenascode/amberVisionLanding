import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CheckoutForm, { type Product } from "@/components/checkout/CheckoutForm";

interface CheckoutModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({
  product,
  isOpen,
  onClose,
}: CheckoutModalProps) {

  const handleFormSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
    alert("Order submitted successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl xl:max-w-5xl max-h-[90vh] overflow-y-auto bg-[radial-gradient(circle,#4a4a4a,#333333,#1f1f1f)]
"
      >
        <DialogHeader className="flex flex-col items-center justify-between xl:px-10 xl:gap-4">
          <h2 className="text-sidebar-primary-foreground xl:text-2xl font-bold tracking-wide">
            Obten Envío Gratis y Paga al recibir
          </h2>
          <div>
            <DialogDescription className="xl:text-xl text-sidebar-primary-foreground text-center">
              Por favor completa el formulario a continuación para que te
              llevemos tus Amber Vision directamente a la puerta de tu casa.
            </DialogDescription>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 transition-colors absolute xl:right-[0.5rem] xl:top-[0.5rem] cursor-pointer"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-11 h-11"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="amberGradient"
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#f3f4f6" /> {/* amber-500 */}
                  <stop offset="50%" stopColor="#6a7282" /> {/* orange-500 */}
                  <stop offset="100%" stopColor="#f3f4f6" /> {/* red-600 */}
                </linearGradient>
              </defs>

              <rect
                x="4"
                y="11"
                width="16"
                height="2.5"
                rx="1.25"
                fill="white"
                transform="rotate(45 12 12)"
              />
              <rect
                x="4"
                y="11"
                width="16"
                height="2.5"
                rx="1.25"
                fill="white"
                transform="rotate(-45 12 12)"
              />
            </svg>

            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <div className="flex flex-col justify-center">
          <span className="text-red-500 text-center xl:text-lg">🚨 Atencion 🚨</span>
          <DialogDescription className="xl:text-sm text-sidebar-primary-foreground text-center w-[50%] mx-auto">
            Por favor asegúrate de proporcionar la información correcta para el
            envío de tu pedido. Es crucial incluir un número de teléfono con
            WhatsApp.
          </DialogDescription>
        </div>
        {product && (
          <CheckoutForm
            product={product}
            shippingCost={10}
            onSubmit={handleFormSubmit}
            onCancel={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

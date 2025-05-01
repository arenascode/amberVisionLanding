import "../styles/scss/app.scss";

const ReturnPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 darkMode">
      <h1 className="text-3xl font-bold mb-6">
        Política de Cambios y Devoluciones
      </h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Derecho de retracto</h2>
        <p>
          Conforme al artículo 47 de la Ley 1480 de 2011 (Estatuto del
          Consumidor), el cliente tiene derecho a ejercer el retracto dentro de
          los cinco (5) días hábiles siguientes a la entrega del producto. Para
          ello, el producto debe devolverse en perfectas condiciones, sin uso,
          en su empaque original y con todos sus accesorios.
        </p>
        <p className="mt-2">
          Los costos de transporte y los demás que conlleve la devolución del
          bien serán cubiertos por el consumidor.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Cambios por talla, color o referencia
        </h2>
        <p>
          Si deseas realizar un cambio por talla, color o referencia, podrás
          hacerlo dentro de los cinco (5) días hábiles siguientes a la recepción
          del producto. El artículo debe estar sin uso, en perfecto estado y en
          su empaque original.
        </p>
        <p className="mt-2">
          El cliente asumirá los costos de envío tanto para la devolución del
          producto original como para el nuevo envío. No se aceptan cambios en
          productos en promoción o con descuentos, salvo por garantía.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Productos defectuosos o con fallas
        </h2>
        <p>
          Si el producto recibido presenta defectos de fabricación o daños no
          atribuibles al transporte, podrás solicitar el cambio o reparación
          dentro de los treinta (30) días calendario posteriores a la entrega,
          de acuerdo con lo establecido en el Estatuto del Consumidor.
        </p>
        <p className="mt-2">
          En este caso, la empresa cubrirá los costos de transporte, una vez
          validado el estado del producto y la falla reportada. Se solicitarán
          fotos y evidencia antes de aprobar el proceso de garantía.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Procedimiento para devoluciones
        </h2>
        <ul className="list-decimal list-inside space-y-2">
          <li>
            Envía un correo a{" "}
            <strong>
              <a href="mailto:ventas@focusfitshop.com" className="font-bold">
                ventas@focusfitshop.com
              </a>
            </strong>{" "}
            con el asunto: "Solicitud de devolución".
          </li>
          <li>
            Incluye nombre completo, número de pedido, motivo de la solicitud, y
            fotos del producto (si aplica).
          </li>
          <li>
            Recibirás instrucciones específicas para coordinar la recogida o
            envío del producto.
          </li>
          <li>
            Una vez recibido el artículo y validado su estado, se gestionará el
            cambio, reparación o reembolso según el caso.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Reembolsos</h2>
        <p>
          El reembolso del dinero se realizará dentro de un plazo máximo de
          treinta (30) días calendario, contados desde la recepción del producto
          en nuestras instalaciones y la validación del cumplimiento de los
          requisitos. El reembolso se realizará por el mismo medio de pago
          utilizado por el cliente.
        </p>
        <p className="mt-2">
          No se harán reembolsos si el producto presenta señales de uso, daño
          por mal manejo o si no cumple con las condiciones mencionadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Excepciones</h2>
        <p>
          No se aceptan devoluciones ni cambios en productos de uso personal,
          prendas íntimas, artículos en promoción o personalizados, salvo por
          fallas de fabricación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Contacto</h2>
        <p>
          Si tienes alguna duda o necesitas asistencia con tu solicitud, puedes
          comunicarte con nuestro equipo de servicio al cliente al correo{" "}
          <strong>
            <a href="mailto:ventas@focusfitshop.com" className="font-bold">
              ventas@focusfitshop.com
            </a>
          </strong>{" "}
          o vía WhatsApp al <strong>316 427 8515</strong>.
        </p>
      </section>
      <p className="mb-4 text-sm text-gray-500">
        Última actualización: 8 de abril de 2025
      </p>
    </div>
  );
};
export default ReturnPolicy;

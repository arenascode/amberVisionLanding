const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Política de Envíos</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Cobertura de envíos</h2>
        <p>
          Realizamos envíos a todo el territorio colombiano, a través de
          empresas de mensajería confiables con las que mantenemos convenios
          logísticos. Algunas zonas rurales o de difícil acceso pueden tener
          restricciones o tiempos especiales de entrega.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Tiempos de entrega</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Ciudades principales:</strong> entre 2 y 3 días hábiles.
          </li>
          <li>
            <strong>Municipios intermedios:</strong> entre 3 y 6 días hábiles.
          </li>
          <li>
            <strong>Zonas rurales o de difícil acceso:</strong> pueden tardar
            entre 6 y 10 días hábiles.
          </li>
        </ul>
        <p className="mt-2">
          Los tiempos de entrega son estimados y pueden variar según
          disponibilidad del producto, condiciones climáticas, días festivos o
          causas ajenas a nuestra operación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Costos de envío</h2>
        <p>
          El valor del envío se calcula automáticamente en el proceso de compra,
          según el destino, peso y volumen del paquete. En ocasiones, se
          ofrecerá envío gratis como parte de campañas promocionales o por
          superar un monto mínimo de compra, lo cual se indicará claramente en
          el sitio.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          4. Procesamiento de pedidos
        </h2>
        <p>
          Una vez confirmado el pago, procesaremos el pedido dentro de un plazo
          de 24 horas hábiles. Recibirás un correo de confirmación con los
          detalles del envío y, en caso de estar disponible, el número de guía
          para hacer seguimiento.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          5. Seguimiento del pedido
        </h2>
        <p>
          Te enviaremos por correo electrónico o Whatsapp el número de guía y el
          enlace de la transportadora para que puedas rastrear tu pedido en
          tiempo real. Si tienes alguna inquietud sobre el estado de tu envío,
          puedes contactarnos a través de nuestros canales oficiales.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Entrega del pedido</h2>
        <p>
          Las entregas se realizan en la dirección suministrada por el cliente
          al momento de la compra. Es responsabilidad del comprador asegurarse
          de que los datos estén correctos. La transportadora realizará hasta
          tres intentos de entrega; si no es posible la entrega, el paquete será
          devuelto.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          7. Domicilios rechazados o fallidos
        </h2>
        <p>
          En caso de dirección incorrecta, ausencia prolongada del destinatario
          o negativa a recibir el pedido, se cobrará un nuevo valor de envío
          para realizar el reenvío, o se hará la devolución del valor del
          producto descontando el flete original y el retorno (si aplica).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          8. Productos dañados o faltantes
        </h2>
        <p>
          Si al recibir tu pedido notas que el empaque está en mal estado,
          abierto o alterado, debes dejar constancia en el momento con la
          transportadora y notificar a nuestro equipo en un plazo no mayor a 24
          horas al correo{" "}
          <a href="mailto:ventas@focusfitshop.com" className="font-bold">
            ventas@focusfitshop.com
          </a>{" "}
          con fotos y descripción del caso.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          9. Retrasos o eventualidades
        </h2>
        <p>
          No nos hacemos responsables por retrasos ocasionados por fuerza mayor,
          como huelgas, bloqueos, desastres naturales, accidentes, o demoras en
          el operador logístico. Sin embargo, haremos seguimiento constante y
          buscaremos soluciones eficaces para tu satisfacción.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con tu envío, comunícate con
          nosotros al correo{" "}
          <a href="mailto:ventas@focusfitshop.com" className="font-bold">
            ventas@focusfitshop.com
          </a>{" "}
          o por WhatsApp al <strong>316 427 8515</strong>. Estaremos encantados
          de ayudarte.
        </p>
      </section>
      <p className="mb-4 text-sm text-gray-500">
        Última actualización: 8 de abril de 2025
      </p>
    </div>
  );
}
export default ShippingPolicy
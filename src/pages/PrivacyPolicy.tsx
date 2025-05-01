import "../styles/scss/app.scss"

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-700 darkMode">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          1. Responsable del tratamiento de los datos
        </h2>
        <p>
          <strong>Nombre del Responsable:</strong> Focus Fit Shop
        </p>
        <p>
          <strong>Domicilio:</strong> Bogotá, Colombia
        </p>
        <p>
          <strong>Correo de contacto:</strong> ventas@focusfitshop.com
        </p>
        <p>
          <strong>Teléfono:</strong> +75 316 427 8515
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          2. Información que recopilamos
        </h2>
        <ul className="list-disc list-inside">
          <li>Nombre completo</li>
          <li>Número de documento de identidad</li>
          <li>Dirección de envío</li>
          <li>Teléfono y/o celular</li>
          <li>Correo electrónico</li>
          <li>
            Información de pago (no almacenamos datos completos de tarjetas)
          </li>
          <li>Datos de navegación (IP, cookies, comportamiento en el sitio)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          3. Finalidad del tratamiento
        </h2>
        <p>Los datos se recopilan para las siguientes finalidades:</p>
        <ul className="list-disc list-inside">
          <li>Procesar y entregar pedidos</li>
          <li>Gestionar pagos y facturación</li>
          <li>Enviar confirmaciones y actualizaciones</li>
          <li>Atender solicitudes, reclamos o consultas</li>
          <li>Cumplir con obligaciones legales y contractuales</li>
          <li>Enviar comunicaciones comerciales (solo con autorización)</li>
          <li>Mejorar la experiencia en el sitio web</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Derechos del titular</h2>
        <p>De acuerdo con la Ley 1581 de 2012, puedes:</p>
        <ul className="list-disc list-inside">
          <li>Conocer, actualizar y rectificar tus datos</li>
          <li>Solicitar prueba de la autorización otorgada</li>
          <li>Ser informado sobre el uso de tus datos</li>
          <li>Presentar quejas ante la SIC</li>
          <li>Revocar la autorización y solicitar eliminación</li>
          <li>Acceder gratuitamente a tus datos personales</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Autorización</h2>
        <p>
          Al aceptar esta política, autorizas el tratamiento de tus datos de
          forma libre, previa, expresa e informada conforme a las finalidades
          indicadas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          6. Seguridad y confidencialidad
        </h2>
        <p>
          Aplicamos medidas técnicas, humanas y administrativas razonables para
          proteger tus datos frente a accesos no autorizados, pérdidas o usos
          indebidos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Cookies</h2>
        <p>
          Utilizamos cookies propias y de terceros para mejorar la navegación y
          analizar el comportamiento de los usuarios. Puedes desactivarlas desde
          tu navegador.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          8. Conservación de la información
        </h2>
        <p>
          Conservaremos tu información solo por el tiempo necesario para cumplir
          con las finalidades del tratamiento, o mientras exista una relación
          contractual o legal.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          9. Transferencia a terceros
        </h2>
        <p>
          No compartimos tu información con terceros sin autorización, excepto:
        </p>
        <ul className="list-disc list-inside">
          <li>Pasarelas de pago</li>
          <li>Empresas transportadoras</li>
          <li>Autoridades cuando la ley lo exija</li>
        </ul>
        <p>
          En todos los casos, se exige cumplimiento de normativas de protección
          de datos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">10. Modificaciones</h2>
        <p>
          Podemos actualizar esta política en cualquier momento. Los cambios
          serán publicados en este mismo sitio web y se entenderán aceptados al
          continuar usando nuestros servicios.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          11. Contacto para ejercer tus derechos
        </h2>
        <p>
          Si deseas ejercer tus derechos o tienes dudas sobre esta política,
          puedes contactarnos a través de:
        </p>
        <p>
          <strong>Correo:</strong> ventas@focusfitshop.com
        </p>
        <p>
          <strong>Ciudad:</strong> Bogotá, Colombia
        </p>
      </section>
      <p className="mb-4 text-sm text-gray-500">
        Última actualización: 8 de abril de 2025
      </p>
    </div>
  );
}
export default PrivacyPolicy
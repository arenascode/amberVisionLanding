const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(circle,#2c2c2c,#1f1f1f,#000000)]">
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4 ">
              <a href="/" className="flex gap-2">
                <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
                  Amber
                </span>
                <span className="bg-gradient-to-r from-gray-100 via-gray-500 to-gray-100 bg-clip-text text-transparent">
                  Vision
                </span>
              </a>
            </div>
            <p className="text-sm text-sidebar-primary-foreground mb-4">
              Protegiendo tus ojos en la era digital con tecnología innovadora
              de bloqueo de luz azul.
            </p>
            <div className="flex gap-4">
              {/* <a
                href="#"
                className="text-sidebar-primary-foreground hover:text-fire-btn"
              >
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
              </a> */}
              {/* <a
                href="#"
                className="text-sidebar-primary-foreground hover:text-fire-btn"
              >
                
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
              </a> */}
              {/* <a
                href="#"
                className="text-sidebar-primary-foreground hover:text-fire-btn"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.896-.795-1.497-1.77-1.676-2.07-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.3-.498.099-.2.05-.374-.025-.524-.075-.15-.672-1.62-.922-2.206-.242-.579-.487-.5-.672-.51-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.359-.273.285-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    fill="#FFFFFF"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/#benefits"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="/#features"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/terminos-de-servicio"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Términos de servicio
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidad"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-envios"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Política de envíos
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-devoluciones"
                  className="text-sidebar-primary-foreground hover:text-fire-btn"
                >
                  Política de devoluciones
                </a>
              </li>
            </ul>
            <h3 className="font-medium mt-5 text-sidebar-primary-foreground lg:text-lg">
              <a href="/contacto">Contacto</a>
            </h3>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sidebar-primary-foreground">
              Contáctanos
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                <span>📞</span> +57 316 4278515
              </li>
              <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                <span>✉️</span>{" "}
                <a href="mailto:ventas@focusfitshop.com" className="font-bold">
                  ventas@focusfitshop.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sidebar-primary-foreground">
                <span>📍</span> Bogotá, Colombia.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-sidebar-primary-foreground mt-8">
          © {new Date().getFullYear()} Amber Vision es una marca de Focus Fit
          Shop. Todos los derechos reservados.
        </p>
        <p className="text-center text-xs text-sidebar-primary-foreground mt-2">
          Designed with ❤️ by the Focus Fit Shop Team.
        </p>
      </div>
    </footer>
  );
}
export default Footer
import "./homeNavBar.scss";


interface NavBarMobileProps {
  onClose: () => void
}

const NavBarMobile = ({onClose}: NavBarMobileProps) => {

  window.onclick = function (e) {
    const mobileMenu = document.getElementById("mobileMenu_modal");
    if (e.target === mobileMenu) {
      mobileMenu.style.opacity = 0;
      setTimeout(() => {
        mobileMenu.style.display = "none";
        onClose()
      }, 500);
    }
  };

  return (
    <div id="mobileMenu_modal">
      <div className="mobileMenu_content">
        <button id="closeModalBtn" onClick={onClose}>
          <img src="/assets/icons/closeModal.webp" alt="" />
        </button>
        <ul className="links_menu">
          <li className="hover:text-fire-btn">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-fire-btn">
            <a href="#benefits">Beneficios</a>
          </li>
          <li className="hover:text-fire-btn">
            <a href="#features">Carácteristicas</a>
          </li>
          <li className="hover:text-fire-btn">
            <a href="#testimonials">Testimonios</a>
          </li>
          <li className="hover:text-fire-btn">
            <a href="#pricing">Oferta</a>
          </li>
          <li className="hover:text-fire-btn">
            <a href="#faq">FAQ</a>
          </li>
          {/* <li>
              <a href="#instagramSection">Galeria</a>
            </li>
            <li>
              <a href="#meansOfContact">Contactame</a>
            </li> */}
        </ul>
      </div>
    </div>
  );
};
export default NavBarMobile;

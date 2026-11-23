import React from "react";
import Logo from "../assets/logo-footer.svg";
import FooterInformation from "./footerInformation";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";

const infoLinks = [
  { text: "Sobre Drip Store", link: "/" },
  { text: "Segurança", link: "/" },
  { text: "Wishlist", link: "/" },
  { text: "Blog", link: "/" },
  { text: "Trabalhe Conosco", link: "/" },
  { text: "Meus Pedidos", link: "/" },
];

const categoryLinks = [
  { text: "Camisetas", link: "/" },
  { text: "Calças", link: "/" },
  { text: "Bonés", link: "/" },
  { text: "Headphones", link: "/" },
  { text: "Tênis", link: "/" },
];

const contactLinks = [
  {
    text: "Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE, 60150-161",
    link: "/contact",
  },
  { text: "(85) 3051-3411", link: "tel:+558530513411" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white w-full pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap lg:grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 lg:w-full flex flex-col">
            <div className="mb-4 md:mb-6">
              <img src={Logo} alt="Logo DripStore" />
            </div>
            <p className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-4 md:gap-6">
              <a
                href="https://www.instagram.com/digitalcollegebr/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/digitalcollegebr"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img src={facebook} alt="Facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/eaicollegers"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img src={twitter} alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colunas dinâmicas usando o componente FooterInformation */}
          <FooterInformation title="Informação" informations={infoLinks} />
          <FooterInformation title="Categorias" informations={categoryLinks} />
          <div className="lg:col-span-2">
            <FooterInformation title="Contato" informations={contactLinks} />
          </div>
        </div>

        <hr className="border-white opacity-30 mt-6 md:mt-8" />

        <div className="text-center text-[11px] md:text-sm mt-4 md:mt-5.5">
          <p>© {new Date().getFullYear()} Digital Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

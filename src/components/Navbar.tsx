
import { Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../public/logondra.jpg";

const navigation = [
  { name: "Accueil", path: "/" },
  { name: "L'école", path: "/ecole" },
  { name: "Programmes", path: "/programmes" },
  { name: "Niveaux", path: "/niveaux" },
  { name: "Actualités", path: "/actualites" },
  { name: "Événements", path: "/evenements" },
  { name: "Galerie", path: "/galerie" },
  { name: "Frais de scolarité", path: "/frais-scolarite" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200 transition duration-300 group-hover:shadow-lg">
  <img
    src={logo}
    alt="Notre Dame du Rosaire"
    className="h-full w-full object-cover"
  />
</div>
          <div className="hidden sm:block">
            <p className="text-[17px] font-extrabold leading-tight tracking-tight text-blue-950">
              Notre Dame du Rosaire
            </p>

            <p className="mt-0.5 text-[11px] font-medium tracking-wide text-slate-500">
              ÉCOLE • COLLÈGE • LYCÉE
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-blue-950"
                    : "text-slate-600 hover:text-blue-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.name}</span>

                  <span
                    className={`absolute inset-0 -z-0 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 opacity-100"
                        : "bg-slate-50 opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-yellow-500 transition-all duration-200 ${
                      isActive ? "w-5" : "w-0 group-hover:w-3"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* CTA */}
          <Link
            to="/inscription"
            className="group ml-3 inline-flex items-center gap-1.5 rounded-xl bg-blue-950 px-5 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-md"
          >
            Inscription
            <ChevronRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-950 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={`overflow-hidden border-t border-slate-200/80 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-50 text-blue-950"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-950"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.name}</span>

                  <ChevronRight
                    size={17}
                    className={`transition-transform ${
                      isActive
                        ? "translate-x-0 text-yellow-500"
                        : "text-slate-300 group-hover:translate-x-1"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/inscription"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-blue-950 px-4 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-blue-900"
          >
            Demander une inscription
            <ChevronRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


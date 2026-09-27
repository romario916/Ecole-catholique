
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
  GraduationCap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Décoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-900/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Présentation */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-blue-900 text-white shadow-lg transition group-hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-950" />

                <GraduationCap
                  size={25}
                  strokeWidth={2.1}
                  className="relative z-10"
                />

                <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-yellow-400" />
              </div>

              <div>
                <p className="text-lg font-extrabold tracking-tight text-white">
                  École Excellence
                </p>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                  École • Collège • Lycée
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Un établissement scolaire engagé dans la réussite,
              l'épanouissement et l'accompagnement de chaque élève.
            </p>

            <Link
              to="/inscription"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-yellow-500/30 hover:bg-white/10"
            >
              Demander une inscription
              <ArrowUpRight
                size={16}
                className="text-yellow-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>

            <div className="mt-4 h-0.5 w-8 rounded-full bg-yellow-500" />

            <ul className="mt-6 space-y-3.5 text-sm">
              <li>
                <Link
                  to="/ecole"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Notre école
                </Link>
              </li>

              <li>
                <Link
                  to="/programmes"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Programmes
                </Link>
              </li>

              <li>
                <Link
                  to="/niveaux"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Niveaux
                </Link>
              </li>

              <li>
                <Link
                  to="/actualites"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Actualités
                </Link>
              </li>

              <li>
                <Link
                  to="/evenements"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Événements
                </Link>
              </li>

              <li>
                <Link
                  to="/galerie"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Galerie
                </Link>
              </li>

              <li>
                <Link
                  to="/frais-scolarite"
                  className="group flex items-center gap-2 transition hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-yellow-500 opacity-0 transition group-hover:opacity-100" />
                  Frais de scolarité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-4 h-0.5 w-8 rounded-full bg-yellow-500" />

            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-yellow-500">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Adresse
                  </p>
                  <p className="mt-1 leading-5 text-slate-300">
                    Antananarivo, Madagascar
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-yellow-500">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Téléphone
                  </p>

                  <a
                    href="tel:+261000000000"
                    className="mt-1 block text-slate-300 transition hover:text-white"
                  >
                    037 33 621 72
                  </a>
                </div>
              </li>

              <li className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-yellow-500">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:contact@ecoleexcellence.mg"
                    className="mt-1 block truncate text-slate-300 transition hover:text-white"
                  >
                    romarhenry08@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Horaires
            </h3>

            <div className="mt-4 h-0.5 w-8 rounded-full bg-yellow-500" />

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-500">
                  <Clock3 size={17} />
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-white">
                      Lundi – Vendredi
                    </p>

                    <p className="mt-1 text-slate-400">
                      07:30 – 17:00
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="font-semibold text-white">
                      Samedi
                    </p>

                    <p className="mt-1 text-slate-400">
                      08:00 – 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              Pour toute demande d'information, notre équipe reste à votre
              disposition pendant les horaires d'ouverture.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 École Excellence. Tous droits réservés.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            <span>
              Construire aujourd'hui les réussites de demain.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


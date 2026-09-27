import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Info,
  MessageCircle,
  WalletCards,
} from "lucide-react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { schoolInfo } from "../../data/school";
import { schoolFees } from "../../data/schoolFees";

const formatPrice = (price: number) => {
  if (price === 0) {
    return "À préciser";
  }

  return `${price.toLocaleString("fr-FR")} Ar`;
};

const SchoolFees = () => {
  const whatsappNumber = schoolInfo.socialLinks.whatsapp.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    `Bonjour ${schoolInfo.name},\n\nJe souhaite obtenir des informations concernant les frais de scolarité et les modalités d'inscription.`,
  );

  return (
    <main>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="bg-blue-950 py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto transform -translate-y-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-blue-950">
              <WalletCards size={30} className="transform -translate-y-1" />
            </div>

            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 shadow-lg shadow-black/20 backdrop-blur-xl">
              Informations financières
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Frais de scolarité
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              Retrouvez les principaux frais scolaires par niveau et préparez
              sereinement la rentrée de votre enfant.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionTitle
              eyebrow="Tarifs scolaires"
              title="Des informations claires pour les familles"
              description="Les tarifs sont présentés par niveau afin de faciliter la préparation de votre inscription ou réinscription."
              centered
            />
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                <GraduationCap size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-950">
                Inscription
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Frais appliqués lors de l'inscription d'un nouvel élève.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white">
                <CheckCircle2 size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-950">
                Réinscription
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Frais concernant les élèves déjà inscrits dans l'établissement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 text-blue-950">
                <WalletCards size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-950">
                Écolage mensuel
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Montant mensuel à prévoir selon le niveau de l'élève.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          TABLEAU DES TARIFS
      ====================================================== */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Tarification"
            title="Tarifs par niveau"
            description="Consultez les frais correspondant à chaque classe."
            centered
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* Version desktop */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-950 text-left text-sm text-white">
                    <th className="px-6 py-5 font-semibold">
                      Niveau
                    </th>

                    <th className="px-6 py-5 font-semibold">
                      Inscription
                    </th>

                    <th className="px-6 py-5 font-semibold">
                      Réinscription
                    </th>

                    <th className="px-6 py-5 font-semibold">
                      Écolage / mois
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {schoolFees.map((fee, index) => (
                    <tr
                      key={fee.level}
                      className={`border-t border-slate-200 ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50"
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-900">
                            <GraduationCap size={17} />
                          </div>

                          <span className="font-bold text-slate-900">
                            {fee.level}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-slate-700">
                        {formatPrice(fee.registration)}
                      </td>

                      <td className="px-6 py-5 text-sm font-medium text-slate-700">
                        {formatPrice(fee.reRegistration)}
                      </td>

                      <td className="px-6 py-5">
                        <span className="font-bold text-blue-900">
                          {formatPrice(fee.monthlyTuition)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Version mobile */}
            <div className="divide-y divide-slate-200 md:hidden">
              {schoolFees.map((fee) => (
                <div
                  key={fee.level}
                  className="p-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                      <GraduationCap size={20} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-950">
                      {fee.level}
                    </h3>
                  </div>

                  <div className="mt-5 grid grid-cols-1 gap-3">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        Inscription
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {formatPrice(fee.registration)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs font-medium text-slate-500">
                        Réinscription
                      </p>

                      <p className="mt-1 font-semibold text-slate-900">
                        {formatPrice(fee.reRegistration)}
                      </p>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-4">
                      <p className="text-xs font-medium text-blue-700">
                        Écolage / mois
                      </p>

                      <p className="mt-1 text-lg font-bold text-blue-900">
                        {formatPrice(fee.monthlyTuition)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          INFORMATIONS IMPORTANTES
      ====================================================== */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-200 bg-yellow-50 p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-blue-950">
                <Info size={22} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Informations importantes
                </h2>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li className="flex gap-2">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-yellow-600"
                    />
                    <span>
                      Les tarifs affichés sont donnés à titre informatif et
                      peuvent être actualisés par l'établissement.
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-yellow-600"
                    />
                    <span>
                      Certains frais complémentaires peuvent être appliqués
                      selon les activités ou services proposés.
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-yellow-600"
                    />
                    <span>
                      Pour connaître les conditions exactes de paiement,
                      veuillez contacter directement l'établissement.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CONTACT WHATSAPP
      ====================================================== */}
      <section className="bg-blue-950 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <MessageCircle
              size={42}
              className="mx-auto text-yellow-400"
            />

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Besoin de plus d'informations ?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Notre équipe peut vous renseigner sur les tarifs, les modalités
              d'inscription et les conditions de paiement.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-yellow-400"
            >
              <MessageCircle size={19} />
              Nous contacter sur WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SchoolFees;
import { useState } from "react";
import {
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  Send,
} from "lucide-react";


import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { schoolInfo } from "../../data/school";

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    level: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappNumber = schoolInfo.socialLinks.whatsapp
      .replace(/\D/g, "");

    const whatsappMessage = `
Bonjour ${schoolInfo.name},

Je souhaite obtenir des informations concernant une inscription.

*Nom du parent :*
${formData.parentName}

*Nom de l'élève :*
${formData.studentName}

*Niveau souhaité :*
${formData.level}

*Téléphone :*
${formData.phone}

*Email :*
${formData.email}

*Message :*
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <div>
      {/* ==================== HERO ==================== */}
     <section className="relative overflow-hidden bg-red-800 py-24 sm:py-28">
        {/* Image arrière-plan */}
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
          alt="Élèves dans un établissement scolaire"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r via-red-800/40 " />
        <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent" />

        {/* Décorations */}
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

        <Container>
          <div className="relative max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-red-400 shadow-lg shadow-black/20 backdrop-blur-xl">
            Inscription

            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Préparez la prochaine étape du
              <span className="block text-blue-600">
                parcours de votre enfant


              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">
              Retrouvez les principales étapes et informations nécessaires pour préparer une inscription dans notre établissement.

            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-sm shadow-red-500/30" />
          </div>
        </Container>
      </section>

      {/* ==================== PROCEDURE ==================== */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Comment s'inscrire ?"
            title="Une procédure simple en quelques étapes"
            description="Les informations ci-dessous sont génériques et peuvent être adaptées aux procédures réelles de l'établissement."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Prendre contact",
                text: "Contactez l'établissement pour obtenir les informations concernant les disponibilités et les conditions d'inscription.",
              },
              {
                number: "02",
                title: "Préparer le dossier",
                text: "Réunissez les documents nécessaires selon le niveau scolaire souhaité.",
              },
              {
                number: "03",
                title: "Finaliser l'inscription",
                text: "Échangez avec l'établissement afin de finaliser les différentes démarches.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                  {step.number}
                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ==================== DOCUMENTS ==================== */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Dossier"
                title="Documents nécessaires"
                description="La liste exacte doit être confirmée directement auprès de l'établissement."
              />

              <div className="mt-8 space-y-3">
                {[
                  "Pièce d'identité du parent ou responsable",
                  "Documents scolaires de l'élève",
                  "Photos d'identité",
                  "Documents administratifs demandés par l'établissement",
                  "Tout document complémentaire demandé lors de l'inscription",
                ].map((document) => (
                  <div
                    key={document}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-900"
                    />

                    <span className="text-sm leading-6 text-slate-600">
                      {document}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact rapide */}
            <div className="rounded-3xl bg-blue-900 p-8 text-white sm:p-10">
              <FileText size={34} className="text-yellow-400" />

              <h2 className="mt-6 text-2xl font-bold">
                Besoin de renseignements ?
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Si vous avez des questions concernant les niveaux disponibles,
                les documents ou les démarches, notre établissement reste à
                votre disposition.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`tel:${schoolInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/20"
                >
                  <Phone size={18} />
                  {schoolInfo.phone}
                </a>

                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-medium transition hover:bg-white/20"
                >
                  <Mail size={18} />
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== FORMULAIRE ==================== */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle
              eyebrow="Demande d'inscription"
              title="Parlez-nous de votre projet"
              description="Remplissez le formulaire. Les informations seront préparées automatiquement dans WhatsApp."
              centered
            />

            {submitted ? (
              <div className="mt-12 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2
                    size={30}
                    className="text-green-700"
                  />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-green-900">
                  Demande préparée
                </h2>

                <p className="mx-auto mt-3 max-w-xl leading-7 text-green-800">
                  WhatsApp a été ouvert avec votre demande d'inscription
                  préremplie.
                </p>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-green-700">
                  Vérifiez les informations puis appuyez sur « Envoyer » dans
                  WhatsApp.
                </p>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-lg border border-green-300 bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-100"
                  >
                    Faire une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Parent */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Nom du parent
                    </label>

                    <input
                      id="parentName"
                      name="parentName"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Élève */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Nom de l'élève
                    </label>

                    <input
                      id="studentName"
                      name="studentName"
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Nom complet de l'élève"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Niveau */}
                  <div>
                    <label
                      htmlFor="level"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Niveau souhaité
                    </label>

                    <select
                      id="level"
                      name="level"
                      required
                      value={formData.level}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Sélectionner un niveau</option>
                      <option value="Primaire">Primaire</option>
                      <option value="Collège">Collège</option>
                      <option value="Lycée">Lycée</option>
                    </select>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Téléphone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+261 ..."
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vous@exemple.com"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Bouton */}
                <div className="mt-8 border-t border-slate-200 pt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    <Send size={17} />
                    Envoyer la demande sur WhatsApp
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    Vos informations ne sont pas enregistrées sur ce site.
                    WhatsApp s'ouvrira avec votre demande préremplie.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Registration;
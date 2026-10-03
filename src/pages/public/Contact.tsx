import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { schoolInfo } from "../../data/school";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { latitude, longitude } = schoolInfo.location;

  const phoneNumber = schoolInfo.phone.replace(/\s/g, "");

  const whatsappNumber = schoolInfo.socialLinks.whatsapp.replace(/\D/g, "");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `
Bonjour ${schoolInfo.name},

Je souhaite contacter votre établissement.

*Nom complet :*
${formData.name}

*Email :*
${formData.email}

*Téléphone :*
${formData.phone || "Non renseigné"}

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
          src="contacte.jfif"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 shadow-lg shadow-black/20 backdrop-blur-xl">
              Contact


            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
             Nous sommes
              <span className="block text-blue-600">
             
             à votre écoute

              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">

Quelques moments de la vie scolaire, des activités et des événements de l'établissement.

            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-sm shadow-red-500/30" />
          </div>
        </Container>
      </section>
      {/* ==================== COORDONNÉES ==================== */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Nos coordonnées"
            title="Comment nous contacter ?"
            description="Retrouvez les principales informations pour joindre facilement notre établissement."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Adresse */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <MapPin size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">Adresse</h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {schoolInfo.address}
              </p>
            </div>

            {/* Téléphone */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <Phone size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">Téléphone</h2>

              <a
                href={`tel:${phoneNumber}`}
                className="mt-2 block text-sm leading-6 text-blue-900 hover:underline"
              >
                {schoolInfo.phone}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <Mail size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">Email</h2>

              <a
                href={`mailto:${schoolInfo.email}`}
                className="mt-2 block break-all text-sm leading-6 text-blue-900 hover:underline"
              >
                {schoolInfo.email}
              </a>
            </div>

            {/* Horaires */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                <Clock3 size={23} />
              </div>

              <h2 className="mt-5 font-bold text-slate-900">Horaires</h2>

              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {schoolInfo.openingHours.map((item) => (
                  <p key={item.days}>
                    <span className="font-medium text-slate-700">
                      {item.days} :
                    </span>{" "}
                    {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== ACTIONS RAPIDES ==================== */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Contact direct
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Contactez-nous facilement
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Choisissez le moyen de contact qui vous convient le mieux.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Appeler */}
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Phone size={18} />
                Appeler
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              {/* Email */}
              <a
                href={`mailto:${schoolInfo.email}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <Mail size={18} />
                Email
              </a>

              {/* Itinéraire */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-4 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <Navigation size={18} />
                Itinéraire
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== CARTE + FORMULAIRE ==================== */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Carte */}
            <div>
              <SectionTitle
                eyebrow="Nous trouver"
                title="Notre établissement"
                description="Retrouvez précisément l'emplacement de notre établissement à Antohomadinika."
              />

              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
                <iframe
                  title="Localisation de l'École Notre-Dame du Rosaire Antohomadinika"
                  src={`https://maps.app.goo.gl/MpehwH4tMReYoHfM9?g_st=ic`}
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-blue-900"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Adresse
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>

              {/* Bouton Google Maps */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                <Navigation size={18} />
                Ouvrir l'itinéraire dans Google Maps
              </a>
            </div>

            {/* Formulaire */}
            <div>
              <SectionTitle
                eyebrow="Message"
                title="Envoyez-nous un message"
                description="Votre message sera préparé automatiquement pour WhatsApp."
              />

              {submitted ? (
                <div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle2 size={30} className="text-green-700" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-green-900">
                    WhatsApp a été ouvert
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-green-800">
                    Votre message a été préparé avec les informations
                    renseignées. Vérifiez le message dans WhatsApp puis
                    appuyez sur « Envoyer ».
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg border border-green-300 bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:bg-green-100"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <div className="space-y-5">
                    {/* Nom */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Nom complet
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    {/* Email */}
                    <div>
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
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+261 ..."
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-700"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    {/* Bouton */}
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      <Send size={17} />
                      Envoyer sur WhatsApp
                    </button>
                  </div>

                  <p className="mt-5 text-center text-xs leading-5 text-slate-500">
                    Après validation, WhatsApp s'ouvrira avec votre message
                    prérempli. Vous devrez confirmer l'envoi.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ==================== RÉSEAUX SOCIAUX ==================== */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Réseaux sociaux
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Retrouvez-nous en ligne
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Suivez les actualités et les activités de notre établissement.
            </p>

            <div className="mt-7 flex justify-center gap-3">
              

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
              >
                <MessageCircle size={19} />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
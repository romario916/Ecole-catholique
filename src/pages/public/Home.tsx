import { useEffect, useState } from "react";
import { videoTestimonials } from "../../data/videoTestimonials";

import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  MapPin,
  Quote,
  Trophy,
  Users,
} from "lucide-react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { schoolInfo } from "../../data/school";
import { news } from "../../data/news";
import { events } from "../../data/events";
import { gallery } from "../../data/gallery";

const heroSlides = [
  {
    image:
      "acail1.jpg",
    alt: "Élèves dans un environnement scolaire",
  },
  {
    image:
      "aceul2.jpg",
    alt: "Élèves dans une salle de classe",
  },
  {
    image:
      "acail3.jpg",
    alt: "Vie scolaire et apprentissage",
  },
  {
    image:
      "acail4.jpg",
    alt: "Élèves participant à une activité scolaire",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const latestNews = news.slice(0, 3);
  const upcomingEvents = events.slice(0, 3);
  const galleryPreview = gallery.slice(0, 6);

  // Changement automatique toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) =>
        previous === heroSlides.length - 1 ? 0 : previous + 1,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? heroSlides.length - 1 : previous - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === heroSlides.length - 1 ? 0 : previous + 1,
    );
  };

  return (
    <main className="overflow-hidden">
      {/* =====================================================
          HERO — SLIDER PROFESSIONNEL
      ====================================================== */}
      <section className="relative min-h-[720px] overflow-hidden bg-blue-950">
        {/* Images */}
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : "low"}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ease-in-out ${
              currentSlide === index
                ? "scale-105 opacity-100"
                : "scale-100 opacity-0"
            }`}
          />
        ))}

        {/* Overlay principal */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950  to-blue-950/45" />

        {/* Overlay inférieur */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-blue-950/70 to-transparent" />

        {/* Décorations */}
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <Container>
          <div className="relative flex min-h-[720px] items-center py-24">
            <div className="max-w-3xl text-white">
              {/* Badge */}
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <GraduationCap size={18} className="text-red-500" />

                <span>De l'école primaire à la Terminale</span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
                Construire aujourd'hui
                <span className="block text-red-500">
                  les réussites de demain.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {schoolInfo.description}
              </p>

              {/* Boutons */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/ecole"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
                >
                  Découvrir notre école

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="/inscription"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-xl"
                >
                  Demander une inscription

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>

              {/* Mini informations */}
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/15 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">3</p>

                  <p className="text-xs text-slate-400">
                    Cycles d'enseignement
                  </p>
                </div>

                <div className="h-10 w-px bg-white/15" />

                <div>
                  <p className="text-2xl font-bold text-white">CP → T</p>

                  <p className="text-xs text-slate-400">
                    Parcours scolaire complet
                  </p>
                </div>

                <div className="h-10 w-px bg-white/15" />

                <div>
                  <p className="text-2xl font-bold text-white">2026</p>

                  <p className="text-xs text-slate-400">
                    Année scolaire
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Bouton précédent */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Image précédente"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/15 sm:flex"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Bouton suivant */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Image suivante"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/20 p-3 text-white backdrop-blur-md transition duration-300 hover:border-white/40 hover:bg-white/15 sm:flex"
        >
          <ArrowRight size={20} />
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Afficher la photo ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-9 bg-red-500"
                  : "w-2.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Numéro du slide */}
        <div className="absolute bottom-7 right-6 hidden items-center gap-2 text-xs font-medium text-white/70 sm:flex">
          <span className="text-sm font-bold text-white">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <span>/</span>

          <span>{String(heroSlides.length).padStart(2, "0")}</span>
        </div>
      </section>




      {/* CHIFFRES / CYCLES */}
      <section className="relative bg-white py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Primaire",
                text: "Une base solide pour les premières années scolaires.",
              },
              {
                icon: BookOpen,
                title: "Collège",
                text: "Accompagner chaque élève dans son parcours.",
              },
              {
                icon: Trophy,
                title: "Lycée",
                text: "Préparer les élèves aux études supérieures.",
              },
              {
                icon: Users,
                title: "Accompagnement",
                text: "Un suivi pédagogique adapté aux élèves.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-blue-50 transition group-hover:bg-red-50" />

                  <div
                    className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${
                      index === 3
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-900"
                    }`}
                  >
                    <Icon size={24} />
                  </div>

                  <p className="relative mt-5 text-2xl font-bold text-slate-950">
                    {item.title}
                  </p>

                  <p className="relative mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>



{/* Message important */}
<div className="mx-auto mt-10 max-w-2xl text-center">
  <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-black/90 via-zinc-950/90 to-purple-950/70 px-6 py-5 shadow-2xl shadow-purple-900/40 ring-1 ring-red-500/20 backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-gradient-to-r before:from-red-500 before:via-fuchsia-600 before:to-purple-600 after:pointer-events-none after:absolute after:left-1/2 after:-top-14 after:h-36 after:w-36 after:-translate-x-1/2 after:rounded-full after:bg-purple-600/30 after:blur-3xl">
    <p className="bg-gradient-to-r from-red-400 via-fuchsia-400 to-purple-400 bg-clip-text text-[11px] font-semibold uppercase tracking-[0.25em] text-transparent">
      Message important
    </p>

    <p className="relative mt-2 text-sm font-medium leading-7 text-zinc-200 sm:text-base">
      Chers parents et élèves, nous vous invitons à rester attentifs
      aux informations communiquées par l'établissement concernant
      la scolarité, les inscriptions, les événements et la vie scolaire.
    </p>
  </div>
</div>



      {/* NOTRE ÉTABLISSEMENT */}
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-3xl bg-red-500/20" />

              <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
                <img
                  src="etablicement.jpg"
                  alt="Vie scolaire de l'établissement"
                  loading="lazy"
                  className="h-[460px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-blue-950/85 px-5 py-4 text-white backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-red-500">
                    Notre engagement
                  </p>

                  <p className="mt-1 font-bold">
                    La réussite de chaque élève
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Notre établissement"
                title="Un environnement pensé pour la réussite"
                description="Nous accompagnons les élèves dans leur parcours scolaire avec une attention particulière portée à la qualité de l'enseignement, au suivi et à l'épanouissement."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Un enseignement adapté aux différents niveaux scolaires",
                  "Un accompagnement pédagogique attentif",
                  "Un environnement favorable aux apprentissages",
                  "Des valeurs basées sur le respect et la responsabilité",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-start gap-3 rounded-xl p-2 transition hover:bg-white"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <p className="text-sm leading-6 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/ecole"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
              >
                En savoir plus

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* RÉSULTATS AUX EXAMENS */}
      <section className="relative overflow-hidden bg-slate-50 pb-24">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

        <Container>
          <div className="relative">
            <SectionTitle
              eyebrow="Résultats scolaires"
              title="Nos résultats aux examens"
              description="Les résultats obtenus par nos élèves aux principaux examens nationaux."
              centered
            />

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {schoolInfo.examResults.map((result) => {
                const Icon =
                  result.exam === "CEPE"
                    ? BookOpen
                    : result.exam === "BEPC"
                      ? GraduationCap
                      : Trophy;

                return (
                  <div
                    key={result.exam}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-red-500/10 transition duration-500 group-hover:scale-150" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-md">
                          <Icon size={27} />
                        </div>

                        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">
                          {result.year}
                        </span>
                      </div>

                      <div className="mt-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                          Examen
                        </p>

                        <h3 className="mt-1 text-3xl font-extrabold text-slate-950">
                          {result.exam}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {result.description}
                        </p>
                      </div>

                      <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
                              Taux de réussite
                            </p>

                            <p className="mt-1 text-4xl font-extrabold text-blue-900">
                              {result.successRate}%
                            </p>
                          </div>

                          <Award size={30} className="text-red-600" />
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-blue-100">
                          <div
                            className="h-full rounded-full bg-red-600 transition-all duration-1000"
                            style={{
                              width: `${Math.min(
                                Math.max(result.successRate, 0),
                                100,
                              )}%`,
                            }}
                          />
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs text-slate-500">
                            Candidats
                          </p>

                          <p className="mt-1 text-xl font-bold text-slate-900">
                            {result.candidates}
                          </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-xs text-slate-500">
                            Admis
                          </p>

                          <p className="mt-1 text-xl font-bold text-slate-900">
                            {result.admitted}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600 shadow-sm">
              <Award
                size={20}
                className="mt-0.5 shrink-0 text-red-600"
              />

              <p className="leading-6">
                Les statistiques présentées correspondent aux résultats de
                l'établissement pour l'année indiquée. Les données peuvent
                être mises à jour chaque année.
              </p>
            </div>
          </div>
        </Container>
      </section>


      
{/* =====================================================
    TÉMOIGNAGES VIDÉO
====================================================== */}
<section className="bg-white py-24">
  <Container>
    <SectionTitle
      eyebrow="Videos "
      title="La video à nos élèves"
      description="Découvrez quelques  vidéo de nos élèves sur leur expérience au sein de notre établissement."
      centered
    />

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {videoTestimonials.map((video) => (
        <a
          key={video.id}
          href={video.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={video.image}
              alt={video.name}
              loading="lazy"
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/40 " />

            {/* Bouton Play */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className=" hover:bg-blue-500 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition duration-300 group-hover:scale-110 group-hover:bg-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-7 w-7"
                >
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                </svg>
              </div>
            </div>

            {/* Facebook */}
            <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-900 shadow-md">
              Facebook
            </div>
          </div>

          {/* Contenu */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-slate-950">
              {video.name}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {video.description}
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-red-600 transition group-hover:text-red-700">
              Voir la vidéo
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="mt-10 text-center">
      <p className="text-sm text-slate-500">
        Cliquez sur une vidéo pour découvrir le témoignage complet sur notre
        page Facebook.
      </p>
    </div>
  </Container>
</section>



      {/* NIVEAUX */}
      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            eyebrow="Niveaux d'enseignement"
            title="Un parcours scolaire complet"
            description="De l'école primaire jusqu'à la Terminale, chaque étape du parcours bénéficie d'un accompagnement adapté."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Primaire",
                description: "CP, CE1, CE2, CM1 et CM2.",
                icon: BookOpen,
                color: "blue",
              },
              {
                title: "Collège",
                description: "6e, 5e, 4e et 3e.",
                icon: GraduationCap,
                color: "blue",
              },
              {
                title: "Lycée",
                description: "Seconde, Première et Terminale.",
                icon: Trophy,
                color: "red",
              },
            ].map((level) => {
              const Icon = level.icon;

              return (
                <div
                  key={level.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-slate-50 transition group-hover:scale-150" />

                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${
                      level.color === "red"
                        ? "bg-red-600 text-white"
                        : "bg-blue-900 text-white"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="relative mt-6 text-2xl font-bold text-slate-950">
                    {level.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-6 text-slate-600">
                    {level.description}
                  </p>

                  <a
                    href="/niveaux"
                    className="group/link relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-900"
                  >
                    Découvrir

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ACTUALITÉS */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionTitle
            eyebrow="Actualités"
            title="La vie de notre établissement"
            description="Découvrez les dernières nouvelles et activités de notre communauté scolaire."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {latestNews.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-900 shadow-sm">
                    {item.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {item.content}
                  </p>

                  <a
                    href={`/actualites/${item.id}`}
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900"
                  >
                    Lire la suite

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9">
            <a
              href="/actualites"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
            >
              Toutes les actualités

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Container>
      </section>

      {/* ÉVÉNEMENTS */}
      <section className="bg-white py-24">
        <Container>
          <SectionTitle
            eyebrow="Agenda scolaire"
            title="Prochains événements"
            description="Les moments importants de la vie de notre établissement."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                    <CalendarDays size={23} />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {event.date}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {event.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {event.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={17} className="text-red-600" />
                  {event.location}
                </div>
              </article>
            ))}
          </div>

          <a
            href="/evenements"
            className="mt-9 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-slate-50"
          >
            Voir tous les événements

            <ArrowRight size={17} />
          </a>
        </Container>
      </section>

      {/* GALERIE */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionTitle
            eyebrow="Galerie"
            title="Découvrez notre vie scolaire"
            description="Quelques moments de la vie quotidienne, des activités et des événements de l'établissement."
            centered
          />

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryPreview.map((item) => (
              <a
                key={item.id}
                href="/galerie"
                className="group relative overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-64"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/10 to-transparent opacity-70 transition group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 text-white transition duration-300 group-hover:translate-y-0">
                  <p className="font-semibold">{item.title}</p>

                  <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-300">
                    Voir la galerie

                    <ArrowRight size={13} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-9 text-center">
            <a
              href="/galerie"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg"
            >
              Voir toute la galerie

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Container>
      </section>

      {/* DISCIPLINE & VIE SCOLAIRE */}
      <section className="bg-white py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-blue-950 shadow-xl">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-2xl" />

            <div className="grid lg:grid-cols-5">
              <div className="relative px-7 py-12 sm:px-10 lg:col-span-3 lg:px-12 lg:py-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-500">
                  <CheckCircle2 size={17} />
                  Discipline & Vie scolaire
                </div>

                <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Le respect des règles, une responsabilité de tous
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                  La qualité de la vie scolaire repose sur le respect des
                  règles, des personnes et de l'environnement scolaire.
                  Chaque élève et chaque parent contribue à maintenir un
                  cadre favorable aux apprentissages et à l'épanouissement
                  de tous.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Respecter les enseignants, le personnel et les autres élèves.",
                    "Respecter les locaux, le matériel et les espaces de l'établissement.",
                    "Être ponctuel, assidu et responsable dans son travail scolaire.",
                    "Adopter un comportement respectueux et responsable au sein de l'école.",
                    "Les parents sont invités à accompagner leur enfant dans le respect des règles scolaires.",
                  ].map((rule) => (
                    <div
                      key={rule}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={19}
                        className="mt-1 shrink-0 text-red-500"
                      />

                      <p className="text-sm leading-6 text-slate-200">
                        {rule}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative bg-blue-900 px-7 py-12 sm:px-10 lg:col-span-2 lg:px-10 lg:py-14">
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg">
                    <BookOpen size={27} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Carnet de correspondance
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Élèves et parents sont invités à lire attentivement le
                    carnet de correspondance et à prendre connaissance des
                    informations qui y sont communiquées.
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                    <p className="text-sm font-semibold leading-6 text-white">
                      Les règles de discipline et les informations
                      importantes de l'établissement sont présentées dans
                      le carnet de correspondance.
                    </p>
                  </div>

                  <p className="mt-5 text-xs leading-6 text-slate-400">
                    Nous encourageons les familles à consulter régulièrement
                    le carnet afin de rester informées de la vie scolaire et
                    des obligations de chacun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-slate-50 py-24">
        <Container>
          <SectionTitle
            eyebrow="Témoignages"
            title="Ce que notre communauté apprécie"
            description="Des témoignages qui mettent en avant l'accompagnement et la vie scolaire."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                text: "Une équipe attentive et un environnement qui favorise l'apprentissage.",
                name: "Parent d'élève",
              },
              {
                text: "L'accompagnement pédagogique permet aux élèves de progresser avec confiance.",
                name: "Parent d'élève",
              },
              {
                text: "Une communauté scolaire dynamique et un cadre propice à la réussite.",
                name: "Membre de la communauté",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.text}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                  <Quote size={24} className="text-red-600" />
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-blue-900" />

                  <p className="text-sm font-bold text-blue-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA INSCRIPTION */}
      <section className="relative overflow-hidden bg-blue-950 py-24">
        <div className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />

        <Container>
          <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-500">
                Inscription
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Préparons ensemble la réussite de votre enfant.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                Découvrez notre procédure d'inscription et contactez
                directement notre établissement pour obtenir davantage
                d'informations.
              </p>
            </div>

            <a
              href="/inscription"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-xl"
            >
              Demander une inscription

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Home;
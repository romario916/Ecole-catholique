import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Maximize2,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { gallery } from "../../data/gallery";
import type { GalleryCategory } from "../../types/gallery";
import { staff } from "../../data/staff";

const categories: GalleryCategory[] = [
  "Tous",
  "Vie scolaire",
  "Classes",
  "Sport",
  "Culture",
  "Événements",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("Tous");

  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null,
  );

  const filteredGallery =
    activeCategory === "Tous"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const selectedItem =
    selectedIndex !== null ? filteredGallery[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null || filteredGallery.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === 0
        ? filteredGallery.length - 1
        : selectedIndex - 1,
    );
  };

  const showNext = () => {
    if (selectedIndex === null || filteredGallery.length === 0) {
      return;
    }

    setSelectedIndex(
      selectedIndex === filteredGallery.length - 1
        ? 0
        : selectedIndex + 1,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, filteredGallery.length]);

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-red-800 py-24 sm:py-28">
        {/* Image arrière-plan */}
        <img
          src="galerry.jpg"
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
              Galerie


            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
             Découvrez la vie de notre
              <span className="block text-blue-600">
                établissement


              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">

Quelques moments de la vie scolaire, des activités et des événements de l'établissement.

            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-sm shadow-red-500/30" />
          </div>
        </Container>
      </section>


          
    
{/* Équipe de direction et équipe pédagogique */}
<section className="bg-white py-20">
  <Container>
    <SectionTitle
      eyebrow="Notre équipe"
      title="Une équipe engagée au service des élèves"
      description="Découvrez les personnes qui accompagnent les élèves au quotidien et participent à la vie de notre établissement."
      centered
    />

    {/* Directeur */}
    <div className="mx-auto mt-14 max-w-4xl">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
        {/* Décoration */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-900/5" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-red-800/5" />

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center">
          {/* Photo Directeur */}
          <div className="shrink-0">
            <div className="relative">
              <div className="h-52 w-52 overflow-hidden rounded-full border-8 border-white bg-slate-100 shadow-xl ring-2 ring-blue-900/10 sm:h-60 sm:w-60">
                <img
                  src={staff[0].image}
                  alt={`${staff[0].firstName} ${staff[0].lastName}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              {/* Badge */}
              <div className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-red-800 text-white shadow-lg ring-4 ring-white">
                <GraduationCap size={22} />
              </div>
            </div>
          </div>

          {/* Informations Directeur */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center rounded-full bg-blue-900/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-900">
              Direction
            </div>

            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-red-700">
              Directeur de l'établissement
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              {staff[0].firstName} {staff[0].lastName}
            </h3>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600 md:mx-0">
              La direction veille au bon fonctionnement de l'établissement
              et accompagne les différents projets pédagogiques et scolaires.
            </p>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 md:justify-start">
              <UserRound size={17} className="text-blue-900" />
              <span>{staff[0].subject}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Équipe pédagogique */}
    <div className="mt-20">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
          Équipe pédagogique
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
          Nos enseignants
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Une équipe pédagogique qui accompagne les élèves dans leurs
          apprentissages et leur progression.
        </p>
      </div>

      {/* Cartes enseignants */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {staff
          .filter((member) => member.role === "Enseignant")
          .map((teacher) => (
            <article
              key={teacher.id}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Photo ronde */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg ring-2 ring-blue-900/10 transition duration-300 group-hover:ring-red-700/20 sm:h-44 sm:w-44">
                    <img
                      src={teacher.image}
                      alt={`${teacher.firstName} ${teacher.lastName}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Petit indicateur */}
                  <div className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-white shadow-md ring-4 ring-white">
                    <GraduationCap size={16} />
                  </div>
                </div>
              </div>

              {/* Informations */}
              <div className="mt-6">
                <h4 className="text-lg font-bold text-slate-900">
                  {teacher.firstName} {teacher.lastName}
                </h4>

                <p className="mt-2 text-sm font-semibold text-blue-900">
                  {teacher.subject}
                </p>

                <div className="mx-auto mt-4 h-px w-12 bg-red-700/70" />

                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
                  <UserRound size={14} />
                  <span>Équipe pédagogique</span>
                </div>
              </div>
            </article>
          ))}
      </div>
    </div>
  </Container>
</section>



      {/* Gallery */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Nos moments"
            title="Galerie photos"
            description="Les images présentées ici sont des exemples et peuvent être remplacées par les photos réelles de l'établissement."
            centered
          />

          {/* Filtres */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Images */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGallery.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl bg-slate-100 text-left"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 flex translate-y-4 items-end justify-between p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div>
                    <p className="font-semibold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-200">
                      {item.category}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                    <Maximize2 size={17} />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="py-16 text-center text-slate-500">
              Aucune image disponible dans cette catégorie.
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Image précédente"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft size={25} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[80vh] max-w-full rounded-xl object-contain"
            />

            <div className="mt-4 text-center">
              <p className="font-semibold text-white">
                {selectedItem.title}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {selectedItem.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Image suivante"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
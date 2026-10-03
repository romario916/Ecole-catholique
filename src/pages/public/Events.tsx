import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { events } from "../../data/events";

const Events = () => {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <div>
      {/* Header */}
      <section className="relative overflow-hidden bg-red-800 py-24 sm:py-28">
        {/* Image arrière-plan */}
        <img
          src="evenement.webp"
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
              Agenda scolaire



            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
             Les prochains événements
              <span className="block text-blue-600">
            Notre Dame du Rosaire


              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">
            Retrouvez les principaux rendez-vous, activités et moments importants de la vie de notre établissement.




            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-sm shadow-red-500/30" />
          </div>
        </Container>
      </section>
      {/* Events */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Calendrier"
            title="Les événements à venir"
            description="Une sélection des activités et rendez-vous prévus dans l'établissement."
          />

          <div className="mt-12 space-y-8">
            {sortedEvents.map((event) => {
              const eventDate = new Date(event.date);

              return (
                <article
                  key={event.id}
                  className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg md:grid-cols-[280px_1fr]"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden md:h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 shadow-sm">
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-900">
                        <CalendarDays size={16} />

                        <time dateTime={event.date}>
                          {eventDate.toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock3 size={16} />
                        {event.time}
                      </div>
                    </div>

                    <h2 className="mt-5 text-2xl font-bold text-slate-900">
                      {event.title}
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
                      <MapPin size={17} className="text-blue-900" />
                      {event.location}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Information */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="grid gap-8 rounded-3xl bg-blue-900 p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                Informations
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Une question concernant un événement ?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                Pour obtenir des informations complémentaires concernant les
                horaires, les inscriptions ou les modalités de participation,
                contactez directement l'établissement.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-yellow-400"
            >
              Nous contacter
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Events;
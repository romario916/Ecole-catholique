import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { news } from "../../data/news";

const News = () => {
  const sortedNews = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Actualités
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Les dernières nouvelles de notre établissement
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Retrouvez les informations, projets et moments importants de la
              vie scolaire.
            </p>
          </div>
        </Container>
      </section>

      {/* Actualités */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Vie de l'école"
            title="Nos dernières actualités"
            description="Découvrez les événements et initiatives qui rythment la vie de l'établissement."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedNews.map((article) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-900 shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays size={16} />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                    {article.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/actualites/${article.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-blue-700"
                  >
                    Lire la suite
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <Container>
          <div className="rounded-3xl bg-blue-900 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Découvrez également nos événements
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Consultez les prochaines activités et rendez-vous de
              l'établissement.
            </p>

            <Link
              to="/evenements"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-yellow-400"
            >
              Voir les événements
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default News;
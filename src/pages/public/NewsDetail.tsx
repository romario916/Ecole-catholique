import { ArrowLeft, CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Container from "../../components/Container";
import { news } from "../../data/news";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();

  const article = news.find((item) => item.id === id);

  if (!article) {
    return (
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold text-slate-900">
              Actualité introuvable
            </h1>

            <p className="mt-4 text-slate-600">
              L'actualité que vous recherchez n'existe pas ou n'est plus
              disponible.
            </p>

            <Link
              to="/actualites"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              <ArrowLeft size={17} />
              Retour aux actualités
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <article>
      {/* Image */}
      <div className="relative h-[360px] overflow-hidden sm:h-[460px]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/50" />

        <div className="absolute inset-0 flex items-end">
          <Container className="pb-12">
            <div className="max-w-4xl text-white">
              <span className="rounded-full bg-yellow-500 px-3 py-1.5 text-xs font-bold text-blue-950">
                {article.category}
              </span>

              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                {article.title}
              </h1>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-200">
                <CalendarDays size={17} />

                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Contenu */}
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-8 text-slate-600">
              {article.excerpt}
            </p>

            <div className="my-8 h-px bg-slate-200" />

            <p className="leading-8 text-slate-700">
              {article.content}
            </p>

            <Link
              to="/actualites"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:text-blue-700"
            >
              <ArrowLeft size={17} />
              Retour aux actualités
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
};

export default NewsDetail;
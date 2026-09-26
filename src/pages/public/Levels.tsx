import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  School,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { levels } from "../../data/levels";

const levelIcons = {
  primaire: School,
  college: BookOpen,
  lycee: GraduationCap,
};

const Levels = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Niveaux d'enseignement
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Un parcours scolaire de la primaire à la Terminale
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Découvrez les différents cycles d'enseignement proposés par
              notre établissement et les classes correspondantes.
            </p>
          </div>
        </Container>
      </section>

      {/* Cycles */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Notre parcours"
            title="Trois cycles d'enseignement"
            description="Une organisation permettant d'accompagner progressivement les élèves tout au long de leur parcours scolaire."
            centered
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {levels.map((level) => {
              const Icon =
                levelIcons[level.id as keyof typeof levelIcons] ?? School;

              return (
                <article
                  key={level.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={28} className="text-blue-900" />
                    </div>

                    <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                      {level.classes.length} niveaux
                    </span>
                  </div>

                  <h2 className="mt-7 text-2xl font-bold text-slate-900">
                    {level.name}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {level.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <p className="text-sm font-semibold text-slate-900">
                      Classes proposées
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {level.classes.map((className) => (
                        <span
                          key={className}
                          className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                        >
                          {className}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Parcours */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Un parcours continu"
                title="Accompagner l'élève à chaque étape"
                description="Chaque cycle correspond à une nouvelle étape du développement scolaire et personnel de l'élève."
              />

              <div className="mt-8 space-y-5">
                {[
                  {
                    number: "01",
                    title: "Primaire",
                    text: "Construire les fondamentaux, développer la curiosité et donner le goût d'apprendre.",
                  },
                  {
                    number: "02",
                    title: "Collège",
                    text: "Consolider les connaissances et développer progressivement l'autonomie.",
                  },
                  {
                    number: "03",
                    title: "Lycée",
                    text: "Approfondir les apprentissages et préparer les élèves aux prochaines étapes de leur parcours.",
                  },
                ].map((item) => (
                  <div key={item.number} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-sm font-bold text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85"
                alt="Élèves dans un environnement scolaire"
                loading="lazy"
                className="h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                Préparer l'avenir
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Vous souhaitez inscrire votre enfant ?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Consultez les informations relatives à l'inscription et
                contactez notre établissement pour toute question.
              </p>
            </div>

            <Link
              to="/inscription"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-yellow-400"
            >
              Demander une inscription
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Levels;
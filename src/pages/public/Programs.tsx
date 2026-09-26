import {
  Activity,
  BookOpen,
  Calculator,
  Globe2,
  Languages,
  Laptop,
  Palette,
  Scale,
  FlaskConical,
} from "lucide-react";

import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { programs } from "../../data/programs";

const programIcons = {
  francais: Languages,
  mathematiques: Calculator,
  sciences: FlaskConical,
  "histoire-geographie": Globe2,
  anglais: Languages,
  informatique: Laptop,
  eps: Activity,
  "education-civique": Scale,
  arts: Palette,
};

const Programs = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Programmes scolaires
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Des apprentissages pour développer les compétences
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Découvrez les principaux domaines d'apprentissage proposés dans
              notre établissement, de l'école primaire au lycée.
            </p>
          </div>
        </Container>
      </section>

      {/* Matières */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Domaines d'apprentissage"
            title="Les principales matières enseignées"
            description="Cette présentation est volontairement générale et peut être adaptée aux programmes réellement proposés par l'établissement."
            centered
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon =
                programIcons[
                  program.id as keyof typeof programIcons
                ] ?? BookOpen;

              return (
                <article
                  key={program.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-900">
                    <Icon
                      size={23}
                      className="text-blue-900 transition group-hover:text-white"
                    />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-900">
                    {program.name}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {program.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Approche pédagogique */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Notre approche"
                title="Développer les connaissances et l'autonomie"
                description="L'apprentissage ne se limite pas à l'acquisition de connaissances."
              />

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Comprendre
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Acquérir des connaissances et comprendre les notions
                      fondamentales dans les différents domaines.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                    <Calculator size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Réfléchir
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Développer le raisonnement, la capacité d'analyse et la
                      résolution de problèmes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-900 text-white">
                    <Languages size={19} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Communiquer
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Développer l'expression orale, écrite et la capacité à
                      travailler avec les autres.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85"
                alt="Apprentissage et sciences à l'école"
                loading="lazy"
                className="h-[430px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Information */}
      <section className="bg-white py-20">
        <Container>
          <div className="rounded-3xl bg-blue-900 px-6 py-12 text-center sm:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Un programme adapté au parcours de chaque élève
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Les contenus présentés sur ce site sont génériques. Ils peuvent
              être personnalisés selon les programmes, matières et options
              réellement proposés par l'établissement.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Programs;
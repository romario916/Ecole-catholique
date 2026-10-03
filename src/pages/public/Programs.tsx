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
      <section className="relative overflow-hidden bg-red-800 py-24 sm:py-28">
        {/* Image arrière-plan */}
        <img
          src="program.webp"
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
              Programmes scolaires 

            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Des apprentissages pour
              <span className="block text-blue-600">
                développer les compétences


              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-md sm:text-lg">
              Découvrez les principaux domaines d'apprentissage proposés dans notre établissement, de l'école primaire au lycée. 

            </p>

            <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-red-700 shadow-sm shadow-red-500/30" />
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
                src="programme1.webp"
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
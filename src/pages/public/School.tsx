import {
  Award,
  BookOpen,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import Button from "../../components/Button";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const School = () => {
  return (
    <div>
      {/* En-tête */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
              Notre école
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Un cadre d'apprentissage pensé pour chaque élève
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Notre établissement accompagne les élèves de l'école primaire
              jusqu'à la classe de Terminale dans un environnement propice
              aux apprentissages, à l'autonomie et à l'épanouissement.
            </p>
          </div>
        </Container>
      </section>

      {/* Présentation */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                alt="Élèves dans une salle de classe"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>

            <div>
              <SectionTitle
                eyebrow="Présentation"
                title="Une école qui accompagne chaque étape du parcours scolaire"
                description="De la découverte des premiers apprentissages à la préparation aux études supérieures, notre établissement cherche à offrir un accompagnement adapté aux différentes étapes de la scolarité."
              />

              <p className="mt-5 leading-7 text-slate-600">
                Notre approche repose sur un environnement scolaire structuré,
                une attention portée aux élèves et une volonté de développer
                progressivement leurs connaissances, leur autonomie et leur
                sens des responsabilités.
              </p>

              <div className="mt-7">
                <Button to="/programmes">
                  Découvrir nos programmes
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Histoire */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Notre histoire"
                title="Une vision construite autour de l'éducation"
              />

              <div className="mt-6 space-y-4 leading-7 text-slate-600">
                <p>
                  L'établissement a été pensé autour d'une ambition simple :
                  proposer un cadre scolaire dans lequel les élèves peuvent
                  apprendre, progresser et préparer leur avenir.
                </p>

                <p>
                  Au fil du parcours scolaire, l'accompagnement évolue afin
                  de répondre aux besoins des différentes étapes, de
                  l'enseignement primaire au lycée.
                </p>

                <p>
                  Cette présentation est volontairement générique et pourra
                  être remplacée par l'histoire réelle de l'établissement.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-blue-900 p-8 text-white sm:p-10">
              <BookOpen size={34} className="text-yellow-400" />

              <h2 className="mt-6 text-2xl font-bold">
                Une école tournée vers l'avenir
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Préparer les élèves aux différentes étapes de leur parcours
                scolaire tout en développant leur curiosité, leur autonomie
                et leur capacité à construire leur projet d'avenir.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission et vision */}
      <section className="bg-white py-20">
        <Container>
          <SectionTitle
            eyebrow="Notre engagement"
            title="Mission et vision"
            description="Des principes qui orientent notre approche éducative."
            centered
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Target className="text-blue-900" size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Notre mission
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Accompagner les élèves dans leurs apprentissages et leur
                permettre de développer progressivement les connaissances,
                compétences et attitudes nécessaires à leur parcours.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50">
                <Award className="text-yellow-600" size={24} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Notre vision
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Construire un environnement scolaire moderne dans lequel
                chaque élève peut développer son potentiel et préparer
                sereinement la suite de son parcours.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Nos valeurs"
            title="Les principes qui nous guident"
            description="Une culture scolaire fondée sur le respect, l'engagement et la responsabilité."
            centered
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <HeartHandshake className="text-blue-900" size={28} />

              <h3 className="mt-5 font-bold text-slate-900">
                Respect
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Favoriser des relations fondées sur le respect et l'écoute.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <Award className="text-blue-900" size={28} />

              <h3 className="mt-5 font-bold text-slate-900">
                Excellence
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Encourager chaque élève à donner le meilleur de lui-même.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <ShieldCheck className="text-blue-900" size={28} />

              <h3 className="mt-5 font-bold text-slate-900">
                Responsabilité
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Développer l'autonomie et le sens des responsabilités.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <Users className="text-blue-900" size={28} />

              <h3 className="mt-5 font-bold text-slate-900">
                Collaboration
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Encourager la coopération entre élèves et communauté scolaire.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Environnement */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85"
                alt="Environnement scolaire"
                loading="lazy"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
              <Building2 size={32} className="text-yellow-400" />

              <h2 className="mt-6 text-2xl font-bold">
                Un environnement propice aux apprentissages
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                L'environnement scolaire joue un rôle important dans la
                qualité de l'expérience des élèves. Les infrastructures,
                espaces de travail et activités peuvent être présentés ici
                selon les équipements réels de l'établissement.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• Salles de classe adaptées</li>
                <li>• Espaces dédiés aux activités</li>
                <li>• Environnement sécurisé</li>
                <li>• Espaces favorisant la vie scolaire</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Vous souhaitez découvrir notre établissement ?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              Consultez nos niveaux d'enseignement ou contactez-nous pour
              obtenir davantage d'informations.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/niveaux" variant="secondary">
                Voir les niveaux
              </Button>

              <Button
                to="/contact"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-blue-900"
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default School;
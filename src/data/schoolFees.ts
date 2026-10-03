export interface SchoolFee {
  level: string;
  registration: number;
  reRegistration: number;
  monthlyTuition: number;
}

export const schoolFees: SchoolFee[] = [
  {
    level: "CP",
    registration: 40000 ,
    reRegistration: 20000,
    monthlyTuition: 18000,
  },
  {
    level: "CE1",
    registration: 30000,
    reRegistration: 20000,
    monthlyTuition: 15000,
  },
  {
    level: "CE2",
    registration: 30000,
    reRegistration: 12000,
    monthlyTuition: 12000,
  },
  {
    level: "CM1",
    registration: 2120,
    reRegistration: 14000,
    monthlyTuition: 10000,
  },
  {
    level: "CM2",
    registration: 18000,
    reRegistration: 15400,
    monthlyTuition: 10000,
  },
  {
    level: "6e",
    registration: 45000,
    reRegistration: 18000,
    monthlyTuition: 17000,
  },
  {
    level: "5e",
    registration: 46000,
    reRegistration: 20000,
    monthlyTuition: 17500,
  },
  {
    level: "4e",
    registration: 47000,
    reRegistration: 20000,
    monthlyTuition: 18000,
  },
  {
    level: "3e",
    registration: 48000,
    reRegistration: 20000,
    monthlyTuition: 18500,
  },
  {
    level: "Seconde",
    registration: 49000,
    reRegistration: 20000,
    monthlyTuition: 19000,
  },
  {
    level: "Première",
    registration: 50000,
    reRegistration: 20000,
    monthlyTuition: 20000,
  },
  {
    level: "Terminale",
    registration: 51000,
    reRegistration: 20000,
    monthlyTuition: 21000,
  },
];
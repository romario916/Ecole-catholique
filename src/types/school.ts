export interface SchoolInfo {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  openingHours: {
    days: string;
    hours: string;
  }[];
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface Level {
  id: string;
  name: string;
  description: string;
  classes: string[];
}

export interface Program {
  id: string;
  name: string;
  description: string;
}
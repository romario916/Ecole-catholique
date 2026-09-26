export type StaffRole = "Direction" | "Enseignant";

export interface StaffMember {
  id: string;
  firstName: string;
  lastName: string;
  role: StaffRole;
  subject?: string;
  image: string;
}
export type GalleryCategory =
  | "Tous"
  | "Vie scolaire"
  | "Sport"
  | "Culture"
  | "Classes"
  | "Événements";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "Tous">;
  image: string;
}
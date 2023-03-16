export interface Section {
  id: number;
  section: string;
  page: string;
  title: string;
  subSections: { id: string; name: string }[];
}
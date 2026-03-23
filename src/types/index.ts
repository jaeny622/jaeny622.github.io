export interface AboutCard {
  icon: string;
  title: string;
  desc: string;
}
export interface SkillCategory {
  icon: string;
  name: string;
  chips: string[];
  key: string[];
}
export interface ExpProject {
  name: string;
  period: string;
  desc: string;
  tags: string[];
}
export interface Experience {
  company: string;
  period: string;
  role: string;
  projects: ExpProject[];
}
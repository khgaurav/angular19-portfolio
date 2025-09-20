export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}
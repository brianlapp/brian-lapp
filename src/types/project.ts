
export type Project = {
  title: string;
  description: string;
  link: string;
  category: string;
  image: string;
  type: 'ai' | 'fullstack' | 'frontend' | 'data';
  tags?: string[];
};

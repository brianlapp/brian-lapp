
export type SubLink = {
  name: string;
  href: string;
};

export type NavLink = {
  name: string;
  href: string;
  subLinks?: SubLink[];
};

export type TechIcon = {
  title: string;
  icon: {
    url: string;
  };
};

export type ConceptItem = {
  title: string;
};

export type ModuleItem = {
  title: string;
  subtitle: string;
  description: string;
};

export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: {
    alternativeText: string;
    url: string;
  };
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: ConceptItem[];
};

export type SectionModulesProps = {
  title: string;
  modules: ModuleItem[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
};

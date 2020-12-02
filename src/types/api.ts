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

export type Image = {
  alternativeText: string;
  url: string;
};

export type Button = {
  label: string;
  url: string;
};

export type SocialLink = {
  title: string;
  url: string;
};

export type Author = {
  name: string;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  photo: Image;
};

export type Review = {
  name: string;
  text: string;
  photo: {
    url: string;
  };
};

export type Question = {
  question: string;
  answer: string;
};

export type LogoProps = Image;

export type HeaderProps = {
  title: string;
  description: string;
  button: Button;
  image: Image;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: Image;
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

export type PricingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallments: number;
  benefits: string;
  button: Button;
};

export type SectionAboutUsProps = {
  title: string;
  authors: Author[];
};

export type SectionReviewsProps = {
  title: string;
  reviews: Review[];
};

export type SectionFaqProps = {
  title: string;
  questions: Question[];
};

export type ExtraQuestionProps = {
  question: string;
  answer: string;
  hidden: boolean;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  pricingBox: PricingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: SectionReviewsProps;
  sectionFaq: SectionFaqProps;
  extraQuestion: ExtraQuestionProps;
};

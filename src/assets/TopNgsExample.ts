export interface FellowNgo {
    logo: string;
    name: string;
    beneficiaries: string;
    country: string;
    digitalizationLevel: "Beginner" | "Intermediate" | "Advanced";
  }
  
  export const topNgos: FellowNgo[] = [
    {
      logo: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
      name: "Kantaya",
      beneficiaries: "10k - 100k people",
      country: "Peru",
      digitalizationLevel: "Intermediate",
    },
    {
      logo: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
      name: "AM YASE",
      beneficiaries: "1k - 10k people",
      country: "Colombia",
      digitalizationLevel: "Advanced",
    },
    {
      logo: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
      name: "Zoo Barranquilla",
      beneficiaries: "+500k people",
      country: "Peru",
      digitalizationLevel: "Intermediate",
    },
  ];
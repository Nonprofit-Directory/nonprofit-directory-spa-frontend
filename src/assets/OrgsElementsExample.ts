// src/assets/OrgsElementsExample.ts

// Primero ampliamos la interfaz para incluir website y linkedin
export interface IOrgCard {
  image: string;
  title: string;
  country: string;
  description: string;
  website: string;
  linkedin: string;
}

export const orgCards: IOrgCard[] = [
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Room to Read",
    country: "Estados Unidos",
    description:
      "Promueve la alfabetización y la igualdad de género en la educación en países en desarrollo.",
    website: "https://www.roomtoread.org",
    linkedin: "https://www.linkedin.com/company/room-to-read",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Greenpeace",
    country: "Países Bajos",
    description:
      "Organización global que trabaja para proteger el medio ambiente y promover la paz.",
    website: "https://www.greenpeace.org",
    linkedin: "https://www.linkedin.com/company/greenpeace",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Médicos Sin Fronteras",
    country: "Francia",
    description:
      "Proporciona asistencia médica de emergencia en zonas de conflicto y desastres naturales.",
    website: "https://www.msf.org",
    linkedin: "https://www.linkedin.com/company/doctors-without-borders",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Save the Children",
    country: "Reino Unido",
    description:
      "Trabaja para mejorar la vida de los niños a través de una mejor educación, salud y oportunidades económicas.",
    website: "https://www.savethechildren.org",
    linkedin: "https://www.linkedin.com/company/save-the-children",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Code.org",
    country: "Estados Unidos",
    description:
      "Organización dedicada a expandir el acceso a la informática en las escuelas.",
    website: "https://www.code.org",
    linkedin: "https://www.linkedin.com/company/code-org",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "Water.org",
    country: "Estados Unidos",
    description:
      "Proporciona acceso a agua potable y saneamiento a través de soluciones innovadoras y sostenibles.",
    website: "https://water.org",
    linkedin: "https://www.linkedin.com/company/water-org",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "World Wildlife Fund",
    country: "Suiza",
    description:
      "Trabaja en la conservación de la naturaleza y la reducción de las amenazas más apremiantes para la diversidad de la vida en la Tierra.",
    website: "https://www.worldwildlife.org",
    linkedin: "https://www.linkedin.com/company/world-wildlife-fund",
  },
  {
    image: "https://cdn.worldvectorlogo.com/logos/unicef-2.svg",
    title: "UNICEF",
    country: "Estados Unidos",
    description:
      "Agencia de las Naciones Unidas que proporciona ayuda humanitaria y de desarrollo a niños en todo el mundo.",
    website: "https://www.unicef.org",
    linkedin: "https://www.linkedin.com/company/unicef",
  },
];

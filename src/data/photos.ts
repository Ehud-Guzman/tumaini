/**
 * Real, openly licensed photographs from Wikimedia Commons, used for design
 * illustration only. The people pictured have no connection to the fictional
 * organisation. Attribution is shown on each image and on the /credits page.
 * In a real client build these are replaced by the organisation's own
 * photographs, published only with documented consent.
 */
export type PhotoKey =
  | "classroom"
  | "girls"
  | "walking"
  | "tank"
  | "trees"
  | "assembly"
  | "school"
  | "reading"
  | "nyando"
  | "community"
  | "farmers"
  | "lake";

export type Photo = {
  src: string;
  alt: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

export const photos: Record<PhotoKey, Photo> = {
  classroom: {
    src: "/images/classroom.jpg",
    alt: "A teacher at the blackboard leading a primary school lesson while pupils in blue uniforms raise their arms",
    author: "Abz123m",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Kenyan_primary_school.jpg",
  },
  girls: {
    src: "/images/girls.jpg",
    alt: "Schoolgirls in uniform and staff holding up navy and blue team jerseys outside a school building",
    author: "Ojjwang",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Ng%27iya_Girls.jpg",
  },
  walking: {
    src: "/images/walking.jpg",
    alt: "Pupils in school uniforms walking along a tree-lined road on their way to school",
    author: "Joseph",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Africa_on_the_move_-_Thirst_for_education.jpg",
  },
  tank: {
    src: "/images/tank.jpg",
    alt: "A large concrete rainwater tank beside a school building, with a man walking past",
    author: "SuSanA Secretariat",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Khaimba_Primary_School._(6914540971).jpg",
  },
  trees: {
    src: "/images/trees.jpg",
    alt: "Pupils, a teacher and a community member watering a newly planted tree at school",
    author: "Esgichia",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Protecting_Environment-Planting_trees.jpg",
  },
  assembly: {
    src: "/images/assembly.jpg",
    alt: "Primary school pupils in red uniforms seated together on the ground outdoors",
    author: "SuSanA Secretariat",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Pupils_attending_ecosan_training._(6914569707).jpg",
  },
  school: {
    src: "/images/school.jpg",
    alt: "A teacher standing among a large group of pupils in blue uniforms in front of a stone school building",
    author: "SuSanA Secretariat",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Pupils_in_Kakichuma._(6914489213).jpg",
  },
  reading: {
    src: "/images/reading.jpg",
    alt: "A teacher and smiling pupils in school uniforms posing together outside a school",
    author: "USAID in Africa",
    license: "Public domain",
    licenseUrl: "",
    source: "https://commons.wikimedia.org/wiki/File:A_New_Generation_Reading_and_Rising,_Kenya_(38749651664).png",
  },
  nyando: {
    src: "/images/nyando.jpg",
    alt: "A trainer handing out materials to a group of women during a farm training session in Nyando",
    author: "Climate Change, Agriculture and Food Security (CCAFS)",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Training_women_farmers_on_climate_smart_innovations_in_Nyando,_Kenya_(9417196732).jpg",
  },
  community: {
    src: "/images/community.jpg",
    alt: "Women in traditional dress seated on chairs under a tree at a community session",
    author: "Mark Myles Mugambi",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Maasai_women_in_community_dialogue_on_financial_empowerment_in_Kajiado_County,_Kenya.jpg",
  },
  farmers: {
    src: "/images/farmers.jpg",
    alt: "Two women tending a vegetable garden on a hillside farm",
    author: "McKay Savage from London, UK",
    license: "CC BY 2.0",
    licenseUrl: "https://creativecommons.org/licenses/by/2.0",
    source: "https://commons.wikimedia.org/wiki/File:Women_smallholder_farmers_in_Kenya.jpg",
  },
  lake: {
    src: "/images/lake.jpg",
    alt: "A boat on the water beside palm trees and lakeside pavilions in Kisumu",
    author: "Yashvi1919",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    source: "https://commons.wikimedia.org/wiki/File:Lake_Victoria_as_visible_from_Kisumu_City.jpg",
  },
};

import { Section } from "../interfaces/interfaces";

export const getSections = async (language: string): Promise<Section[]> => {
  const module = await import(`../data/${language}/data.js`);
  return module.SectionData;
};

export const getSubSections = async (
  language: string,
  sectionNumber: number
): Promise<{ id: string; name: string }[]> => {
  const module = await import(`../data/${language}/data.js`);
  return module.SectionData[sectionNumber - 1].subSections;
};

export const getSubSectionsData = async (
  language: string
)=>{}; 


export const getSubSection5DetailsById = async (
  language: string,
  routeId: number
): Promise<{ title: string; img: string; paragraph: string }> => {
  const module = await import(`../data/${language}/page1.js`);
  const subSection5 = module.SubSections.subSection5;
  const data = subSection5.descriptions[routeId - 1].details;

  return data;
};

export const get3SubSectionsById = async (
  language: string,
  routeId: number
): Promise<{
  routeId: number;
  number: string;
  text: string;
  link: string;
  details: { title: string; img: string; paragraph: string };
}[]> => {

  const module = await import(`../data/${language}/page1.js`);
  const subSection5 = module.SubSections.subSection5;
  const data = [];

  for (let i = 0; i < 3; i++) {
    if (routeId + i >= subSection5.descriptions.length) {
      data.push(subSection5.descriptions[routeId + i - subSection5.descriptions.length]);
    } else {
      data.push(subSection5.descriptions[routeId + i]);
    }
  }
  //sort the data array by routeId
  // data.sort((a, b) => a.routeId - b.routeId);
  return data;
 }

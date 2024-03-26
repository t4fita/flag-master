import countriesData from './countries.json';

interface Country {
  name: string[];
  number: string;
  threeLetterCode: string;
  twoLetterCode: string;
}

const countries: { [key: string]: Partial<Country> } = countriesData;

export default countries;
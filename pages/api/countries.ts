import countries from './data/countries.json';

const countriesDict = (_req, res) => {
  res.status(200).json(countries);
};

export default countriesDict
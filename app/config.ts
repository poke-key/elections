import { ElectionData } from './types';
import results2024 from './data/results-2024.csv';

const config = {
  appTitle: 'Election Results Viewer',
  slider: {
    minYear: 2000,
    maxYear: 2024,
    defaultYear: 2024,
    availableYears: [2000, 2004, 2008, 2012, 2016, 2020, 2024],
  },
  data: {
    2024: results2024,
    2020: './data/results-2020.csv',
    2016: './data/results-2016.csv',
    // Add other years as needed
  },
  fields: {
    county: 'County',
    candidate: 'Candidate',
    votes: 'Votes',
    // Add additional fields if necessary
  },
  map: {
    defaultZoom: 5,
    centerCoordinates: [37.8, -96],
  },
  theme: {
    primaryColor: '#007BFF',
    secondaryColor: '#6C757D',
  },
};

export default config;

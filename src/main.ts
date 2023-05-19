import { Sorter } from './Sorter.js';
import { NumbersCollection } from './NumbersCollection.js';
import { CharactersCollection } from './CharactersCollection.js';

// const numbersCollection = new NumbersCollection([50, 3, -5, 0, 10, 503, -24]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);

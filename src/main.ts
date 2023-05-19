import { NumbersCollection } from './NumbersCollection.js';
import { CharactersCollection } from './CharactersCollection.js';
import { LinkedList } from './LinkedList.js';

const numbersCollection = new NumbersCollection([50, 3, -5, 0, 10, 503, -24]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(400);
linkedList.add(-10);
linkedList.add(30);
linkedList.add(4);
linkedList.sort();
linkedList.print();

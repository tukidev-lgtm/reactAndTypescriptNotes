export interface hero {
  id: number;
  name: string;
  owner: Owner;
}

type Owner = 'DC' | 'Marvel';

export const heroes: hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Green lantern',
    owner: 'DC',
  }
];

console.log(heroes);


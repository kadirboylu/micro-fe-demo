export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Farcry 3',
    price: 5.99,
    description: 'AN OPEN WORLD FIRST-PERSON SHOOTER',
    image: 'http://localhost:8080/game-1.webp',
    longDescription:
      'Far Cry 3 is a first-person shooter set on the fictional Rook Islands, a tropical archipelago somewhere in the Pacific, controlled by pirates and mercenaries. Players control Jason Brody and can approach missions and objectives in a variety of ways.',
  },
  {
    id: 2,
    name: 'Watch Dogs 2',
    price: 8.99,
    description: 'AN OPEN WORLD THIRD-PERSON ACTION-ADVENTURE',
    image: 'http://localhost:8080/game-2.webp',
    longDescription:
      'Watch Dogs 2 is an action-adventure game with stealth elements and played from a third-person perspective as Marcus Holloway, a young hacker.',
  },
  {
    id: 3,
    name: "Assassin's Creed Origins",
    price: 7.99,
    description: 'ACTION ROLE-PLAYING GAME DEVELOPED BY UBISOFT MONTREAL',
    image: 'http://localhost:8080/game-3.webp',
    longDescription:
      "Set in mysterious Ancient Egypt, Assassin's Creed® Origins is a new beginning. Experience a new way to fight while exploring the Great Pyramids and hidden tombs across the country of Ancient Egypt, and encounter many memorable storylines along your journey. And discover the origin story of the Assassin's Brotherhood.",
  },
  {
    id: 4,
    name: 'Just Cause 3',
    price: 4.99,
    description: 'AN ACTION-ADVENTURE THIRD-PERSON SHOOTER',
    image: 'http://localhost:8080/game-4.webp',
    longDescription:
      'Just Cause 3 is an action-adventure game with a third-person perspective. It is set in an open world environment on the fictional Mediterranean island of Medici. The world size is 400 square miles (1,000 km2), similar to that of the setting of Just Cause 2.',
  },
  {
    id: 5,
    name: 'Over Cooked',
    price: 7.99,
    description: 'A CHAOTIC CO-OPERATIVE COOKING GAME',
    image: 'http://localhost:8080/game-5.webp',
    longDescription:
      'OVERCOOKED is a chaotic couch co-op cooking game for 1-4 players. Working as a team, you and your fellow chefs must prepare, cook and serve up a variety of tasty orders before the baying customers storm out in a huff.',
  },
];

export default products;

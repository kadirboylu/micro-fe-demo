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
  {
    id: 6,
    name: 'NBA 2K23',
    price: 9.99,
    description: 'A BASKETBALL SIMULATION VIDEO GAME',
    image: 'http://localhost:8080/game-6.webp',
    longDescription:
      'NBA 2K23 is a basketball simulation video game developed by Visual Concepts and published by 2K Sports.',
  },
  {
    id: 7,
    name: 'Chivalry 2',
    price: 5.99,
    description: 'A MULTIPLAYER FIRST-PERSON SLASHER',
    image: 'http://localhost:8080/game-7.webp',
    longDescription:
      'Chivalry 2 is a multiplayer first person slasher inspired by epic medieval movie battles. Players are thrust into the action of every iconic moment of the era - from clashing swords, to storms of flaming arrows, to sprawling castle sieges and more.',
  },
  {
    id: 8,
    name: 'Fallout 76',
    price: 12.99,
    description: 'A POST-APOCALYPTIC ACTION ROLE-PLAYING GAME',
    image: 'http://localhost:8080/game-8.webp',
    longDescription:
      'Fallout 76 is an online action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. It is the ninth game in the Fallout series and serves as a narrative prequel to the series.',
  },
  {
    id: 9,
    name: 'Cyberpunk 2077',
    price: 19.99,
    description: 'A ROLE-PLAYING VIDEO GAME',
    image: 'http://localhost:8080/game-9.webp',
    longDescription:
      'Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. Set in Night City, an open world metropolis, the game follows a mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.',
  },
  {
    id: 10,
    name: 'Mount & Blade 2: Bannerlord',
    price: 14.99,
    description: 'A STRATEGY/ACTION RPG',
    image: 'http://localhost:8080/game-10.webp',
    longDescription:
      'Create a character, engage in diplomacy, craft, trade and conquer new lands in a vast medieval sandbox. Raise armies to lead into battle and command and fight alongside your troops in massive real-time battles using a deep but intuitive skill-based combat system.',
  },
  {
    id: 11,
    name: 'PlateUp!',
    price: 2.99,
    description: 'A MULTIPLAYER COOKING GAME',
    image: 'http://localhost:8080/game-11.webp',
    longDescription:
      'PlateUp! is a multiplayer cooking game where you and your friends can cook together in a kitchen. You can play with up to 4 players in a kitchen at the same time. You can cook together, or against each other, and you can even play with your friends online.',
  },
  {
    id: 12,
    name: 'Middle Earth: Shadow of War',
    price: 9.99,
    description: 'A THIRD-PERSON ACTION-ADVENTURE GAME',
    image: 'http://localhost:8080/game-12.webp',
    longDescription:
      'Middle-earth: Shadow of War is an action role-playing video game developed by Monolith Productions and published by Warner Bros. Interactive Entertainment. It is the sequel to 2014s Middle-earth: Shadow of Mordor.',
  },
  {
    id: 13,
    name: 'Call of Duty: Modern Warfare',
    price: 19.99,
    description: 'A FIRST-PERSON SHOOTER VIDEO GAME',
    image: 'http://localhost:8080/game-13.webp',
    longDescription:
      'Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision. It is the sixteenth primary installment in the Call of Duty series.',
  },
  {
    id: 14,
    name: 'Sea of Thieves',
    price: 7.99,
    description: 'A PIRATE ACTION-ADVENTURE VIDEO GAME',
    image: 'http://localhost:8080/game-14.webp',
    longDescription:
      'Sea of Thieves is a pirate action-adventure video game developed by Rare and published by Microsoft Studios for Windows 10 and Xbox One. The game was released in March 2018.',
  },
  {
    id: 15,
    name: 'Ori and the Blind Forest',
    price: 4.99,
    description: 'A PLATFORM-ADVENTURE VIDEO GAME',
    image: 'http://localhost:8080/game-15.webp',
    longDescription:
      'Ori and the Blind Forest is a platform-adventure Metroidvania video game developed by Moon Studios and published by Microsoft Studios for Microsoft Windows, Xbox One, and Nintendo Switch. The game was released in March 2015.',
  },
];

export default products;

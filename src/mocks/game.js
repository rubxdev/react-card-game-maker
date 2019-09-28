import { generateMockCard, generateUpdatedMockCard } from './card';

export const generateMockGame = (id = 0) => ({
  cards: [generateMockCard(), generateMockCard(1)],
  name: `Mock game ${id}`,
  id
});

export const generateUpdatedMockGame = game => ({
  cards: [
    generateUpdatedMockCard(game.cards[0]),
    generateUpdatedMockCard(game.cards[1])
  ],
  name: `Mock game ${game.id} UPDATED`,
  id: game.id
});

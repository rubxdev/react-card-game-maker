import { CardTypes } from '../constants/card';

export const generateMockCard = (id = 0) => ({
  text: `Mock card ${id}`,
  writer: `Mock writer ${id}`,
  type: CardTypes.LIGHT,
  id
});

export const generateUpdatedMockCard = card => ({
  text: `${card.text} UPDATED`,
  writer: `${card.writer} UPDATED`,
  color: card.color,
  id: card.id
});

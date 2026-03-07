import { MenuItemType } from './types';
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;
export const startersItems: MenuItemType[] = [
  { id: 's1', category: 'STARTERS', subCategory: 'Salads', title: 'Grilled Beef Salad', price: '780 ETB', description: 'Tender grilled beef, lime juice, onion, tomato, cucumber & lettuce', image: img('1550304943-4f24f54ddde9') },
  { id: 's2', category: 'STARTERS', subCategory: 'Salads', title: 'Mixed Salad', price: '380 ETB', description: 'Cucumber, carrot, cherry tomato & onion with roasted peanuts, Thai vinegar dressing', image: img('1512621776951-a57141f2eefd') },
  { id: 's3', category: 'STARTERS', subCategory: 'Salads', title: 'Thai Papaya Salad', price: '385 ETB', description: 'Authentic green papaya, cherry tomato, green beans, fresh lime & roasted peanuts', image: img('1505253758473-96b7015fcd40') },
  { id: 's4', category: 'STARTERS', subCategory: 'Salads', title: 'Classic Chicken Salad', price: '890 ETB', description: 'Chicken, lettuce, tomato, boiled egg, croutons & creamy dressing', image: img('1534422298391-e4f8c172dddb') },
  { id: 's5', category: 'STARTERS', subCategory: 'Appetizers', title: 'Fried Dumplings — Pot Stickers', price: '490 ETB', description: 'Beef or Chicken · soy ginger sauce · 10 pieces', image: img('1496116218417-1a781b1c416c') },
  { id: 's6', category: 'STARTERS', subCategory: 'Appetizers', title: 'Fruit Salad', price: '250 ETB', description: '', image: img('1490474418585-ba9bad8fd0ea') },
  { id: 's7', category: 'STARTERS', subCategory: 'Appetizers', title: 'Beef Spring Rolls', price: '470 ETB', description: '3 pieces', image: img('1544025162-d76694265947') },
  { id: 's8', category: 'STARTERS', subCategory: 'Appetizers', title: 'Vegetarian Spring Rolls', price: '380 ETB', description: 'Shredded cabbage, onion, carrot & vermicelli · homemade chili-ginger soy sauce · 3 pieces', image: img('1544025162-d76694265947') },
  { id: 's9', category: 'STARTERS', subCategory: 'Soups', title: 'Beef or Chicken Cream Soup', price: '620 ETB', description: '', image: img('1547592166-23ac45744acd') },
  { id: 's10', category: 'STARTERS', subCategory: 'Soups', title: 'Thai Coconut Soup', price: '705 ETB | 595 ETB | 655 ETB', description: 'Galangal, lemongrass, mushrooms — your choice of protein or vegetables', image: img('1548943487-a2e4f43b4850') },
  { id: 's11', category: 'STARTERS', subCategory: 'Soups', title: 'Vegetable Soup', price: '325 ETB', description: 'Simmered with fresh garden vegetables & herbs', image: img('1547592166-23ac45744acd') },
];

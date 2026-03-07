import { MenuItemType } from './types';
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;
export const extrasItems: MenuItemType[] = [
  { id: 'e1', category: 'EXTRAS', subCategory: 'Extras', title: 'Extras Variety', price: '25 ETB - 175 ETB', description: 'Cheese, Chicken/Beef/Fish, Mayonnaise, Bread, Egg, Veggie, Extra Sauce, Injera, Ketchup, Honey, Lemon', image: img('1596662951482-0c4ba74a6df6') },
  { id: 'e2', category: 'EXTRAS', subCategory: 'Packaging', title: 'Packaging Variety', price: '35 ETB - 90 ETB', description: 'Pizza Box, Takeaway Cup, Aluminum Box, Aluminum Box Mini, Aluminum Foil, Takeaway Box', image: img('1586816001966-79b736744398') },
];

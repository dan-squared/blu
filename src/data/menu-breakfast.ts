import { MenuItemType } from './types';
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;
export const breakfastItems: MenuItemType[] = [
  { id: 'b1', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Cheese Omelette', price: '490 ETB', description: 'Grilled onion, tomatoes, kosta, cheese & potato — served with toasted bread', image: img('1510693062732-068fcd317259') },
  { id: 'b2', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Egg Sandwich', price: '400 ETB', description: 'Crusty bread, fried eggs, onion, tomatoes, mayo & special sauce', image: img('1525351484163-7529414344d8') },
  { id: 'b3', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Ful Bowl | House Special Ful', price: '295 ETB | 495 ETB', description: 'Crushed beans, spice blend & diced onion — House Special adds egg, tuna & yogurt', image: img('1548943487-a2e4f43b4850') },
  { id: 'b4', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'French Toast | Fasting', price: '500 ETB | 455 ETB', description: 'Served with fresh fruits & syrup', image: img('1484723091791-009e3262a56f') },
  { id: 'b5', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Oats with Honey & Seasonal Fruits', price: '500 ETB', description: 'Toasted peanuts & flaxseed', image: img('1517673132405-a56a62b18caf') },
  { id: 'b6', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Café Laphto Waffles / Pancake', price: '540 ETB', description: 'Seasonal fresh fruits & syrup', image: img('1562376552-0d160a2f9fa4') },
  { id: 'b7', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Scrambled Egg', price: '345 ETB', description: 'Scrambled to perfection — served with toasted bread', image: img('1525351484163-7529414344d8') },
  { id: 'b8', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Special Chechebssa | Normal Chechebssa', price: '385 ETB | 270 ETB', description: 'Flatbread with berbere & Ethiopian butter — served with honey & yogurt', image: img('1604908176997-125f25cc6f3d') },
  { id: 'b9', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Croissant Sandwiches', price: '555 ETB', description: 'Buttery flaky croissant — Avocado / Cheese / Egg / Veggie — served with mixed green', image: img('1509440159596-0249088772ff') },
  { id: 'b10', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Kinche With Egg', price: '390 ETB', description: 'Cracked wheat in spiced butter or seasoned oil — served with boiled egg', image: img('1496116218417-1a781b1c416c') },
];

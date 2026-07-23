import { MenuItemType } from './types';
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;
export const breakfastItems: MenuItemType[] = [
  { id: 'b1', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Cheese Omelette', price: '490 ETB', description: 'Grilled onion, tomatoes, kosta, cheese & potato — served with toasted bread', image: '/menu-images/Cheese Omelette_1.jpg' },
  { id: 'b2', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Egg Sandwich', price: '400 ETB', description: 'Crusty bread, fried eggs, onion, tomatoes, mayo & special sauce', image: '/menu-images/Egg Sandwich_1.jpg' },
  { id: 'b3', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Ful Bowl | House Special Ful', price: '295 ETB | 495 ETB', description: 'Crushed beans, spice blend & diced onion — House Special adds egg, tuna & yogurt', image: '/menu-images/House Special Ful_1.jpg' },
  { id: 'b4', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'French Toast | Fasting', price: '500 ETB | 455 ETB', description: 'Served with fresh fruits & syrup', image: '/menu-images/French Toast_1.jpg' },
  { id: 'b5', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Oats with Honey & Seasonal Fruits', price: '500 ETB', description: 'Toasted peanuts & flaxseed', image: '/menu-images/Oats with Honey and Seasonal Fruits_1.jpg' },
  { id: 'b6', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Café Laphto Waffles / Pancake', price: '540 ETB', description: 'Seasonal fresh fruits & syrup', image: '/menu-images/Cafe Laphto Waffles_1.jpg' },
  { id: 'b7', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Scrambled Egg', price: '345 ETB', description: 'Scrambled to perfection — served with toasted bread', image: '/menu-images/Scrambled Egg_1.jpg' },
  { id: 'b8', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Special Chechebssa | Normal Chechebssa', price: '385 ETB | 270 ETB', description: 'Flatbread with berbere & Ethiopian butter — served with honey & yogurt', image: '/menu-images/Special Chechebssa_1.jpg' },
  { id: 'b9', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Croissant Sandwiches', price: '555 ETB', description: 'Buttery flaky croissant — Avocado / Cheese / Egg / Veggie — served with mixed green', image: '/menu-images/Croissant Sandwich_1.jpg' },
  { id: 'b10', category: 'BREAKFAST', subCategory: 'Breakfast', title: 'Kinche With Egg', price: '390 ETB', description: 'Cracked wheat in spiced butter or seasoned oil — served with boiled egg', image: '/menu-images/Kinche With Egg_1.jpg' },
];

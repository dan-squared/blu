import { breakfastItems } from './menu-breakfast';
import { startersItems } from './menu-starters';
import { mains1Items } from './menu-mains-1';
import { mains2Items } from './menu-mains-2';
import { grillItems } from './menu-grill';
import { dessertsItems } from './menu-desserts';
import { drinksItems } from './menu-drinks';
import { extrasItems } from './menu-extras';

export const MENU_CATEGORIES = ['ALL', 'BREAKFAST', 'STARTERS', 'MAINS', 'GRILL & SIDES', 'DESSERTS', 'DRINKS', 'EXTRAS'];

export const MENU_ITEMS = [
  ...breakfastItems,
  ...startersItems,
  ...mains1Items,
  ...mains2Items,
  ...grillItems,
  ...dessertsItems,
  ...drinksItems,
  ...extrasItems,
];

import { MenuItemType } from './types';
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=800&q=80`;
export const grillItems: MenuItemType[] = [
  { id: 'g1', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Tenderloin / Fillet Steak', price: '1,345 ETB', description: 'Served with 2 side dishes, BBQ Sauce, Chili Sauce & Lemon Sauce', image: img('1544025162-d76694265947') },
  { id: 'g2', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Beef Kofta', price: '1,045 ETB', description: 'Spiced beef patties grilled to perfection — served with 2 side dishes', image: '/menu-images/Beef Kofta_1.jpg' },
  { id: 'g3', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Chicken Tenderloins / Fingers', price: '1,050 ETB', description: 'Served with 1 side dish', image: '/menu-images/Chicken Tenderloins Fingers_1.jpg' },
  { id: 'g4', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Grilled Blackened Nile Perch', price: '1,070 ETB', description: 'Served with 2 side dishes', image: '/menu-images/Grilled Blackened Nile Perch_1.jpg' },
  { id: 'g5', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Beef Kebab', price: '650 ETB | 1,130 ETB', description: 'Served with 1 side dish per skewer (1 or 2 skewers)', image: img('1529692236671-f1f6610a1bf7') },
  { id: 'g6', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Chicken Kebab', price: '715 ETB | 1,195 ETB', description: 'Served with 1 side dish per skewer (1 or 2 skewers)', image: '/menu-images/Chicken Kebab_1.jpg' },
  { id: 'g7', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Chicken ¼ Flame Grilled', price: '995 ETB', description: 'Served with 1 side dish', image: img('1598514982205-f36b96d1e8d4') },
  { id: 'g8', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Chicken ½ Flame Grilled', price: '1,705 ETB', description: 'Served with 2 side dishes', image: img('1598514982205-f36b96d1e8d4') },
  { id: 'g9', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Fish Fingers W/ Fries', price: '755 ETB', description: 'Served with 1 side dish', image: img('1564834724105-918b73d1b9e0') },
  { id: 'g10', category: 'GRILL & SIDES', subCategory: 'BBQ & Grill', title: 'Spicy Hot Wings W/ Fries', price: '1,250 ETB', description: 'Served with 1 side dish', image: '/menu-images/Spicy Hot Wings W Fries_1.jpg' },
  { id: 'g11', category: 'GRILL & SIDES', subCategory: 'Side Dishes', title: 'Side Dishes Variety', price: '95 ETB - 185 ETB', description: 'Rice, Mashed Potato, Mixed Vegetables, Roasted Potato, French Fries, Mixed Salad', image: img('1576107232684-1279f390859f') },
  { id: 'g12', category: 'GRILL & SIDES', subCategory: 'Kids Corner', title: 'Mini Burger — Beef | Cheese', price: '400 ETB | 460 ETB', description: 'For children 12 & under', image: img('1568901346375-23c9450c58cd') },
  { id: 'g13', category: 'GRILL & SIDES', subCategory: 'Kids Corner', title: 'Chicken Nugget', price: '595 ETB', description: 'Crispy nugget — side & dipping sauce', image: img('1564834724105-918b73d1b9e0') },
  { id: 'g14', category: 'GRILL & SIDES', subCategory: 'Kids Corner', title: 'Mini Pizza Bites', price: '290 ETB | 420 ETB | 370 ETB', description: 'Margherita | Chicken | Beef', image: img('1513104890138-7c749659a591') },
  { id: 'g15', category: 'GRILL & SIDES', subCategory: 'Kids Corner', title: 'Fish Fingers', price: '450 ETB', description: 'Fish strips — dippy sauce', image: img('1564834724105-918b73d1b9e0') },
];

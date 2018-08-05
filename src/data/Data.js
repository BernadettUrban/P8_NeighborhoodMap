import { Place } from './Models';
import { PlaceCategory } from './Models';

const Restaurant = new PlaceCategory('restaurant', 'Restaurants', 'fa-utensils');
const Mall = new PlaceCategory('mall', 'Malls', 'fa-shopping-cart');
const Sight = new PlaceCategory('sight', 'Sights', 'fa-camera-retro');
const Business = new PlaceCategory('business', 'Business', 'fa-building');

export const PLACES = [
    new Place('1', 'Hold utcai piac', 47.504828 , 19.052649, Restaurant, '4bd02be477b29c74233a8a82'),
    new Place('2', 'WestEnd City Center', 47.513452, 19.059390, Mall, '4bcc1b343740b71309846365'),
    new Place('3', 'Parlament', 47.507476, 19.046693, Sight, '4bd6e74b5631c9b63889a630'),
    new Place('4', 'Toldi Mozi', 47.503835, 19.054623, Business, '4b733f2af964a52018a42de3'),
    new Place('5', 'Mazi Greek Kitchen', 47.507391, 19.052537, Restaurant, '574f05ee498e831452b8f54d'),
];

export const CATEGORIES = [
    Restaurant,
    Mall,
    Sight,
    Business
];

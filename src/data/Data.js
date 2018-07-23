import { Place } from './Place';

export const PLACES = [
    new Place//('1', 'name', 45.4130133, -75.7040369, 'restaurant'),
    new Place(''),
    //TODO add places
];

export const PlaceCategories = [
    {
        id: 'restaurant',
        icon: 'fa-utensils',
        title: 'Restaurant'
    },
    {
        id: 'mall',
        icon: 'fa-shopping-cart',
        title: 'Mall'
    },
    {
        id: 'sight',
        icon: 'fa-camera-retro',
        title: 'Sights'
    },
    {
        id: 'business',
        icon: 'fa-building',
        title: 'Business'
    }
];

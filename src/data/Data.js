import { Place } from './Place';

export const PLACES = [
    new Place('1', 'Hold utcai piac',47.504828 , 19.052649, 'restaurant'),
    new Place('2', 'Westend', 47.513452, 19.059390, 'mall'),
    new Place('3', 'Parlament', 47.507476, 19.046693, 'sight'),
    new Place('4', 'Toldy Cinema', 47.503835, 19.054623, 'business'),
    new Place('5', 'Mazi Greek Kitchen', 47.507391, 19.052537, 'restaurant'),
    
    //TODO add places new Place(),
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

import { Place } from './Place';

export const PLACES = [
    new Place('1', 'Hold utcai piac',47.504828 , 19.052649, 'restaurant', '4bd02be477b29c74233a8a82'),
    new Place('2', 'WestEnd City Center', 47.513452, 19.059390, 'mall', '4bcc1b343740b71309846365'),
    new Place('3', 'Parlament', 47.507476, 19.046693, 'sight', '4bd6e74b5631c9b63889a630'),
    new Place('4', 'Toldi Mozi', 47.503835, 19.054623, 'business', '4b733f2af964a52018a42de3'),
    new Place('5', 'Mazi Greek Kitchen', 47.507391, 19.052537, 'restaurant', '574f05ee498e831452b8f54d'),
    
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

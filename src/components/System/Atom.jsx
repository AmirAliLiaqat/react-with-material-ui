import { atom } from 'recoil';

export const Group = atom({
    key: 'group',
    default: [
        {
            id: 1,
            title: 'Spark',
            count: 8,
        },
        {
            id: 2,
            title: 'Beavers',
            count: 12
        },
        {
            id: 3,
            title: 'Exponential',
            count: 13
        },
        {
            id: 4,
            title: 'Morph',
            count: 6,
        },
        {
            id: 5,
            title: 'Data team',
            count: 2,
        },
        {
            id: 6,
            title: 'Un-assigned',
            count: 13
        },
    ]
});

export const Roles = atom({
    key: 'roles',
    default: [
        {
            id: 1,
            title: 'Admin',
            count: 3,
        },
        {
            id: 2,
            title: 'Users',
            count: 8,
        },
        {
            id: 3,
            title: 'Employee',
            count: 4,
        },
        {
            id: 4,
            title: 'Shopkeppers',
            count: 15,
        },
        {
            id: 5,
            title: 'Customers',
            count: 34,
        },
        {
            id: 6,
            title: 'Subscribers',
            count: 56,
        },
    ]
});

export const Platform = atom({
    key: 'platform',
    default: [
        {
            id: 1,
            title: 'Youtube',
            count: 36,
        },
        {
            id: 2,
            title: 'Facebook',
            count: 29,
        },
        {
            id: 3,
            title: 'Whatsapp',
            count: 43,
        },
        {
            id: 4,
            title: 'Instagram',
            count: 33,
        },
        {
            id: 5,
            title: 'Twitter',
            count: 12,
        },
        {
            id: 6,
            title: 'Linkedin',
            count: 5,
        },
    ]
})
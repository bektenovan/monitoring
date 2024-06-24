import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function WovenImageList() {
    return (
        <ImageList sx={{ width: 1000, height: 600 }} variant="woven" cols={3} gap={8}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://kstu.kg/fileadmin/main_menu/enrollee/fasad.jpg',
        title: 'Bed',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/12_08.jpg',
        title: 'Kitchen',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/11_01.jpeg',
        title: 'Sink',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/20_10.jpg',
        title: 'Books',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/54.jpeg',
        title: 'Chairs',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/2_42.jpg',
        title: 'Candle',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/10_28.jpg',
        title: 'Laptop',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/2_43.jpg',
        title: 'Doors',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/433105531_901916261731471_5482816377390677619_n.jpg',
        title: 'Coffee',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/4_43.jpg',
        title: 'Storage',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/8_02.jpeg',
        title: 'Coffee table',
    },
    {
        img: 'https://kstu.kg/fileadmin/user_upload/42_02.jpg',
        title: 'Blinds',
    },
];

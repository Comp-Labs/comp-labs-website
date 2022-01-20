import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 1000 }}>
      {/* sx={} */}
      {/* { width: 500, height: 1000 } */}
      <ImageListItem key="Header" cols={2}>
        <ListSubheader component="div">Apps List</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy" />
          <ImageListItemBar
            title={item.title}
            subtitle={item.category}
            actionIcon={<IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
              href={item.page}
            >
              <InfoIcon />
            </IconButton>} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://static.wixstatic.com/media/8b7e16_4ff2bf618aa14c1985daaba191c0db9e~mv2.png/v1/fill/w_155,h_155,al_c,q_85,usm_0.66_1.00_0.01/applestore.webp',
    title: 'Apple Store',
    category: 'Productivity',
    page: 'https://complabs.in',
    featured: true,
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'CloudConsole',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'GadgetCompare',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'Google Docs',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'StackBlitz',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'Jira Server',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'Google Docs',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'Google Docs',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
  {
    img: 'https://complabs.in/img/complabs.png',
    title: 'Google Docs',
    category: 'Productivity',
    page: 'https://complabs.in',
  },
];

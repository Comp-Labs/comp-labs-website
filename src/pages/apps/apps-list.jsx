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
            <ImageListItem key={item.progress}>
          <img
            src={`${item.progress}`}
            srcSet={`${item.progress}`}
            alt="Progress"
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
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/img/apps/applestore.webp',
    title: 'Apple Store',
    category: 'Productivity',
    page: '/apps/apple-store',
    progress: '/img/apps/progress.svg',
  },
  {
    img: '/img/apps/complabs.png',
    title: 'CloudConsole',
    category: 'Productivity',
    page: '/apps/cloud-console',
    progress: '/img/apps/progress.svg'
  },
  {
    img: '/img/apps/complabs.png',
    title: 'GadgetCompare',
    category: 'Productivity',
    page: '/apps/gadget-compare',
    progress: '/img/apps/progress.svg'
  },
  {
    img: '/img/apps/complabs.png',
    title: 'Google Docs',
    category: 'Productivity',
    page: '/apps/google-docs',
    progress: '/img/apps/progress.svg'
  },
  {
    img: '/img/apps/complabs.png',
    title: 'StackBlitz',
    category: 'Productivity',
    page: '/apps/stackblitz',
    progress: '/img/apps/progress.svg'
  },
  {
    img: '/img/apps/complabs.png',
    title: 'Jira Server',
    category: 'Productivity',
    page: '/apps/jira-server',
    progress: '/img/apps/progress.svg'
  },
];

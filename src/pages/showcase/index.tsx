import * as React from 'react';
import Layout from "@theme/Layout";
import Chip from "@mui/joy/Chip";
import Link from "@docusaurus/Link";
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';

interface Card {
  id: number;
  title: string;
  description: string;
  screenshot: string;
  icon: string;
  type: string;
  ifFree: string;
  releaseDate: string;
  cta: {
    link: string;
  };
}

export const cardList: Card[] = [
  {
    id: 1,
    title: 'Tech Fiddle Meet',
    description: 'An app which solves all your meeting problems easily. No account required.',
    screenshot: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/default.jpg',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/comp-labs-meet/icon.png',
    type: 'Universal App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/showcase/app/tech-fiddle-meet',
    },
  },
  {
    id: 2,
    title: 'Google Docs',
    description: 'Free Office Suite in your pocket for on-the-go editing.',
    screenshot: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/default.jpg',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/google-docs.png',
    type: 'Desktop App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/showcase/app/google-docs',
    },
  },
  {
    id: 3,
    title: 'WeatherBox',
    description: 'Powerful Weather App with all the features you ever wanted.',
    screenshot: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/default.jpg',
    icon: 'https://weatherbox.techfiddle.io/apple-touch-icon.png',
    type: 'Website + App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/showcase/app/weatherbox',
    },
  },
];

export function CardList() {
  const [searchInput, setSearchInput] = React.useState('');

  const filteredCards = cardList.filter((card) =>
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  if (filteredCards.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>
            <p>No results found</p>
          </h2>
        </div>
      </section>
    );
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="p-6">
          <code>Total items: <span className="font-bold">{filteredCards.length}</span></code>
        </div>
        <div className="p-6">
          <input
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
            placeholder="Search Showcase..."
            className="w-full px-4 py-2 rounded-lg"
          />
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 px-6">
        {filteredCards.map((card) => (
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href={card.cta.link}>
              <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src={card.screenshot} alt="App Screenshot" />
            </Link>
            <br /><br />
            <div className="flex flex-row justify-between items-center mb-4 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-solid fa-laptop" /> {card.type}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> {card.releaseDate}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-solid fa-dollar-sign" /> {card.ifFree}</span>
            </div>
            <div className="flex items-justify">
              <div className="mr-2 w-1/4">
                <img src={card.icon} alt="App Icon" className="w-29 h-24" />
              </div>
              <div className="w-3/4">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={card.cta.link}>{card.title}</Link></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <Link href={card.cta.link} className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                See Inside <div className='px-1' /> <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title="Showcase" description="Showcase of Products by Tech Fiddle">
      <main className="margin-vert--lg">
        <section className="margin-top--lg margin-bottom--lg text--center">
          <h1>Tech Fiddle Showcase</h1>
          <p>This is the showcase of the works ever done by Tech Fiddle.</p>
        </section>
        <CardList />
      </main>
    </Layout>
  );
}
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

const cardList: Card[] = [
  {
    id: 1,
    title: 'Tech Fiddle Meet',
    description: 'An App to solve all your meeting problems.',
    screenshot: 'https://screenshot-api.fly.dev/screenshot?url=https://meet.complabs.in/',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/comp-labs-meet/icon.png',
    type: 'Universal App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/',
    },
  },
  {
    id: 2,
    title: 'Google Docs',
    description: 'Free Office Suite in your pocket for on-the-go editing.',
    screenshot: 'https://screenshot-api.fly.dev/screenshot?url=https://complabs.in/',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/google-docs.png',
    type: 'Desktop App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/',
    },
  },
  {
    id: 3,
    title: 'Jira Desktop',
    description: 'Atlassian Jira Desktop App to connect to your Jira server seamlessly from your desktop.',
    screenshot: 'https://screenshot-api.fly.dev/screenshot?url=https://complabs.in/',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/apps/jira-server.png',
    type: 'Desktop App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/',
    },
  },
  {
    id: 4,
    title: 'CodeEdit',
    description: "The power of many IDE's in one desktop app.",
    screenshot: 'https://screenshot-api.fly.dev/screenshot?url=https://complabs.in/',
    icon: 'https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg',
    type: 'Desktop App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/',
    },
  },
  {
    id: 5,
    title: 'WeatherBox',
    description: 'Powerful Weather App with all the features you ever wanted.',
    screenshot: 'https://screenshot-api.fly.dev/screenshot?url=https://weatherbox.complabs.in/',
    icon: 'https://weatherbox.complabs.in/apple-touch-icon.png',
    type: 'Website + App',
    ifFree: 'Free',
    releaseDate: 'August 13, 2023',
    cta: {
      link: '/',
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
              <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src={card.screenshot} alt="" />
            </Link>
            <br /><br />
            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
              {/* <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                {card.type}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> {card.releaseDate}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-solid fa-dollar-sign" /> {card.ifFree}</span> */}
            <Chip size="sm" color="success" variant="soft" startDecorator={<DevicesRoundedIcon />}>{card.type}</Chip>
            <Chip size="sm" color="success" variant="soft" startDecorator={<i className="fa-regular fa-calendar" />}>{card.releaseDate}</Chip>
            <Chip size="sm" color="success" variant="soft" startDecorator={<i className="fa-solid fa-dollar-sign" />}>{card.ifFree}</Chip>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
                <img src={card.icon} alt="App Icon" className="w-16 h-16" />
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={card.cta.link}>{card.title}</Link></h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{card.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link href={card.cta.link} className="docusaurusLink inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                See Inside <div className='space' /> <i className="fa-solid fa-arrow-right" />
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
    <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-800 dark:to-gray-900">
      <Layout title="Showcase" description="Showcase of Products by Tech Fiddle">
        <main className="margin-vert--lg">
          <section className="margin-top--lg margin-bottom--lg text--center">
            <h1>Tech Fiddle Showcase</h1>
            <p>This is the showcase of the works ever done by Tech Fiddle.</p>
          </section>
          <CardList />
        </main>
      </Layout>
    </div>
  );
}
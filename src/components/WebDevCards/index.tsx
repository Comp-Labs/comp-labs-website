/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const WebDevCards = [
  {
    name: 'WeatherBox ⛅',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://weatherbox.complabs.in',
    },
    description: (
      <Translate id="special.weatherbox.description">
        WeatherBox is a Simple and Modern Weather App that shows the Current
        Weather of any place in the world!
      </Translate>
    ),
  },
  {
    name: 'Christmas Lights 🎇',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/christmas-lights',
      codepen: 'https://codepen.io/rudrasen2/pen/GRywgoR',
    },
    description: (
      <Translate id="special.christmas.lights.description">
        Christmas Light Rope made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Happy Sailor ⛵',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/happy-sailor-animation',
      codepen: 'https://codepen.io/rudrasen2/pen/zYRxPBr',
    },
    description: (
      <Translate id="special.happy.sailor.description">
        CodeSandbox is a popular special solution. Runs Docusaurus in a remote
        Docker container.
      </Translate>
    ),
  },
  {
    name: 'Sewing Machine 🪡🧵',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/sewing-machine',
      codepen: 'https://codepen.io/rudrasen2/pen/XWZeqVb',
    },
    description: (
      <Translate id="special..description">
        CodeSandbox is a popular special solution. Runs Docusaurus in a remote
        Docker container.
      </Translate>
    ),
  },
  {
    name: 'Nezuko',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/nezuko',
      codepen: 'https://codepen.io/rudrasen2/pen/dydworj',
    },
    description: (
      <Translate id="special.nezuko.description">
        CodeSandbox is a popular special solution. Runs Docusaurus in a remote
        Docker container.
      </Translate>
    ),
  },
  {
    name: 'Komi',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/komi',
      codepen: 'https://codepen.io/rudrasen2/pen/YzedXxa',
    },
    description: (
      <Translate id="special.komi.description">
        CodeSandbox is a popular special solution. Runs Docusaurus in a remote
        Docker container.
      </Translate>
    ),
  },
  {
    name: 'Turin Horse - Hadi 🐎',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: '/special/turin-horse',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.turin.horse.description">
        CodeSandbox is a popular special solution. Runs Docusaurus in a remote
        Docker container.
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  image: string;
  url: {
    page?: string;
    codepen?: string;
  };
  description: JSX.Element;
}

function WebDevCard({ name, image, url, description }: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={url.page}>
            <img src={image}></img>
          </Link>
        </div>
        <div className="card__body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            <Link className="button button--secondary" to={url.page}>
              <Translate id="special.tryItButton">View Now!</Translate>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WebDevCardsRow(): JSX.Element {
  return (
    <div className="row">
      {WebDevCards.map((special) => (
        <WebDevCard key={special.name} {...special} />
      ))}
    </div>
  );
}

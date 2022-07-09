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
      github: 'https://github.com/Comp-Labs/WeatherBox',
    },
    description: (
      <Translate id="special.weatherbox.description">
        WeatherBox is a Simple Weather App that shows the Current
        Weather of any city in the world!
      </Translate>
    ),
  },
  {
    name: 'Christmas Lights 🎇',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/GRywgoR',
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
      page: 'https://codepen.io/rudrasen2/full/zYRxPBr',
      codepen: 'https://codepen.io/rudrasen2/pen/zYRxPBr',
    },
    description: (
      <Translate id="special.happy.sailor.description">
        Happy Sailor in the Sea Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Sewing Machine 🪡🧵',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/XWZeqVb',
      codepen: 'https://codepen.io/rudrasen2/pen/XWZeqVb',
    },
    description: (
      <Translate id="special..description">
        Sewing Machine Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Anime Nezuko',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/dydworj',
      codepen: 'https://codepen.io/rudrasen2/pen/dydworj',
    },
    description: (
      <Translate id="special.nezuko.description">
        Anime Nezuko made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Anime Komi',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/YzedXxa',
      codepen: 'https://codepen.io/rudrasen2/pen/YzedXxa',
    },
    description: (
      <Translate id="special.komi.description">
        Anime Komi Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Turin Horse - Hadi 🐎',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.turin.horse.description">
        Turin Horse Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Double Cone Illusion',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.double.cone.illusion.description">
        Double Cone Illusion made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Magical Text Effect ✨',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.magical.text.effect.description">
        Magical Text Effect made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Mini GSAP Game - A Little to the Right',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.mini.gsap.game.description">
        Mini GSAP Game - A Little to the Right made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Multi-Input Maze',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.multi.input.maze.description">
        Multi-Input Maze Game made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Dragon Animation 🐉',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.dragon.animation.description">
        Dragon Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '1-DIV Card Backgrounds',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.1.div.card.backgrounds.description">
        1-DIV Card Backgrounds made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Parametric Spider 🕷️',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.parametric.spider.description">
        Parametric Spider made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Island 🏝️',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.island.description">
        Island made using Next.JS and Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Play Buttons',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.play.buttons.description">
        SVG Play Buttons made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Super Header Slider',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.super.header.slider.description">
        Super Header Slider made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Generative Kong Summit Patterns',
    image: 'https://complabs.in/img/blog/default.png',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="special.generative.kong.summit.patterns.description">
        Generative Kong Summit Patterns made using Pure HTML, CSS, and JS.
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
    github?: string;
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
            <Link className="button button--primary" to={url.page}>
              <i class="fa-solid fa-arrow-up-right-from-square"></i> View Live
            </Link>
            <Link className="button button--primary" to={url.codepen}>
              <i class="fa-brands fa-codepen"></i> View on CodePen
            </Link>
            if (url.github={url.github}) {
            <Link className="button button--primary" to={url.github}>
              <i class="fa-brands fa-github"></i> View on GitHub
            </Link>
            }
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

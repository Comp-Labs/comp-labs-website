

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

const WebDevCards = [
  {
    name: 'WeatherBox ⛅',
    image: 'https://api.microlink.io?url=https%3A%2F%2Fweatherbox.complabs.in&overlay.browser=dark&screenshot=true&meta=false&embed=screenshot.url',
    url: {
      page: 'https://weatherbox.complabs.in',
      github: 'https://github.com/Comp-Labs/WeatherBox',
    },
    description: (
      <Translate id="crafts.weatherbox.description">
        WeatherBox is a Simple Weather App that shows the Current
        Weather of any city in the world!
      </Translate>
    ),
  },
  {
    name: 'Christmas Lights 🎇',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/GRywgoR',
      codepen: 'https://codepen.io/rudrasen2/pen/GRywgoR',
    },
    description: (
      <Translate id="crafts.christmas.lights.description">
        Christmas Light Rope made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Happy Sailor ⛵',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/zYRxPBr',
      codepen: 'https://codepen.io/rudrasen2/pen/zYRxPBr',
    },
    description: (
      <Translate id="crafts.happy.sailor.description">
        Happy Sailor in the Sea Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Sewing Machine 🪡🧵',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/XWZeqVb',
      codepen: 'https://codepen.io/rudrasen2/pen/XWZeqVb',
    },
    description: (
      <Translate id="crafts..description">
        Sewing Machine Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Anime Nezuko',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/dydworj',
      codepen: 'https://codepen.io/rudrasen2/pen/dydworj',
    },
    description: (
      <Translate id="crafts.nezuko.description">
        Anime Nezuko made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Anime Komi',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/YzedXxa',
      codepen: 'https://codepen.io/rudrasen2/pen/YzedXxa',
    },
    description: (
      <Translate id="crafts.komi.description">
        Anime Komi Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Turin Horse - Hadi 🐎',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/rudrasen2/full/oNEJXeo',
      codepen: 'https://codepen.io/rudrasen2/pen/oNEJXeo',
    },
    description: (
      <Translate id="crafts.turin.horse.description">
        Turin Horse Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Double Cone Illusion',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/josetxu/full/VwQqagB',
      codepen: 'https://codepen.io/josetxu/pen/VwQqagB',
    },
    description: (
      <Translate id="crafts.double.cone.illusion.description">
        Double Cone Illusion made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Magical Text Effect ✨',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Hyperplexed/full/YzeOLYe',
      codepen: 'https://codepen.io/Hyperplexed/pen/YzeOLYe',
    },
    description: (
      <Translate id="crafts.magical.text.effect.description">
        Magical Text Effect made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Mini GSAP Game - A Little to the Right',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/a-trost/full/jOZXdoP',
      codepen: 'https://codepen.io/a-trost/pen/jOZXdoP',
    },
    description: (
      <Translate id="crafts.mini.gsap.game.description">
        Mini GSAP Game - A Little to the Right made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Multi-Input Maze',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/nitnelav/full/GRQEadJ',
      codepen: 'https://codepen.io/nitnelav/pen/GRQEadJ',
    },
    description: (
      <Translate id="crafts.multi.input.maze.description">
        Multi-Input Maze Game made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Dragon Animation 🐉',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/grantjenkins/full/poeqNve',
      codepen: 'https://codepen.io/grantjenkins/pen/poeqNve',
    },
    description: (
      <Translate id="crafts.dragon.animation.description">
        Dragon Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '1-DIV Card Backgrounds',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/thebabydino/full/NWxBzRv',
      codepen: 'https://codepen.io/thebabydino/pen/NWxBzRv',
    },
    description: (
      <Translate id="crafts.1.div.card.backgrounds.description">
        1-DIV Card Backgrounds made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Parametric Spider 🕷️',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/supah/full/vYdwbQK',
      codepen: 'https://codepen.io/supah/pen/vYdwbQK',
    },
    description: (
      <Translate id="crafts.parametric.spider.description">
        Parametric Spider made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Island 🏝️',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Anna_Batura/full/eYVqoxd',
      codepen: 'https://codepen.io/Anna_Batura/pen/eYVqoxd',
    },
    description: (
      <Translate id="crafts.island.description">
        Island made using Next.JS and Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Play Buttons',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Adir-SL/full/zYRyaaN',
      codepen: 'https://codepen.io/Adir-SL/pen/zYRyaaN',
    },
    description: (
      <Translate id="crafts.play.buttons.description">
        SVG Play Buttons made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Super Header Slider',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Hyperplexed/full/BaYXaOx',
      codepen: 'https://codepen.io/Hyperplexed/pen/BaYXaOx',
    },
    description: (
      <Translate id="crafts.super.header.slider.description">
        Super Header Slider made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Generative Kong Summit Patterns',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/cobra_winfrey/full/poaYpGV',
      codepen: 'https://codepen.io/cobra_winfrey/pen/poaYpGV',
    },
    description: (
      <Translate id="crafts.generative.kong.summit.patterns.description">
        Generative Kong Summit Patterns made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Tri-Wave',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/chrisgannon/full/zYNRdWX',
      codepen: 'https://codepen.io/chrisgannon/pen/zYNRdWX',
    },
    description: (
      <Translate id="crafts.tri.wave.description">
        Tri-Wave Pattern Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '🍹 Sunrise',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/deeonwuli/full/bGvbqgm',
      codepen: 'https://codepen.io/deeonwuli/pen/bGvbqgm',
    },
    description: (
      <Translate id="crafts.sunrise.description">
        Sunrise made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: '😷 Woman Wearing Face Mask',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/AsyrafHussin/full/LYdPOoG',
      codepen: 'https://codepen.io/AsyrafHussin/pen/LYdPOoG',
    },
    description: (
      <Translate id="crafts.face.mask.woman.description">
        Face Mask Woman made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: '✈️ Stunt Airplane Interactions',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/kitjenson/full/zYNQGag',
      codepen: 'https://codepen.io/kitjenson/pen/zYNQGag',
    },
    description: (
      <Translate id="crafts.stunt.airplane.description">
        Stunt Airplane Interactions made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'House in Air Animation',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/jh3y/full/jOzNQyG',
      codepen: 'https://codepen.io/jh3y/pen/jOzNQyG',
    },
    description: (
      <Translate id="crafts.house.in.air.description">
        House in Air Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: '3D Print My Heart ❤️',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/leimapapa/full/ExEjavJ',
      codepen: 'https://codepen.io/leimapapa/pen/ExEjavJ',
    },
    description: (
      <Translate id="crafts.print.heart.description">
        3D Print Heart Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Paper Craft Animation',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/fostor_uchiyama/full/BarNVNY',
      codepen: 'https://codepen.io/fostor_uchiyama/pen/BarNVNY',
    },
    description: (
      <Translate id="crafts.paper.craft.animation.description">
        Paper Craft Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Infinite City Motion',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/pjkarlik/full/wvmKevN',
      codepen: 'https://codepen.io/pjkarlik/pen/wvmKevN',
    },
    description: (
      <Translate id="crafts.infinite.city.motion.description">
        Infinite City Motion made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Noise Shapes with Input Motion',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Mamboleoo/full/YzaqPpd',
      codepen: 'https://codepen.io/Mamboleoo/pen/YzaqPpd',
    },
    description: (
      <Translate id="crafts.noise.shapes.description">
        Noise Shapes with Input Motion made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '3D Technoblade',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/khanhtranngoccva/full/oNqjmRW',
      codepen: 'https://codepen.io/khanhtranngoccva/pen/oNqjmRW',
    },
    description: (
      <Translate id="crafts.technoblade.description">
        3D Technoblade made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Box Having Party',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/atzedent/full/dydVGYN',
      codepen: 'https://codepen.io/atzedent/pen/dydVGYN',
    },
    description: (
      <Translate id="crafts.box.party.description">
        Box Having Party Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Play with Shadows',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Akerblad/full/rNdxBjb',
      codepen: 'https://codepen.io/Akerblad/pen/rNdxBjb',
    },
    description: (
      <Translate id="crafts.play.shadows.description">
        Play with Shadows Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Interactive Graph',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/ykadosh/full/GRxoWMR',
      codepen: 'https://codepen.io/ykadosh/pen/GRxoWMR',
    },
    description: (
      <Translate id="crafts.interactive.graph.description">
        Interactive SVG Graph made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Arcade Game',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Calleb/full/JjLXQXY',
      codepen: 'https://codepen.io/Calleb/pen/JjLXQXY',
    },
    description: (
      <Translate id="crafts.arcade.game.description">
        Arcade Game made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '👩🏻‍🚀 Astronaut Cartoon Animation',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/miocene/full/PoRbQJM',
      codepen: 'https://codepen.io/miocene/pen/PoRbQJM',
    },
    description: (
      <Translate id="crafts.astronaut.cartoon.description">
        Astronaut Cartoon Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Rubber Button',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/tylersticka/full/MWVbdzo',
      codepen: 'https://codepen.io/tylersticka/pen/MWVbdzo',
    },
    description: (
      <Translate id="crafts.rubber.button.description">
        Rubber Button made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Shader Audio Visualizer',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/ma_suwa/full/BarLGgx',
      codepen: 'https://codepen.io/ma_suwa/pen/BarLGgx',
    },
    description: (
      <Translate id="crafts.audio.visualizer.description">
        Shader Audio Visualizer made using Pure Three.js, HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Quilts',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/ivan-denisovich-py/full/eYMgyWw',
      codepen: 'https://codepen.io/ivan-denisovich-py/pen/eYMgyWw',
    },
    description: (
      <Translate id="crafts.quilts.description">
        Quilts made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Eye Tracking Worm',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Adir-SL/full/GRxNbbm',
      codepen: 'https://codepen.io/Adir-SL/pen/GRxNbbm',
    },
    description: (
      <Translate id="crafts.eye.tracking.worm.description">
        Eye Tracking Worm made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Reflection',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/joshonweb/full/abYmPXy',
      codepen: 'https://codepen.io/joshonweb/pen/abYmPXy',
    },
    description: (
      <Translate id="crafts.reflection.description">
        Reflection made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Ice Pop Loader',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/dariocorsi/full/PoRpZPp',
      codepen: 'https://codepen.io/dariocorsi/pen/PoRpZPp',
    },
    description: (
      <Translate id="crafts.ice.pop.loader.description">
        Ice Pop Loader made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Puzzle',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/t_afif/full/JjLWpOJ',
      codepen: 'https://codepen.io/t_afif/pen/JjLWpOJ',
    },
    description: (
      <Translate id="crafts.puzzle.description">
        Puzzle made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Tardigrade',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/graphilla/full/xxWqzgg',
      codepen: 'https://codepen.io/graphilla/pen/xxWqzgg',
    },
    description: (
      <Translate id="crafts.tardigrade.description">
        Tardigrade made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Celestial Circles',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Sanja_kaz/full/vYRGwqy',
      codepen: 'https://codepen.io/Sanja_kaz/pen/vYRGwqy',
    },
    description: (
      <Translate id="crafts.celestial.circles.description">
        Celestial Circles made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Cloud',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/leemartin/full/ZExLqQb',
      codepen: 'https://codepen.io/leemartin/pen/ZExLqQb',
    },
    description: (
      <Translate id="crafts.cloud.description">
        Cloud made using Pure VueJS.
      </Translate>
    ),
  },
  {
    name: 'Chromatic Aberration',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/lukemeyrick/full/eYMvymP',
      codepen: 'https://codepen.io/lukemeyrick/pen/eYMvymP',
    },
    description: (
      <Translate id="crafts.chromatic.aberration.description">
        Chromatic Aberration made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Customised Captions',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/argyleink/full/wvmJWeG',
      codepen: 'https://codepen.io/argyleink/pen/wvmJWeG',
    },
    description: (
      <Translate id="crafts.styled.captions.description">
        Customised Captions using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Woman With Long Hair',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/AsyrafHussin/full/KKooZZJ',
      codepen: 'https://codepen.io/AsyrafHussin/pen/KKooZZJ',
    },
    description: (
      <Translate id="crafts.long.hair.woman.description">
        Long Hair Woman made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Footer Sorrow',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/ste-vg/full/PoQgvBK',
      codepen: 'https://codepen.io/ste-vg/pen/PoQgvBK',
    },
    description: (
      <Translate id="crafts.footer.sorrow.description">
        Footer Sorrow Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'The Dogs of Unsplash',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/ste-vg/full/PoQgvBK',
      codepen: 'https://codepen.io/ste-vg/pen/PoQgvBK',
    },
    description: (
      <Translate id="crafts.unsplash.dogs.description">
        The Dogs of Unsplash Showcase made using Pure HTML Marquee and CSS.
      </Translate>
    ),
  },
  {
    name: 'Hover Glide Image Gallery',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Hyperplexed/full/VwXXPKJ',
      codepen: 'https://codepen.io/Hyperplexed/pen/VwXXPKJ',
    },
    description: (
      <Translate id="crafts.image.gallery.description">
        Hover Glide Image Gallery made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Shader: Infinity Scroll',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/YusukeNakaya/full/rNdvewM',
      codepen: 'https://codepen.io/YusukeNakaya/pen/rNdvewM',
    },
    description: (
      <Translate id="crafts.infinity.scroll.description">
        Infinity Scroll made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Evil Dot Loader Animation',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/maxew33/full/MWVVaWE',
      codepen: 'https://codepen.io/maxew33/pen/MWVVaWE',
    },
    description: (
      <Translate id="crafts.evil.dot.animation.description">
        Evil Dot Loader Animation made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: 'Random Gradient Generator',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/lukemeyrick/full/eYMVqNa',
      codepen: 'https://codepen.io/lukemeyrick/pen/eYMVqNa',
    },
    description: (
      <Translate id="crafts.gradient.generator.description">
        Random Gradient Generator made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Custom Tooltip',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/Adir-SL/full/VwXGPmy',
      codepen: 'https://codepen.io/Adir-SL/pen/VwXGPmy',
    },
    description: (
      <Translate id="crafts.tooltip.description">
        Custom Tooltip made using Pure HTML and CSS.
      </Translate>
    ),
  },
  {
    name: '🔥 Play With Fire',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/freedommayer/full/vYRrarM',
      codepen: 'https://codepen.io/freedommayer/pen/vYRrarM',
    },
    description: (
      <Translate id="crafts.fire.play.description">
        Play with Fire made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: '🙊 Monkey Business',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/grantjenkins/full/KKoemZO',
      codepen: 'https://codepen.io/grantjenkins/pen/KKoemZO',
    },
    description: (
      <Translate id="crafts.monkey.business.description">
        Monkey Business Animation made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
  {
    name: 'Binary Patterns',
    image: '/img/blog/default.jpg',
    url: {
      page: 'https://codepen.io/DonKarlssonSan/full/jOzvvwy',
      codepen: 'https://codepen.io/DonKarlssonSan/pen/jOzvvwy',
    },
    description: (
      <Translate id="crafts.binary.patterns.description">
        Binary Patterns made using Pure HTML, CSS, and JS.
      </Translate>
    ),
  },
{
  name: 'Dieter Rams Interface Control',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/aepicos/full/bGvjzeL',
    codepen: 'https://codepen.io/aepicos/pen/bGvjzeL',
  },
  description: (
    <Translate id="crafts.interface.control.description">
      Dieter Rams Interface Control made using Pure HTML and CSS.
    </Translate>
  ),
},
{
  name: 'Dieter Rams Interface Control',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/aepicos/full/bGvjzeL',
    codepen: 'https://codepen.io/aepicos/pen/bGvjzeL',
  },
  description: (
    <Translate id="crafts.interface.control.description">
      Dieter Rams Interface Control made using Pure HTML and CSS.
    </Translate>
  ),
},
{
  name: 'Morphing Portal',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/pavlovsk/full/XWEPaJe',
    codepen: 'https://codepen.io/pavlovsk/pen/XWEPaJe',
  },
  description: (
    <Translate id="crafts.morphing.portal.description">
      Morphing Portal made using Pure HTML, CSS, and JS.
    </Translate>
  ),
},
{
  name: 'Pixel Art',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/gnykka/full/NWYLrOW',
    codepen: 'https://codepen.io/gnykka/pen/NWYLrOW',
  },
  description: (
    <Translate id="crafts.pixel.art.description">
      Pixel Art made using Pure HTML and CSS.
    </Translate>
  ),
},
{
  name: 'Marquee Logo Wall',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/hexagoncircle/full/wvmjomb',
    codepen: 'https://codepen.io/hexagoncircle/pen/wvmjomb',
  },
  description: (
    <Translate id="crafts.marquee.logo.wall.description">
      Marquee Logo Wall made using Pure HTML, CSS, and JS.
    </Translate>
  ),
},
{
  name: 'Marquee Examples',
  image: '/img/blog/default.jpg',
  url: {
    page: 'https://codepen.io/hexagoncircle/full/eYMrGwW',
    codepen: 'https://codepen.io/hexagoncircle/pen/eYMrGwW',
  },
  description: (
    <Translate id="crafts.marquee.examples.description">
      Marquee Examples made using Pure HTML, CSS, and JS.
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
            <Link className="button button--primary" to={url.github}>
              <i class="fa-brands fa-github"></i> View on GitHub
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
      {WebDevCards.map((crafts) => (
        <WebDevCard key={crafts.name} {...crafts} />
      ))}
    </div>
  );
}

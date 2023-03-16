import React from 'react';
import Link from "@docusaurus/Link";

const ToolsList = [
    {
        name: 'DNS Lookup',
        description: 'Best DNS Lookup Tool with Advanced Configuration, Cherry-Picked by Tech Fiddle.',
        url: 'https://digwebinterface.com/',
        image: 'https://api.screenshotone.com/take?access_key=qgRtgmasEiUh4Q&url=https%3A%2F%2Fdigwebinterface.com&full_page=true&device_scale_factor=1&format=webp&image_quality=100&block_resources=other&cache=true&cache_ttl=2592000&signature=3815bccb2a7cd9f808b1e42ec9483c05b4152c843e47fbc7f2ec9d76972b0266',
    },
    {
        name: 'MicroURL',
        description: 'Best URL Shortener, developed using the Bitly API.',
        url: 'https://microurl.complabs.in/',
        image: 'https://api.screenshotone.com/take?access_key=qgRtgmasEiUh4Q&url=https%3A%2F%2Fmicrourl.complabs.in&full_page=true&device_scale_factor=1&format=webp&image_quality=100&block_resources=other&cache=true&cache_ttl=2592000&signature=239fb3664d31a9a70a28ef88edd52a46bae337280bef9795b72981fa433f2917',
    },
    {
        name: 'SpeedTest',
        description: 'Free, Fast, and Always Accurate Internet SpeedTest. Powered by OpenSpeedTest.com to give you the best experience, accurate and detailed SpeedTest.',
        url: '/tools/speedtest',
        image: 'https://api.screenshotone.com/take?access_key=qgRtgmasEiUh4Q&url=https%3A%2F%2Fcomplabs.in%2Ftools%2Fspeedtest&device_scale_factor=1&format=webp&image_quality=100&block_resources=other&cache=true&cache_ttl=2592000&signature=6b245f85db3786b8eb9b8d3e4d0aa74eb493b918ef505d25e101504e997d75c2',
        },
    {
        name: 'Web Tools',
        description: 'Best Web Tools Just for You by WebToolHub! Cherry-Picked by Tech Fiddle.',
        url: 'https://www.webtoolhub.com/',
        image: 'https://api.screenshotone.com/take?access_key=qgRtgmasEiUh4Q&url=https%3A%2F%2Fwww.webtoolhub.com%2F&device_scale_factor=1&format=webp&image_quality=100&block_resources=other&cache=true&cache_ttl=2592000&signature=66350ab07ce53cfdc4286c735f5961b07ff5c054566e64166d014c7b1c95fc82',
    },
];

interface Props {
    name: string;
    description: string;
    url: string;
    image: string;
}

function Tool({ name, description, url, image }: Props) {
    return (
        <div className="col">
            <Link href={url} className="docusaurusLink">
                <div className="card shadow--md">
                    <div className="card__image"><img src={image} /></div>
                    <div className="card__header"><h3>{name}</h3></div>
                    <div className="card__body"><p>{description}</p></div>
                    <div className="card__footer" />
                </div>
            </Link>
        </div>
    );
}

export function Tools(): JSX.Element {
    return (
        <div className="row">
            {ToolsList.map((props, idx) => (
                <Tool key={idx} {...props} />
            ))}
        </div>
    );
}
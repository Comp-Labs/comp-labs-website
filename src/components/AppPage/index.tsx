import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Link from "@docusaurus/Link";
import Divider from "@mui/joy/Divider";
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import Carousel from "@site/src/components/Carousel";

interface Props {
    name: string;
    image: string;
    download: string;
    description: string;
    longDescription: string;
}

export default function AppPage({ name, image, download, description, longDescription }: Props) {
    const [open, setOpen] = React.useState(false);
    const images = [
        'https://flowbite.com/docs/images/carousel/carousel-1.svg',
        'https://flowbite.com/docs/images/carousel/carousel-2.svg',
        'https://flowbite.com/docs/images/carousel/carousel-3.svg',
        'https://flowbite.com/docs/images/carousel/carousel-4.svg',
        'https://flowbite.com/docs/images/carousel/carousel-5.svg',
    ];
    return (
        <>
            <div className="justify-between flex">
                <div>
                    <h1 className="text-6xl font-bold">My App</h1>
                    <h4 className="text-xl text-blue-600">Tech Fiddle</h4>
                    <Link className="button button--primary button--md">Install</Link>
                    <div className="mt-4">
                        <DevicesRoundedIcon /> {"   "}
                        This app is available for your device
                    </div>
                </div>
                <div>
                    <img src={image} alt={name} className="w-64 h-auto rounded-[20%] shadow-md" />
                </div>
            </div>
            <Carousel images={images} />
            <br />
            <h2>About this App</h2>
            <p>{longDescription}</p>
            <Divider />
            <div className="grid grid-cols-2 gap-4">
                <div className="font-bold">Version</div>
                <div className="font-bold">Updated on</div>
                

                <div>Varies with device</div>
                <div>May 21, 2023</div>

                <div className="font-bold">Requires Android</div>
                <div>Varies with device</div>

                <div className="font-bold">Downloads</div>
                <div>1,000,000,000+ downloads</div>

                <div className="font-bold">Content rating</div>
                <div>Rated for 3+ Learn more</div>

                <div className="font-bold">Permissions</div>
                <div>View details</div>

                <div className="font-bold">Released on</div>
                <div>Dec 7, 2015</div>

                <div className="font-bold">Offered by</div>
                <div>Google LLC</div>
            </div>
            <div>
                <h1>{name}</h1>
                <h4>Tech Fiddle</h4>
                <p>Contains ads | In-app purchases</p>
                <p>Reviews | Downloads | Ratings</p>
            </div>
            <div><Link href={download} className="button button--primary">Install</Link></div>
            <div><DevicesRoundedIcon /> This app is available for your device</div>
            <p>MARK: Divider</p>
            <p>Screenshots</p> <p>Developer Contact - Website, Email</p>
            <div>
                <p>About this app 'arrow' br description, updated on, tags</p>
                <p>Version, Updated on, Compatibility, Downloads Count, In-App Purchases, Content Rating, Permissions, Released, Offered By</p>
            </div>
            <p>What's New</p>
            <p>About this app</p>
            <Link onClick={() => setOpen(true)} className="button button--primary button--lg">Arrow</Link>
        </>
    );
}

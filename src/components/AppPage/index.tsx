import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Link from "@docusaurus/Link";
import Divider from "@mui/joy/Divider";
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';

interface Props {
    name: string;
    image: string;
    download: string;
    description: string;
    longDescription: string;
}

export default function AppPage({ name, image, download, description, longDescription }: Props) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            {/* Modal Start */}
            <React.Fragment>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            maxWidth: 500,
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                        }}
                    >
                        <ModalClose
                            variant="outlined"
                            sx={{
                                top: 'calc(-1/4 * var(--IconButton-size))',
                                right: 'calc(-1/4 * var(--IconButton-size))',
                                boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                                borderRadius: '50%',
                                bgcolor: 'background.body',
                            }}
                        />
                        <div className="avatar shadow--md">
                            <img
                                alt={name}
                                src={image}
                                width="128px" />
                            <div className="avatar__intro">
                                <h1 className="avatar__name">{name}</h1>
                                <p className="avatar__subtitle">
                                    About this app
                                </p>
                            </div>
                        </div>
                        <Typography id="modal-desc" textColor="text.tertiary">
                            {longDescription}
                        </Typography>
                    </Sheet>
                </Modal>
            </React.Fragment>
            {/* Modal End */}
            <div className="avatar">
                <div className="avatar__intro">
                    <h1 className="avatar__name">{name}</h1>
                    <p className="avatar__subtitle">
                        Working on @reactjs. Co-author of Redux and Create React App.
                    </p>
                </div>
                <img
                    alt={name}
                    src={image}
                    width="240px" />
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
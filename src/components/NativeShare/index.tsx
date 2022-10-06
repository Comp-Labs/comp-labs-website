import React, { useState, useEffect } from 'react';
// import { RWebShare } from "react-web-share";
import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
// import BrowserOnly from '@docusaurus/BrowserOnly';
import shareWebPage, { TypeOfSharing } from "web-sharing";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

const APP_NAME = "Tech Fiddle"
const HOMEPAGE_URL = "https://complabs.in"
const onFail = () => alert("Could not Share. Please Try Again.")

const onSuccess = (typeofSharing: TypeOfSharing) => {
    if (typeofSharing.APP) {
        alert("Shared Successfully!")
    } else {
        // The browser does not support sharing.
        // alert("Your Browser doesn't support sharing. We've copied the URL for you.")
    }
}

const NativeShare: React.FC = () => {
    return (
        <CssVarsProvider>
            <Button
                onClick={() =>
                    shareWebPage(
                        {
                            title: APP_NAME,
                            url: HOMEPAGE_URL,
                            copyValue: `${HOMEPAGE_URL}`
                        },
                        onSuccess,
                        onFail
                    )
                }
                startDecorator={<i className="fa-solid fa-share-nodes"></i>}
                color="primary"
                size="sm"
                variant="soft"
            >
                Share
            </Button>
        </CssVarsProvider>
    );
};

export default NativeShare;
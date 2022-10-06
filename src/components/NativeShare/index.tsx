import React, { useState, useEffect } from 'react';
import { RWebShare } from "react-web-share";
import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";
import BrowserOnly from '@docusaurus/BrowserOnly';

const NativeShare = () => {
    return (
        <BrowserOnly>
            <CssVarsProvider>
                <RWebShare
                    data={{
                        text: "Sharing: " + document.title + "by Tech Fiddle",
                        url: "",
                        title: "Sharing: " + document.title + "by Tech Fiddle",
                    }}
                    onClick={() => console.log("Shared Successfully!")}
                >
                    <Button onClick={window.location.href} color="primary" size="md" variant="soft"><i className="fa-solid fa-share-nodes"></i> Share</Button>
                </RWebShare>
            </CssVarsProvider>
        </BrowserOnly>
    );
};

export default NativeShare;
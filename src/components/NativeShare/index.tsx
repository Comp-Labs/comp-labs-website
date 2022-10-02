import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { CssVarsProvider } from "@mui/joy/styles";
import Button from "@mui/joy/Button";

const NativeShare = () => {
    return (
        <>
            <CssVarsProvider>
                <RWebShare
                    data={{
                        text: "Sharing: " + document.title + "by Tech Fiddle",
                        url: "",
                        title: "Sharing: " + document.title + "by Tech Fiddle",
                    }}
                    onClick={() => console.log("Shared Successfully!")}
                >
                    <Button onClick={window.location.href} size="sm" variant="soft"><i className="fa-solid fa-share-nodes"></i> Share</Button>
                </RWebShare>
            </CssVarsProvider>
        </>
    );
};

export default NativeShare;
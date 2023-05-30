import * as React from 'react';
import {
    CannyProvider,
    CannyChangelog,
    CannyFeedback
} from "react-canny";

const APP_ID = "62777bd9b9aa4552a064cab2";
const LABEL_IDS = [/* Your label ids */];
const BOARD_TOKEN = "4e868883-e854-23a8-6cc2-d3c2e3156b94";


export default function CannyWidget() {
    return (
        <CannyProvider appId={APP_ID}>
            <CannyChangelog
              type="button"
              className="change-log-button"
              align="left"
              position="bottom"
              labelIDs={LABEL_IDS}>
                Changelog
            </CannyChangelog>
            <CannyFeedback
              basePath="/feedback"
              boardToken={BOARD_TOKEN} />
        </CannyProvider>
    );
};
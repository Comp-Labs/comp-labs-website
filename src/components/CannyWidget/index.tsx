import * as React from 'react';
import {
    CannyProvider,
    CannyChangelog,
    CannyFeedback
} from "react-canny";

const APP_ID = "627";
const LABEL_IDS = [/* Your label ids */];
const BOARD_TOKEN = "123";


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
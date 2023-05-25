import React from 'react';
import ReadingTime from '@site/src/components/ReadingTime';
import { useDoc } from '@docusaurus/theme-common/internal';
import NativeShare from "@site/src/components/NativeShare";

function DocItemInfo() {
    const { metadata } = useDoc();
    return (
        <div className="flex justify-between">
            <ReadingTime />
            <NativeShare />
        </div>
    );
}

export default DocItemInfo;
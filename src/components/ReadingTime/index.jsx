import React, { useEffect, useState } from "react";
import readingTime from "reading-time/lib/reading-time";
import Chip from "@mui/joy/Chip";
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

export default function ReadingTime(props) {
  const [readingTimeInWords, setReadingTimeInWords] = useState("");

  useEffect(() => {
    setReadingTimeInWords(
      readingTime(document.querySelector(".markdown").innerText).text
    );
  });
  return (
    <div>
      <Chip
        startDecorator={<AccessTimeRoundedIcon />}
        color="primary"
        size="md"
        variant="soft"
      >
        {readingTimeInWords}
      </Chip>
      {/* <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
        {readingTimeInWords}
      </span> */}
    </div>
  );
}

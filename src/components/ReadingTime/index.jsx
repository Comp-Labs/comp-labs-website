import React, { useEffect, useState } from "react";
import readingTime from "reading-time/lib/reading-time";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import Chip from "@mui/joy/Chip";

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
        startDecorator={<MenuBookRoundedIcon />}
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

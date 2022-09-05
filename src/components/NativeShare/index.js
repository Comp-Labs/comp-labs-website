import React from "react";

function NativeShare() {
    return (
        <>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css'></link>
            <button id="share-button" class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><i class="fa-solid fa-share-nodes"></i> Share</button>
            <script src="./script.js"></script>
        </>
    )
}

export default NativeShare;
import React, { useEffect, useState, useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Body from "../components/Body";
// @ts-ignore
import DownloadBox from '../components/DownloadBox';

const Download = () => {
    const [selectedType, setSelectedType] = useState(null);

    const handleButtonClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-transparent text-white">
            <h1 className="text-3xl font-bold mb-4">Download Page</h1>
            <div className="space-x-[-4px] mb-[68vh]">
                <button
                    onClick={() => handleButtonClick('songs')}
                    className="bg-transparent hover:bg-white border-2 text-white font-bold py-5 px-[60px] rounded"
                >
                    Songs
                </button>
                <button
                    onClick={() => handleButtonClick('covers')}
                    className="bg-transparent hover:white border-2 text-white font-bold py-5 px-[60px] rounded"
                >
                    Covers
                </button>
                <button
                    onClick={() => handleButtonClick('assets')}
                    className="bg-transparent hover:bg-white border-2 text-white font-bold py-5 px-[60px] rounded"
                >
                    Assets
                </button>
            </div>
            {selectedType && <DownloadBox type={selectedType} />}
        </div>
    );
}
export default Download;

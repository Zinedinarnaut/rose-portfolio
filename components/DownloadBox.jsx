import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const DownloadBox = ({ type }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const context = await import(`../assets/${type}`);
                const keys = Object.keys(context);
                const data = keys.map((key) => context[key]);
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [type]);

    const handleDownload = (link) => {
        // Create a temporary <a> element
        const tempLink = document.createElement('a');
        tempLink.href = link;
        tempLink.target = '_blank'; // Open in a new tab
        tempLink.download = ''; // Give it a blank name (will use the file name from the link)

        // Append the element to the DOM and trigger the click event
        document.body.appendChild(tempLink);
        tempLink.click();

        // Remove the element from the DOM
        document.body.removeChild(tempLink);

        console.log(`Downloading ${type}`);
    };

    const renderTable = () => {
        if (!items || items.length === 0) {
            return <p className="text-gray-400 mt-2">{`No ${type} available.`}</p>;
        }

        return (
            <div>
                <table className="w-full border-2 mt-[-65vh] max-h-96 overflow-y-auto bg-transparent text-white rounded">
                    <thead>
                    {type === 'covers' && (
                        <tr>
                            <th className="py-2 px-4 border-b">Cover Image</th>
                        </tr>
                    )}
                    {type === 'songs' && (
                        <tr>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Artist(s)</th>
                            <th className="py-2 px-4 border-b">Cover</th>
                            <th className="py-2 px-4 border-b">Type</th>
                            <th className="py-2 px-4 border-b">Date</th>
                            <th className="py-2 px-4 border-b">Download</th>
                        </tr>
                    )}
                    </thead>
                    <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            {type === 'covers' && (
                                <td className="py-2 px-4 border-b relative">
                                    <div className="cover-image-container">
                                        <Image
                                            src={item.original}
                                            alt={item.name}
                                            className="rounded cursor-pointer transition-transform duration-300 transform hover:scale-105"
                                            quality={100}
                                            width={200}
                                            height={150}
                                            onClick={() => handleDownload(item.original)}
                                        />
                                    </div>
                                </td>
                            )}
                            {type === 'songs' && (
                                <>
                                    <td className="py-2 px-4 border-b">{item.title}</td>
                                    <td className="py-2 px-4 border-b">{item.artists}</td>
                                    <td className="py-2 px-4 border-b">{item.cover}</td>
                                    <td className="py-2 px-4 border-b">{item.type}</td>
                                    <td className="py-2 px-4 border-b">{item.date}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleDownload(item.link)}
                                            className="flex items-center btn border-2 bg-transparent text-white font-bold py-2 px-2 rounded transition-transform duration-300 transform hover:scale-105"
                                        >
                                            <h1 className="font-bold text-white">Download</h1>
                                            <div id="container-stars">
                                                <div id="stars"></div>
                                            </div>
                                            <div id="glow">
                                                <div className="circle "></div>
                                                <div className="circle"></div>
                                            </div>
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="text-gray-400 mt-2">{`Total ${type}: ${items.length}`}</p>
            </div>
        );
    };

    return renderTable();
};

export default DownloadBox;

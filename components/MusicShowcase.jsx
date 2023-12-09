import React, { useState } from 'react';
import Image from 'next/image';

import arcade from "../public/Artwork_-_Arcade_Players.jpg"
import saph from "../public/Saph_Industries.png"
import utbo from "../public/Used_To_Be_Okay.png"
import hwags from "../public/He_Was_A_Good_Stalker.jpg"
import a from "../public/Artwork_-_Last_Signals.png"

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

const MusicShowcase = () => {
    const [showVideo, setShowVideo] = useState(false);
    const videoUrl1 = 'youtube/vLKT6KzGV0g'; // Replace with your actual video URL
    const videoUrl2 = 'youtube/vLKT6KzGV0g'; // Replace with another video URL

    const albums = [
        {
            title: 'Arcade Players',
            cover: arcade,
            youtube: '',
            tracks: [
                { name: 'Ayl Rose - Arcade Players', duration: '2:57' },
                // Add more tracks as needed
            ],
            description: 'Description for Album 1.',
        },
        {
            title: 'Saph Industries',
            cover: saph,
            youtube: '',
            tracks: [
                { name: 'Ayl Rose - Saph Industries', duration: '2:02' },
                // Add more tracks as needed
            ],
            description: 'Description for Album 1.',
        },
        {
            title: 'Used To Be Okay',
            cover: utbo,
            youtube: '',
            tracks: [
                { name: 'Ayl Rose - Used To Be Okay', duration: '2:01' },
                // Add more tracks as needed
            ],
            description: 'Description for Album 1.',
        },
        {
            title: 'He Was A Good Stalker',
            cover: hwags,
            youtube: 'youtube/tt8fTvbH6-os',
            tracks: [
                { name: 'S.T.A.L.K.E.R - He Was A Good Stalker', duration: '3:57' },
                // Add more tracks as needed
            ],
            description: 'Description for Album 1.',
        },
        {
            title: 'Last Signals',
            cover: a,
            youtube: 'youtube/tt8fTvbH6-os',
            tracks: [
                { name: 'Ayl Rose - Last Signals', duration: '3:57' },
                // Add more tracks as needed
            ],
            description: 'Description for Album 1.',
        },
        // Add more albums as needed
    ];

    return (
        <section className="mt-5s">
            <h2 className="text-3xl text-center font-bold mb-6">Music Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md border border-gray-300">
                        <div className="relative h-48">
                            {/* Use MediaPlayer for videos if showVideo is true */}
                            {showVideo && album.youtubes ? (
                                <MediaPlayer title={album.title} src={album.youtube} sload="visible">
                                    <MediaProvider />
                                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                                </MediaPlayer>
                            ) : (
                                <Image
                                    src={album.cover}
                                    alt={album.title}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100}
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                            <p className="text-gray-600">{album.description}</p>
                            <ul className="mt-3">
                                {album.tracks.map((track, trackIndex) => (
                                    <li key={trackIndex} className="flex justify-between">
                                        <span>{track.name}</span>
                                        <span>{track.duration}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MusicShowcase;

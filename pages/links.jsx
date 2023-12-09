import React from 'react';
import Body from '/components/Body.tsx';
import { MediaLinks } from '/components/data/MediaLinks';
// import IonIcon from '@reacticons/ionicons';

const Link = () => {
    return (
        <Body title="Links">
            <h1 className="font-extrabold text-4xl md:text-6xl tracking-tight mb-4">Links</h1>
            <p className="text-lg mb-6">All my profile links to find me on the web.</p>
            <div className="grid gap-4">
                {MediaLinks.map((links, index) => (
                    <a
                        key={index}
                        href={links.url}
                        aria-label={"Link of Araxyso's " + links.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:bg-[#1d1d20] hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-150 flex bg-[#e2e8f0] rounded-lg p-4 items-center"
                    >
                        {/* Uncomment the following lines if you want to include icons */}
                        {/* <div className="pr-2 items-center">
              <IonIcon className="!text-[19px] items-center mt-[2px]" name={links.icon} />
            </div> */}
                        <div className="flex flex-col">
                            <p className="font-bold text-lg mb-1">{links.name}</p>
                            <p className="font-code text-gray-600">@{links.username}</p>
                        </div>
                    </a>
                ))}
            </div>
        </Body>
    );
};

export default Link;

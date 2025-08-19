import React from 'react';

export default function Map() {
    return(
        <div>
            <iframe src="https://my.atlist.com/map/392a68d5-d591-4a7c-a59c-57324b37bcec?share=true" 
                allow="geolocation 'self' https://my.atlist.com" width="100%" height="800px"
                loading="lazy" frameBorder="0" scrolling="no" allowFullScreen id="atlist-embed"></iframe>
        </div>
    );
}
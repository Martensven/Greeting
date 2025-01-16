import React from 'react';

const ChangeBackgroundImage = () => {
    const changeBackgroundImage = (url) => {
        document.body.style.backgroundImage = `url(${url})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
    };

    return (
        <div className='BgFix'>
            <button
                onClick={() =>
                    changeBackgroundImage('https://upload.wikimedia.org/wikipedia/commons/3/3b/Good_Morning_From_the_International_Space_Station.jpg')
                }
            >
                Space Image
            </button>
            <button
                onClick={() =>
                    changeBackgroundImage('https://upload.wikimedia.org/wikipedia/commons/2/23/018_Human_looking_at_the_stars_during_Perseids_with_the_Milky_Way_in_the_background_Photo_by_Giles_Laurent.jpg')
                }
            >
                Starry Sky
            </button>
            <button
                onClick={() =>
                    changeBackgroundImage('https://upload.wikimedia.org/wikipedia/commons/6/66/Sunlight_and_stormy_sky_over_the_mountains_and_paddy_fields_in_Vang_Vieng%2C_Laos.jpg')
                }
            >
                Stormy Mountains
            </button>
        </div>
    );
};

export default ChangeBackgroundImage;


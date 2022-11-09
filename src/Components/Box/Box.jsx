import React, {useState} from 'react';

const Box = ({date, image, setModal}) => {


    const checkModalVisibility = () => {
        if (isBoxAvailable) {
            setModal({
                dayId: new Date(date).getDate().toString(),
                isVisible: true
            });
        }
    }

    const [isBoxAvailable] = useState(new Date().toLocaleDateString("hu-HU") >= new Date(date).toLocaleDateString("hu-HU"));
    return (
        <>
            <div className={`relative z-30 ${!isBoxAvailable ? 'grayscale ' : ''}`} onClick={checkModalVisibility}>
                <img src={image} alt=""/>
            </div>
        </>
    );
};

export default Box;
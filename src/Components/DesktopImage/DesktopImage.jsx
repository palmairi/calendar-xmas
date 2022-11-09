import React, {useState} from 'react';

const DesktopImage = ({date, setModal}) => {


    const checkModalVisibility = () => {
        if (isBoxAvailable) {
            setModal({
                dayId: new Date(date.day).getDate().toString(),
                isVisible: true
            });
        }
    }

    const [isBoxAvailable] = useState(new Date().toLocaleDateString("hu-HU") >= new Date(date.day).toLocaleDateString("hu-HU"));
    return (
        <>
            <div
                className={`relative ${!isBoxAvailable ? 'grayscale hover:animate-wiggle' : 'cursor-pointer hover:scale-105 transition-all'} `}
                onClick={checkModalVisibility}>
                <img src={date.image} alt=""/>
            </div>
        </>
    );
};

export default DesktopImage;

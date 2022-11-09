import React, {useEffect, useState} from 'react';
import {Days} from "../../Store/days/days";
import classes from "./Modal.module.scss";


const Modal = ({day, setModal, setLastOpenedBox}) => {
    const [content] = useState(Days.filter(item => item.id === parseInt(day)))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div
                className={'absolute flex justify-center items-center left-0 right-0 top-0 min-h-screen z-[150] bg-black/80 md:fixed'}>
                <div
                    className={"max-w-[950px] md:max-h-[95vh] md:mx-auto relative md:rounded-xl p-10 md:px-28 md:py-10 md:overflow-y-auto rounded-lg m-5 " + classes['bg-image']}>
                    <button onClick={() => {
                        setModal({
                            dayId: null,
                            isVisible: false
                        })
                        setLastOpenedBox(day)
                    }}><img src="assets/X.png" alt="" className={'absolute right-5 top-5'}/>
                    </button>
                    {content[0].content}
                </div>
            </div>
        </>
    );
};

export default Modal;
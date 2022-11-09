import React, {useEffect, useState} from 'react';
import {Dates, desktopDates} from '../../Store/dates/dates';
import Box from "../../Components/Box/Box";
import Modal from "../../Components/Modal/Modal";
import classes from "./Home.module.scss";

import logo from '../../assets/logo1.png'
import DesktopImage from "../../Components/DesktopImage/DesktopImage";
import {useAuth} from "../../hooks/useAuth";

const Home = () => {
    const [modal, setModal] = useState({
        dayId: null,
        isVisible: false
    });
    const {logout} = useAuth();

    const [lastOpenedBox, setLastOpenedBox] = useState(null);

    useEffect(() => {
        if (new Date(Dates[0].day).toLocaleDateString("hu-HU") <= new Date().toLocaleDateString("hu-HU") && new Date().toLocaleDateString("hu-HU") <= new Date(Dates[23].day).toLocaleDateString("hu-HU")) {
            const el = document.getElementById(new Date().getDate().toString());
            if (el) {
                el.scrollIntoView();
            }
        }
    }, []);

    useEffect(() => {
        if (lastOpenedBox !== null) {
            const el = document.getElementById(lastOpenedBox);
            if (el) {
                el.scrollIntoView();
            }
            setLastOpenedBox(null)
        }
    }, [lastOpenedBox]);

    return (
        <div className={'bg-brandPrimary md:min-h-screen md:flex md:items-center ' + classes['bg-image']}>
            <div className={`snap-y snap-mandatory min-h-screen md:hidden ${modal.isVisible && 'hidden'}`}>
                {Dates.map(date =>
                    <div id={new Date(date.day).getDate()} key={date.day}
                         className={"flex flex-col justify-center items-center snap h-screen snap-always snap-center "}>
                        <Box date={date.day} image={date.image} setModal={setModal}/>
                    </div>)}
            </div>
            <div className={'fixed top-0  h-screen w-screen md:hidden ' + classes['bg-image']}>

                <img src="assets/nyil.png" alt="" className={'absolute top-[20%] left-[50%] -translate-x-1/2'}/>
                <img src="assets/nyil.png" alt=""
                     className={'rotate-180 absolute top-[80%] left-[50%] -translate-x-1/2'}/>

            </div>
            <div className="flex justify-between p-5 bg-brandSecondary w-full md:hidden  fixed top-0 z-[100]">
                <div className={'flex w-full flex-col text-white justify-center text-center'}>
                    <img src={logo} alt="" className={'max-w-[100px] mx-auto'}
                         onClick={() => logout()}/>
                    <h2 className={'text-lg italic text-white'}>Kellemes karácsonyi ünnepeket kívánunk!</h2>
                </div>
            </div>
            <div className="flex justify-between fixed w-full md:hidden bottom-0 p-5 bg-[#FFF4D1] z-[100]">
                <div className={'flex flex-col  w-full justify-center text-center'}>
                    <span className={'text-brandSecondary italic font-bold'}>Kattints az aktuális dátumra, és nézd meg, mi rejlik mögötte!</span>
                </div>
            </div>
            {modal.isVisible && <Modal day={modal.dayId} setModal={setModal} setLastOpenedBox={setLastOpenedBox}/>}
            <div className="max-w-[950px] mx-auto hidden md:block">
                <div className="flex justify-evenly p-5 bg-brandSecondary rounded-t-xl">
                    <div className={'flex flex-col text-white  justify-center'}>
                        <h1 className={'text-3xl italic text-white'}>Kellemes karácsonyi ünnepeket kívánunk!</h1>
                        <p className="font-bold text-white mb-0 px-2">
                            Decemberben naponta kedveskedünk Neked valamivel. <br/>
                            Készen állsz egy meglepetésre?
                        </p>
                    </div>
                    <img src={logo} alt="" className={'max-w-[250px] cursor-pointer'} onClick={() => logout()}/>
                </div>
                <div className="bg-[#FFF4D1] p-10 pb-0 rounded-b-xl">
                    <div className="grid grid-cols-6 gap-4"> {desktopDates.map(date =>
                        <div id={'desktop' + new Date(date.day).getDate()} key={date.day}
                             className={`flex flex-col items-center ${date.colSpan > 1 && 'col-span-2'} ${date.rowSpan > 1 && 'row-span-2'}`}>
                            <DesktopImage date={date} setModal={setModal}/>
                        </div>)}</div>
                    <div className={'py-3 text-center text-brandSecondary font-bold'}>
                        Kattints az aktuális dátumra, és nézd meg, mi rejlik mögötte!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

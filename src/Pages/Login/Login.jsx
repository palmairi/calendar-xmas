import React, {useState} from 'react';
import {useAuth} from "../../hooks/useAuth";
import Card from "../../Components/Card/Card";
import classes from "../Home/Home.module.scss"
import logo from '../../assets/logo1.png'


const Login = () => {

        const {login} = useAuth();
        const [password, setPassword] = useState('');
        const secretPW = '2022';
        const [error, setError] = useState({text: '', isVisible: false});
        const handlePasswordChange = (e) => {
            setPassword(e.target.value)
        }
        const handleLogin = () => {
            if (password === secretPW) {
                login({data: password})
            } else {
                setError({text: 'Ez nem a titkos jelszó!', isVisible: true});
            }

        }

        return (
            <div
                className={"flex flex-col items-center text-white justify-center bg-brandPrimary text-center h-screen  " + classes['bg-image']}>
                <Card>
                    <img src={logo} alt="" className={'max-w-[250px] mx-auto'}/>
                    <h3 className={'text-white my-3'}>Adventi Naptár</h3>
                    <div className={'font-bold leading-4 text-white'}>
                        Készen állsz egy meglepetésre?<br/>A manók már nagyon dolgoznak!
                    </div>
                    <div className={'italic text-white my-5'}>Jelszó: 2022</div>
                    <div className="flex flex-col my-5">
                        <input type="password" value={password} onChange={handlePasswordChange} id={'password'}
                               className={'rounded-lg bg-white/40 text-black px-5 border-none p-2.5 placeholder:text-slate-700 placeholder:font-bold'}
                               placeholder={'Jelszó'}/>
                    </div>

                    <button onClick={handleLogin}
                            className={"btn-primary h-[44px]"}>Bejelentkezés
                    </button>
                    {error.isVisible &&
                    <div className="text-brandSecondary pt-5 text-center">{error.text}</div>}
                </Card>

            </div>
        );
    }
;

export default Login;

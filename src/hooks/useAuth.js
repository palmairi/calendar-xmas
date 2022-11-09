import {createContext, useContext, useMemo} from "react";
import useLocalStorage from "./useLocalStorage";
import {useLocation, useNavigate} from "react-router";

const UseAuth = createContext();

export const AuthProvider = ({children}) => {

    let location = useLocation();
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    const login = async (data) => {
        setUser(data);
        console.log(location.state?.from?.pathname)
        navigate(from, {replace: true});
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate("/bejelentkezes", {replace: true});
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );

    return <UseAuth.Provider value={value}>{children}</UseAuth.Provider>;
};

export const useAuth = () => {
    return useContext(UseAuth);
};

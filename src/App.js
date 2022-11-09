import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Login from "./Pages/Login/Login";

function App() {
    return (

        <Routes>
            <Route path="/bejelentkezes" element={<Login/>}/>
            <Route path="/" element={<ProtectedRoute/>}>
                <Route path="/" element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;

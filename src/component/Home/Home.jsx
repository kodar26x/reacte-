// import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./body.css";
import Page2 from "./Page2";
// import logo from "./jDS.png";
// import Sidebar from "react-sidebar";
import Login from "../login/login";
import Atas from "./Navbar";
import { Component } from "react";
import Registrasi from "../registrasi/registrasi";

class Homepage extends Component {
    render() {
        return (
            <BrowserRouter>
                <Atas />
                <Routes>
                    <Route path="/" element={<Page2 />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Registrasi />} />
                </Routes>
            </BrowserRouter>
        )
    }

}

export default Homepage;
import logo from "./jDS.png";
import Sidebar from "react-sidebar";
import { Link, Outlet } from "react-router-dom"

const { Component } = require("react");
class Atas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }


    render() {
        return (
            <>
                <nav className="navbar bg-light fixed-top bg-biru-penting" style={{ color: "black" }}>
                    <div className="container-fluid ">
                        <img src={logo} alt="" width="150" height="50" style={{ objectFit: " contain" }} />

                        <div className="d-flex flex-grow-1 justify-content-end gap-3 me-5 ">
                            <Link className="nav-link" to={'/'}>Home</Link>
                            <a className="nav-link" href={'#scrollspyHeading1'}>Edukasi</a>
                            <a className="nav-link" to={''}>Booking</a>
                            <Link className="nav-link" to={'/login'}>Login/Register</Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" onClick={() => this.onSetSidebarOpen(true)}
                            aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav >
                <Sidebar
                    sidebar={
                        <div className="offcanvas-body ">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active " to={`/`}>Informas Pemilik</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>pesan</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>option</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>sejarah</Link>
                                </li>

                            </ul>
                        </div>}

                    pullRight
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "#94b3fd", zIndex: 1200, position: "fixed", }, }}
                />
            </>
        )
    }
}
export default Atas;

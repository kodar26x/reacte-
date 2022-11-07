import { Component } from "react";
import "./regis.css"
import logo from "./jDS.png"

class Registrasi extends Component {

    render() {
        return (
            <>
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-4 p-md-5">
                                        <img src={logo} alt="logo" style={{height: "75px", width: "200px "}} />
                                        <h4></h4>
                                        <form>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="text" id="firstName" className="form-control form-control-lg" />
                                                        <label className="form-label" for="firstName">Masukan Nama Lengkap</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <input type="date" id="lastName" className="form-control form-control-lg" />
                                                        <label className="form-label" for="lastName">Tanggal Lahir</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">

                                                    <div className="form-outline">
                                                        <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                                                        <label className="form-label" for="phoneNumber">Phone Number</label>
                                                    </div>

                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <h6 className="mb-2 pb-1">Gender: </h6>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="femaleGender" value="option1" checked />
                                                        <label className="form-check-label" for="femaleGender">Female</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="maleGender" value="option2" />
                                                        <label className="form-check-label" for="maleGender">Male</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="otherGender" value="option3" />
                                                        <label className="form-check-label" for="otherGender">Other</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <h6 className="mb-2 pb-1">Golongan Darah: </h6>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="femaleGender" value="option1" checked />
                                                        <label className="form-check-label" for="femaleGender">A</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="maleGender" value="option2" />
                                                        <label className="form-check-label" for="maleGender">B</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="otherGender" value="option3" />
                                                        <label className="form-check-label" for="otherGender">AB</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                                            id="otherGender" value="option3" />
                                                        <label className="form-check-label" for="otherGender">O</label>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">

                                                        <div className="form-outline">
                                                            <div className="form-outline">
                                                                <input type="text" id="firstName"
                                                                    className="form-control form-control-lg" />
                                                                <label className="form-label" for="firstName">Masukan Alamat
                                                                    Lengkap</label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">

                                                        <div className="form-outline">
                                                            <input type="email" id="emailAddress"
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" for="emailAddress">Email</label>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">

                                                        <div className="form-outline" id="togglePassword">
                                                            <input type="password" id="id_password"
                                                                className="form-control form-control-lg" />
                                                            <label className="form-label" for="emailAddress">password</label>


                                                        </div>

                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <a href="#" className="btn btn-outline-primary btn-lg" style={{height:"50px "}}> Kembali </a>

                                                        </div>

                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <a href="../Homepage/Homepage.html" className=" coba  btn btn-primary btn-lg" type="Registrasi" > Konfirmasi  </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }



}
export default Registrasi;
import { Component } from "react";
import './boking.css'
import $ from "jquery";
const Boking = () => {

    $('.form-control').each(function () {
        floatedLabel($(this));
    });

    $('.form-control').on('input', function () {
        floatedLabel($(this));
    });

    function floatedLabel(input) {
        var $field = input.closest('.form-group');
        if (input.val()) {
            $field.addClass('input-not-empty');
        } else {
            $field.removeClass('input-not-empty');
        }
    }


    return (
        <>
            <br /><br /><br /><br /><br /><br />
            <div id="booking" class="section rounded-3">
                <div class="section-center ">
                    <div class="container">
                        <div class="row">
                            <div class="booking-form ">
                                <div class="booking-bg"></div>
                                <form>
                                    <div class="form-header">
                                        <h2><b>Boking Area</b></h2>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Masukan Nama Lengkap" />
                                        <span class="form-label">Name Lengkap</span>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="tel" placeholder="Masukan Nomor Telephone" />
                                        <span class="form-label">Phone</span>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="Masukan Email" />
                                        <span class="form-label">Email</span>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="tel"
                                            placeholder="Masukan keluhan/Layanan yang di ingin kan" />
                                        <span class="form-label">Layana/keluhan</span>
                                        <p class="text-info">Mohon mendetail jika memang di perlukan</p>
                                    </div>
                                    <div class="form-group">
                                        <select class="form-control" required>
                                            <option value="#" label="&nbsp;" selected hidden></option>
                                            <option>1.Dr sakura</option>
                                            <option>2.Dr TSunade</option>
                                            <option>3.Dr surender</option>
                                        </select>
                                        <span class="select-arrow"></span>
                                        <span class="form-label">Pilih Dr Spesialis</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="date" required />
                                                <span class="form-label">Masukan tanggal Boking</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input class="form-control" type="time" required />
                                                <span class="form-label">Perkiraan Jam Datang</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="color: white;">
                                        <p><b>Biaya pendaftaran Rp.15.000,-</b></p>
                                        <p class="text-info" >Biaya tersebut adalah biaya pelayanan boking
                                            selebih nya di bayar di lokasi</p>
                                    </div>
                                    <div class="form-btn ">

                                        <button class="submit-btn">Boking Sekarang</button>
                                    </div>
                                    <div class="form-btn">

                                        <button class="submit-btn">Kembali</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </>
    )

}
export default Boking;

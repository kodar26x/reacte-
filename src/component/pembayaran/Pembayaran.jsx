

const Bayar = () => {


    return (
        <>
            <div class="container rounded bg-white">
                <div class="row d-flex justify-content-center pb-5">
                    <div class="col-sm-5 col-md-5 ml-1">
                        <div class="py-4 d-flex flex-row">
                            <h5><span class="fa fa-check-square-o"></span><b>Memuat Pembayaran</b> | </h5><span
                                class="pl-2">via</span>
                        </div>

                        <h4>informasi pemilik</h4>
                        <div class="d-flex pt-2">
                            <div>
                                <p><b>Alamat pengirimnan.</b></p>
                            </div>
                            <div class="ml-auto">
                                <p class="text-primary"> <i>Edit Alamat</i></p>
                            </div>
                        </div>
                        <p>jalan,kalaoang,desa linglung kec.makan kab.wkwkwland</p>
                        <div class="rounded bg-light d-flex justify-content-between">
                            <div class="p-2">Pengiriman Via</div>
                            <div class="ml-auto  p-2"><img src="./5c07836b22c5689d56cb217c88171785.png" alt=""/></div>
                        </div>
                        <hr />
                        <div class="pt-2">
                            <div class="d-flex">
                                <div>
                                    <p><img src="./49656d7100598b911a1f247dec64fda4.png" alt=""/><b>Bank central asia.</b></p>
                                </div>
                                <div class="ml-auto p-2">
                                    <p class="text-primary"><i class="fa fa-plus-circle text-primary"></i>Ganti Metode Pembayaran</p>
                                </div>
                            </div>
                            <p>
                                1. Pilih Bayar/ Beli pada menu utama.

                                <br /> 2. Pilih Villainy.
                                <br /> 3. Pilih Multi Payment.
                                <br /> 4. Masukkan kode perusahaan XXXXXX
                                <br /> 5. Masukkan nomer virtual account lalu konfirmasi.
                                <br /> 6. Pembayaran Selesai
                                </p>
                                <form class="pb-3">
                                    <div class="d-flex flex-row align-content-center">
                                        <div class="pt-2 pr-2"><input type="radio" name="radio1" id="r1" checked/></div>
                                        <div class="rounded border d-flex w-100 px-2">
                                            <div class="pt-2">
                                                <p><i class="fa fa-cc-visa text-primary pr-2"></i>Visa Debit Card</p>
                                            </div>
                                            <div class="ml-auto pt-2">************3456</div>
                                        </div>
                                    </div>
                                </form>

                                <div>
                                    <input type="button" value="Mulai Pembayaran" class="btn btn-primary btn-block"/>
                                </div>
                        </div>
                    </div>
                    <div class="col-sm-3 col-md-4 offset-md-1 mobile">
                        <div class="py-4 d-flex justify-content-end">
                            <h6><a href="#">Kembali</a></h6>
                        </div>
                        <div class="bg-light rounded d-flex flex-column">
                            <div class="p-2 ml-3">
                                <h4>Total Pembayaran</h4>
                            </div>
                            <div class="p-2 d-flex">
                                <div class="col-8">Sikat Gigi Anak</div>
                                <div class="ml-auto">Rp.15.000,-</div>
                            </div>
                            <div class="p-2 d-flex">
                                <div class="col-8">Jumlah Barang </div>
                                <div class="ml-auto">2</div>
                            </div>
                            <div class="p-2 d-flex">
                                <div class="col-8">Diskoun( 0% )</div>
                                <div class="ml-auto">+ Rp.0.00</div>
                            </div>
                            <div class="p-2 d-flex">
                                <div class="col-8">Pengiriman</div>
                                <div class="ml-auto">Rp.12.000,-</div>
                            </div>
                            <div class="border-top px-4 mx-3">
                            </div>
                            <div class="p-2 d-flex pt-3">
                                <div class="col-8">Total Keseluruhan</div>
                                <div class="ml-auto">Rp.42.000,-</div>
                            </div>
                            <div class="border-top px-4 mx-3"></div>
                            <div class="p-2 d-flex pt-3">
                                <div class="col-8">Biaya lain-lain</div>
                                <div class="ml-auto"><b>Rp.0,-</b></div>
                            </div>

                            <div class="border-top px-4 mx-3"></div>
                            <div class="p-2 d-flex pt-3">
                                <div class="col-8"><b>Total</b></div>
                                <div class="ml-auto"><b class="green">Rp.42.000,-</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Bayar;
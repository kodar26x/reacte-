import dr from "./asd.gif";
import video from "./video.mp4";
import Barang from "./Sikat U.jpeg";
import depan from "./Rekomendasi-Dokter-Gigi-Anak-Ba.width-800.jpegquality-80.jpg";

// import './calendar.css';



import { Link } from "react-router-dom"
// import Calendar from "./calendar/Calendar";
const Page2 = () => {
    return (
        <>
            <div className="row " id="atas">
                <img src={depan} className=" p-5" alt="gambar" style={{ borderRadius: "75px" }} />
            </div>
            <div className="row p-2">
                <div className="col-8">
                    <div className="row p-1">
                        <div className="col-4">
                            <img src={dr} alt="" style={{ height: "250px", width: "250px" }} />
                        </div>
                        <div className="col-8">
                            <p style={{ textAlign: "center" }}>    Jabar Dental Care adalah Tempat pelayanan Kesehatan Gigi
                                yang terbesar di Jawa Barat, Melayani Berbagai Masalah Gigi
                                Anda dengan Penuh Kasih Sayang dan Pelayanan Ekstra.
                                Kami Juga Menyediakan Layanan Pemesanan Yang Bisa
                                Anda Lakukan di Mana Saja dan Pembelian Yang Mempermudah
                                dan Efisien Dalam Beberapa Produk Dengan Kebutuhan Khusus.
                            </p>
                        </div>
                    </div>
                    <video src={video} controls
                        style={{ height: "30rem" }} id="scrollspyHeading1"></video>
                    <h1 style={{ fontFamily: "Times New Roman" }}>Edukasi Bingbingan Terhadap Anak</h1>
                    <p className="font-family"> Menjaga kesehatan anak secara keseluruhan adalah hal yang penting dilakukan, termasuk kesehatan gigi dan
                        mulut, dengan menjaga kesehatan gigi dan mulut sejak dini merupakan faktor penting dalam pertumbuhan dan
                        perkembangan anak itu sendiri.
                        <br />
                        Pengenalan dan perawatan gigi secara dini adalah sangat penting, mengingat banyak anak dengan tingkat
                        frekwensi karies atau lubang yang cukup tinggi masih banyak yang belum tertangani dengan benar.
                        <br />
                        Banyak orangtua yang menganggap bahwa menyikat gigi saja sudah cukup, memang rutin menyikat gigi bisa
                        menjadi salah satu cara untuk menjaga kesehatan gigi dan mulut. Namun perlu diketahui, hal itu saja
                        tidak cukup, apalagi pada anak-anak. Rutinitas menggosok gigi, membersihkan rongga mulut menggunakan
                        obat kumur, dan menggunakan benang gigi ternyata masih belum efektif untuk menghindari gangguan yang
                        terjadi pada gigi dan mulut.
                        <br />
                        Mulut bukan sekedar untuk pintu masuknya makanan dan minuman tetapi fungsi mulut lebih dari itu dan
                        tidak banyak orang menyadari besarnya peranan mulut bagi kesehatan dan kesejahteraan seseorang.
                        <br />
                        Menjaga kesehatan mulut dan gigi adalah salah satu kebiasaan baik yang harus diajarkan sejak kecil.
                        Dengan begitu, hal ini bisa menjadi kebiasaan dan membuat anak memiliki kesadaran yang tinggi untuk
                        melakukan hal tersebut seumur hidupnya. Sehinga kebiasaan ini membantu mencegah karies dan penyakit
                        periodontal seiring bertambahnya usia
                        <br />
                        Peran serta orang tua sangat diperlukan di dalam membimbing, memberikan pengertian, mengingatkan dan
                        menyediakan fasilitas kepada anak agar anak dapat memelihara kebersihan gigi dan mulutnya, karena dengan
                        terpeliharanya kesehatan gigi dan mulut dapat membuat anak –anak makan dengan nyaman dan bicara dengan
                        lancar.
                        <br />
                        Mengingat pentinganya kesehatan gigi dan mulut ini berikut ada tips yang bisa orang tua lakukan untuk
                        membantu anak menjaga kesehatan gigi dan mulutnya:
                        <br />
                        1.Menjelaskan pentingnya menjaga kesehatan gigi dan mulut denan
                        membacabuku tentunya dengan cerita yang menarik.
                        <br />
                        2.Menggunakan kartun dan video dengan topik kesehatan gigi dan mulut
                        <br />
                        3.Memutar lagu selama 2 (dua) menit saat menggosok gigi
                        <br />
                        4.Mengajak anak untuk memilih sikat dan pasta giginya ( perlu dipastikan
                        sesuai dengan usia anak)
                        <br />
                        5.Menggosok gigi bersama
                        <br />
                        6.Memantau kesehatan gigi dan mulutnya dengan membuat kalender dan
                        menempelkan stiker yang lucu di kolom kalender
                        <br />
                        7.Memberikan penghargaan atau hadiah.
                    </p>
                </div>
                <div className="col-4  ">
                    <Link to={'/'} >

                        <div className="d-flex justify-content-center align-items-center " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart3"
                                viewBox="0 0 16 16">
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <h4 className="mb-0">Shop</h4>
                        </div>
                    </Link>
                    <div style={{ maxHeight: " 1000px", overflowY: "scroll" }}>

                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">

                            <div className="card" style={{ width: "18rem", height: "30rem", right: "-70px" }}>
                                <img src={Barang} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">sikat anak</h5>
                                    <p className="card-text">Rp:10.000,-</p>
                                    <Link href="#" className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- list Dr --> */}

                    <div className="">
                        <div className="card" style={{ right: " -70px", width: "20rem ", top: "50px", objectFit: "cover" }}>
                            <img src="./sakura.jpg" className="card-img-top  rounded-circle  "
                                style={{ padding: "20px", height: "300px" }} />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the
                                    card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Calendar/> */}
        </>
    )
}
export default Page2;

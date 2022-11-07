

const Barang = ()=>{

    return(
    <>
        <nav className="navbar bg-light fixed-top" >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="./jDS.png" alt="Logo" width="200" height="50" className="d-inline-block align-text-top"/>

            </a>

            <form className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-cart3"
                    viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg></a>

        </div>
    </nav>


    <div className="container mt-5 mb-5">
        <div className="card">
            <div className="row g-0">
                <div className="col-md-6 border-end">
                    <div className="d-flex flex-column justify-content-center">
                        <div className="main_image"> <img
                                src="./list barang/d6b51a82f92d1b702eb0540c5a5b5893.jpg_720x720q80.jpg"
                                id="main_product_image" width="350"/> </div>
                        <div className="thumbnail_images">
                            <ul id="thumbnail">
                                <li><img onclick="changeImage(this)"
                                        src="./list barang/-_sikat-gigi-anak-bentuk-u-bahan-silikon-training-toothbrush-360-_full01.webp"
                                        width="70"/>
                                </li>
                                <li><img onclick="changeImage(this)"
                                        src="./list barang/8368fdd632730b2b0b85f04de55fae26_tn.jpeg" width="70"/>
                                </li>
                                <li><img onclick="changeImage(this)"
                                        src="./list barang/ddd5424993ee2a3cd59f732979a29539.jpeg" width="70"/>
                                </li>
                                <li><img onclick="changeImage(this)"
                                        src="./list barang/ccbb442d3cfe6576f83efa97d664d45a.jpeg" width="70"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-3 right-side">
                        <div className="d-flex justify-content-between align-items-center">
                            <h3>Sikat Gigi Anak</h3> <span className="heart"><i className='bx bx-heart'>p</i></span>
                        </div>
                        <div className="mt-2 pr-3 content">
                            <p>Sikat Gigi Bentuk U
                                Bahan Silikon Untuk Anak
                                Bayi S untuk 2-6 tahun</p>
                        </div>
                        <h3>Rp.10.000,-</h3>
                        <div className="ratings d-flex flex-row align-items-center">
                            <div className="d-flex flex-row"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                    <path
                                        d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-star" viewBox="0 0 16 16">
                                    <path
                                        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                </svg>
                            </div> <span>tersisa = 49 buah</span>
                        </div>
                        <div className="mt-5"> <span className="fw-bold">Pilih Warna</span>
                            <div className="colors">
                                <ul id="marker">
                                    <li id="marker-1"></li>
                                    <li id="marker-2"></li>
                                    <li id="marker-3"></li>

                                </ul>
                            </div>
                        </div>
                        <div className="buttons d-flex flex-row mt-5 gap-3">
                            <a href="../keranjang/keranjang.html" className="">
                                <button className="btn btn-outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>Keranjang</button>
                            </a>

                            <a href="../keranjang/keranjang.html">

                                <button className="btn btn-dark">Beli</button>
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row d-flex align-content-between pt-2 m-2" style=" background-color:gray; height: 50px; ">
        <div className="col-6 ">
            <h5>Jasa Pengiriman</h5>
        </div>
        <div className="dropdown-center col-6 text-end  ">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                list Pengiriman
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">JNE</a></li>
                <li><a className="dropdown-item" href="#">Si Cepat</a></li>
                <li><a className="dropdown-item" href="#">JNT</a></li>
            </ul>
        </div>
    </div>

    <div className="row m-2">
        <div>
            <p><b>spesifik produk</b></p>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, consectetur? Doloremque facere quasi
                    minima tenetur excepturi enim perferendis tempore veniam, eveniet natus voluptatum et quos
                    cupiditate dolore, quia beatae. Ipsum.</p>
            </div>
        </div>
        <div>
            <p><b>Informasi lengkap nya</b></p>
            <div>
                <br/> -Warna:

                <br/> *Pink
                <br/> *Blue
                <br/>*Bear(Biru,Pink,Hijau,Kuning)
                <br/> -Bahan:
                <br/> *Kepala sikat: silikon
                <br/> *Menangani: plastik
                <br/> -Usia yang cocok: 2-12 tahun
                <br/> -Metode pembersihan: pembersihan air dingin atau air hangat
                <br/> **TIDAK BISA DIRENDAM DALAM SUHU TINGGI**
                <br/> -Cara Penggunaan: Oleskan pasta gigi di kedua sisi, gerakkan sikat gigi ke kiri dan ke kanan saat
                digunakan
                <br/> -Fitur:
                <br/> 1. Bahan silikon lembut tidak akan membahayakan gusi bayi Anda
                <br/> 2. Kepala sikat omni-directional 360 °, sehingga pembersihan gigi lebih menyeluruh
                <br/> 3. Ubah cara menggosok gigi secara tradisional menjadi lebih menarik

                <br/> PESANAN SESUAI DENGAN YANG DIPILIH TIDAK MENERIMA PESAN ATAU CATATAN. TERIMA KASIH :)

                <br/> PERHATIAN :
                <br/> Jika ingin melakukan retur produk harap menyertakan bukti video unboxing terlebih dahulu
                <br/> *jika sudah melalukan pemesanan kendala stok habis akan di hubungin dengan admin melalui chat
                shopee,jika tidak respon karna sudah mau melewati wkt pengirman,akan kami kirim dgn stok yg ada
                namun
                <br/> beda jenis!!!

                <br/> *HARAP MENAMBAHKAN TAMBAHAN BUBBLE WRAP* agar paket kalian sampai dengan aman. *SEMUA PRODUK SUDAH
                DICEK
                DAN TIDAK AKAN ADA KEKURANGAN SEBELUM DIPICKUP*
            </div>
        </div>
    </div>


















    <footer className="text-center text-white" style="background-color: #f1f1f1;">
        {/* <!-- Grid container --> */}
        <div className="container pt-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-0">
                {/* <!-- Facebook --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                        <path
                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg></a>

                {/* <!-- Twitter --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path
                            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg></a>

                {/* <!-- tiktok --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                        <path
                            d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg></a>

                {/* <!-- Instagram --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                        <path
                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg></a>

                {/* <!-- Linkedin --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>
                {/* <!-- Github --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg></a>
                {/* <!-- whatapp --> */}
                <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg></a>

            </section>
            {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* <!-- Copyright --> */}
    </footer>
                            </>
    )
 }

 export default Barang;

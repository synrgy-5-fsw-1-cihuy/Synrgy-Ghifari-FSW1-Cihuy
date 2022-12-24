const OurServices = () => {
    return (
        <div>
            <section id="our-services">
                <div className="container">
                    <div className="second flex justify-content-center row">
                    <div className="second-img col-md-6">
                        <img  className="os-img img-fluid" src={process.env.PUBLIC_URL + '/img_service.png'} alt="" />
                    </div>
                    <div className="second-desc col-md-6">
                        <h1 className="os-title">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                        <div className="os-subtitle mb-18" >
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang
                        lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                        wedding, meeting, dll.
                        </div>
                        <ul className="second-list">
                            <li className="second_list--item">
                            <div className="flex item-container">
                                <img src={process.env.PUBLIC_URL + '/Group 53.png'} alt="" className="secong_item--img" />
                                <span className="second_item--text">
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                                </span>
                            </div>
                            </li>
                            <li className="second_list--item">
                            <div className="flex item-container">
                                <img src={process.env.PUBLIC_URL + '/Group 53.png'} alt="" className="secong_item--img" />
                                <span className="second_item--text">
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                                </span>
                            </div>
                            </li>
                            <li className="second_list--item">
                            <div className="flex item-container">
                                <img src={process.env.PUBLIC_URL + '/Group 53.png'} alt="" className="secong_item--img" />
                                <span className="second_item--text">
                                Sewa Mobil Jangka Panjang Bulanan
                                </span>
                            </div>
                            </li>
                            <li className="second_list--item">
                            <div className="flex item-container">
                                <img src={process.env.PUBLIC_URL + '/Group 53.png'} alt="" className="secong_item--img" />
                                <span className="second_item--text">
                                Gratis Antar - Jemput Mobil di Bandara
                                </span>
                            </div>
                            </li>
                            <li className="second_list--item">
                            <div className="flex item-container">
                                <img src={process.env.PUBLIC_URL + '/Group 53.png'} alt="" className="secong_item--img" />
                                <span className="second_item--text">
                                Layanan Airport Transfer / Drop In Out
                                </span>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
      
            </section>
        </div>
    )
}

export default OurServices;
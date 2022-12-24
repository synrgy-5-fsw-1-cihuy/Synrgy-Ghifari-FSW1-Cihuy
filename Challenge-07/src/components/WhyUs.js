const WhyUs = () => {
    return (
        <div>
            <section id="why-us">
                <div className="container third">
                    <div className="third-head">
                    <h1 className="third-title mb-16">Why Us?</h1>
                    <p className="third-subtitle">Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="card why-us--card" style={{width: '268px', height: '196px'}}>
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL + '/icon_complete.png'} alt="" />
                            <h1 className="card-title">Mobil Lengkap</h1>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card why-us--card" style={{width: '268px', height: '196px'}}>
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL + '/icon_price.png'} alt="" />
                            <h1 className="card-title">Harga Murah</h1>                
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card why-us--card" style={{width: '268px', height: '196px'}}>
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL + '/icon_24hrs.png'} alt="" />
                            <h1 className="card-title">Layanan 24 Jam</h1>                
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card why-us--card" style={{width: '268px', height: '196px'}}>
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL + '/icon_professional.png'} alt="" />
                            <h1 className="card-title">Sopir Profesional</h1>                
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyUs;
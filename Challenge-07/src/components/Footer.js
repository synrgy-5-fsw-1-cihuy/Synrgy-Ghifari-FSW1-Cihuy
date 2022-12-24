const Footer = () => {
    return (
        <div>
            <section id="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 first-footer">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </div>
                    <div className="col-md-3 second-footer">
                        <p>Our services</p>
                        <p>Why Us</p>
                        <p>Testimonial</p>
                        <p>FAQ</p>
                    </div>
                    <div className="col-md-3 third-footer">
                        <p>Connect With Us</p>
                        <div className="third-footer--img flex">
                            <img src={process.env.PUBLIC_URL + '/icon_facebook.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/icon_instagram.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/icon_twitter.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/icon_mail.png'} alt="" />
                            <img src={process.env.PUBLIC_URL + '/icon_twitch.png'} alt="" />
                        </div>                   
                    </div>
                    <div className="col-md-3 fourth-footer">
                        <p>Copyright Binar 2022</p>
                        {/* <!-- logo --> */}
                        <div className="navbar-brand" href="#"></div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
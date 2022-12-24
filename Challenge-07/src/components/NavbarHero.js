

const NavbarHero = () => {
    return (
        <div>
            <section className="hero-section">
            <nav className="navbar navbar-expand-lg pt-24 navbar-light">
                <div className="container">
                  <a className="navbar-brand" href="#"></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav ms-auto gap-32">
                        <li className="nav-item">
                          <a className="nav-link " href="#our-services">Our Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link btn btn-register btn-success" href="#">Register</a>
                        </li>
                      </ul>
                    </div>
                  
                </div>                
            </div>
            </nav>
            <div className="hero relative">
              <div className="container">
                <div className="flex row">
                  <div className="hero-text col-md-6">
                    <h1 className="big-heading mb-16">Sewa & Rental Mobil Terbaik di kawasan Surabaya.</h1>
                    <p className="hero_text--desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button
                    type="button"
                    className="btn btn-success"
                    > Mulai Sewa Mobil
                  </button>
                </div>
                <div className="col-md-6">
                    <img
                    className="hero-image "
                    src={process.env.PUBLIC_URL + '/img_car.png'}
                    alt=""
                    />
                </div>
              </div>
              </div>
              
            </div>
    </section>
        </div>
    )
}

export default NavbarHero;
const Testimonial = () => {
    return (
        <div>
            <section class="carousel fourth" id="testimonial">
                <div class="carousel-head container" style={{textAlign: 'center'}}>
                    <h1 class="carousel-head--title section-title">Testimonial</h1>
                    <span class="section-subtitle">Berbagai review positif dari para pelanggan kami</span>
                </div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="carousel_item--card flex">
                        <img src={process.env.PUBLIC_URL + '/carousel_photo_1.png'} alt="" class="carousel-img" width="80px" />
                        <div class="carousel-card--text">
                            <img src={process.env.PUBLIC_URL + '/rate-5.png'} alt="" class="carousel-rate" />
                            <p class="carousel-desc">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <h6 class="carousel-date">John Dee 32, Bromo</h6>
                        </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="carousel_item--card flex">
                        <img src={process.env.PUBLIC_URL + '/carousel_photo_1.png'} alt="" class="carousel-img" width="80px" />
                        <div class="carousel-card--text">
                            <img src={process.env.PUBLIC_URL + '/rate-5.png'} alt="" class="carousel-rate" />
                            <p class="carousel-desc">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </p>
                            <h6 class="carousel-date">John Dee 32, Bromo</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            <div class="carousel-btn flex">
            <button class="carousel-control-prev carousel-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <img src={process.env.PUBLIC_URL + '/prev-button.png'} alt="" />
            </button>
            <button class="carousel-control-next carousel-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <img src={process.env.PUBLIC_URL + '/next-button.png'} alt="" />
            </button>
            </div>
    </section>
        </div>
    )
}

export default Testimonial;
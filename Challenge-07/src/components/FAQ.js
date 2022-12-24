const FAQ = () => {
    return (
        <div>
            <section id="faq">
                <div className="faq container">
                    <div className="row">
                    <div className="col-md-5">
                        <h1 className="faq-title mb-16">Frequently Ask Question</h1>
                        <p className="faq-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className="col-md-7">
                        <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Apa saja syarat yang dibutuhkan?
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis quod quisquam a fuga modi consequatur ipsum voluptas voluptatem sint, aliquam culpa velit earum officia id excepturi eos, nostrum quaerat?
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Berapa hari minimal sewa mobil lepas kunci?
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat neque cupiditate sit porro accusantium itaque dolorem quas, voluptate nostrum quaerat rem ex placeat illo aliquid dolore accusamus magni ab? Repellat consequuntur veritatis vitae expedita consectetur natus quasi earum vel nobis assumenda quia eos, dicta laborum non obcaecati iusto quo iure similique unde esse? Facilis laborum cumque eligendi reprehenderit iusto.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                            </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus minima vero quidem delectus atque perferendis repudiandae ipsa facere, voluptas unde provident soluta nisi minus suscipit cupiditate reprehenderit fuga. Sint perferendis soluta nobis obcaecati, quasi praesentium in rem adipisci iure voluptatum fugiat voluptas dolore quas tempore iste ipsum blanditiis non eaque labore officia excepturi necessitatibus! Maxime repellendus ullam beatae earum quis.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button">
                                Apakah Ada biaya antar-jemput?
                            </button>
                            </h2>
                            <div className="accordion-collapse collapse" >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button">
                                Apakah Ada biaya antar-jemput?
                            </button>
                            </h2>
                            <div className="accordion-collapse collapse" >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ;
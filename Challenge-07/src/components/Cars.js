import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const carEndpoint = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  const tipeDriver = useRef();
  const date = useRef();
  const time = useRef();
  const capacity = useRef();

  useEffect(() => {
    getAllCars();
    
  })

  const getAllCars = async () => {
    const cars = await axios.get(carEndpoint);
    setCars(cars.data);
    setFilteredCars(cars.data);
    console.log(cars.data);

  }

  const onSubmitForm = (event) => {
    event.preventDefault();

    const driverType = Number(tipeDriver.current.value);
    const bookingDate = date.current.value;
    const bookingTime = time.current.value;
    const totalPassenger = capacity.current.value;

    const bookingDateAndTime = bookingDate +'T'+ bookingTime + ':00Z';

    if(driverType == !null || bookingDateAndTime == !null || totalPassenger == !null) {
      cars.filter({driverType,bookingDateAndTime, totalPassenger}, cars).then((cars) => {
        setFilteredCars(cars);
      })
    }

    
  }



  


    return (
        <div>
            <section className="hero-section--cari-mobil">
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

    <section className="search-car" id="search">
      
      <div className="container px-4 py">
          <form action="" id="form-cari-mobil" onSubmit={(event) => onSubmitForm(event)}>
            <div className="row searchBackground">
              <div className="col-lg">
                <div className="">
                  <label for="">Tipe Driver</label>
                  <select className="form-select" 
                  id="tipe_driver" 
                  name="tipe-driver"
                  ref={tipeDriver}
                  >
                    <option>Pilih Tipe Driver</option>
                    <option value="1">Dengan Sopir</option>
                    <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                  </select>             
                </div>
              </div>

              <div className="col-lg">
                <div>
                  <label for="">Tanggal</label>
                  <input type="date" name="" id="tanggal" placeholder="Pilih Tanggal" ref={date} />
                </div>
              </div>
              
              <div className="col-lg">
                <div>
                  <label for="">Waktu Jemput/Ambil</label>
                  <i className="fa fa-clock-o"></i>
                <select 
                id="waktu" 
                className="form-control"
                ref={time}
                >
                    <option>Pilih waktu jemput</option>
                    <option value="08:00">08.00</option>
                    <option value="09:00">09.00</option>
                    <option value="10:00">10.00</option>
                    <option value="11:00">11.00</option>
                    <option value="12:00">12.00</option>
                </select>
                </div>                
              </div>
              
              <div className="col-lg-3">
                <div >
                  <label>
                      Jumlah Penumpang (optional)
                  </label>
                  <i className="fa fa-user"></i>
                  <input
                  id="jumlah_penumpang" 
                  type="number" 
                  name="jumlah-penumpang" 
                  placeholder="Jumlah Penumpang" 
                  ref={capacity}
                  />
              </div>
              </div>
              
            <div className="col-lg btn-cari">
              <button
              id="cari_mobil"
              type="submit" 
              className="btn btn-success">Cari Mobil</button>
          </div>
            </div>
            
            
          </form>
      </div>

      <div className="container">
        <div className="row">
          { cars.map((car, index) => {
            return <div className="col">
              <div class="card" key={index}>
                <img src={car.image} class="card-img-top img-fluid" alt="..." />
                <div >
                <h5>{car.manufacture} / {car.model}</h5>
                <h4>Rp. {car.rentPerDay} / hari</h4>
                <p>${this.description}</p>
                </div>
                <div>
                <i class="fa fa-users"></i>
                <p>{car.capacity} Orang</p>
                <i class="fa fa-gear"></i>
                <p>{car.transmission}</p>
                <i class="fa fa-calendar"></i>
                <p>Tahun {car.year}</p>
                <p>available at: <b>{car.availableAt}</b></p>
                <a href="#" class="btn btn-success text-white">Pilih Mobil</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

      
  </section>
  <div id="cars-container"></div>


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

export default Cars;
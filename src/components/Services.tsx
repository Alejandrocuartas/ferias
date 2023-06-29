import React from "react";
import { Fade } from "react-awesome-reveal";

const Services = () => {
    return (
        <>
            <div id="services" className="bg-light">
                <div className="container py-5">
                    <Fade>
                        <div className="row align-items-center mt-2">
                            <div className="col-10 px-5 mx-auto">
                                <img src="https://cdn.cuponidad.pe/images/Deals/FERXXO.jpg" alt="" className="img-fluid mb-4 mb-lg-0" />
                            </div>
                            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
                                <a target="_blank" href="https://cdn.cuponidad.pe/images/Deals/FERXXO.jpg" className="btn btn-light px-5 rounded-pill shadow-sm">Compra tu ticket</a>
                            </div>
                        </div>
                    </Fade>
                    <Fade>

                        <div className="row align-items-center mt-4 mb-2">

                            <div className="col-10 px-5 mx-auto order-1 order-lg-2">
                                <img src="https://th.bing.com/th/id/R.9de64cb66fc844d0ccc60cda43184a9a?rik=%2bFqxXD6XxYUMWQ&pid=ImgRaw&r=0" />
                            </div>
                            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <a target="_blank" href="https://th.bing.com/th/id/R.9de64cb66fc844d0ccc60cda43184a9a?rik=%2bFqxXD6XxYUMWQ&pid=ImgRaw&r=0" className="btn btn-light px-5 rounded-pill shadow-sm">Aprende más</a>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Services;

import Image from "next/image";
import Budget from "./Buttons/Budget";

const Services = () => {
    return (
        <section className="bg-black text-white pt-5 pb-5" id="services">
            <div className="container">
                <div className="row mt-3 pb-5">
                    <div className="col-md-5">
                        <h2 className="section-heading-left display-2 text-start w-100 mt-0 ">Serviços que <br />oferecemos</h2>
                    </div>
                    <div className="col-md-7 d-flex gap-4 flex-wrap mt-md-0 mt-4">
                        <div className="d-flex gap-5 flex-wrap">
                            <div className="d-flex gap-2 service-card align-items-center">
                                <h4 className="fw-light text-center">Montagem e <br />desmontagem <br />de móveis</h4>
                                <Image quality={100} width={80} height={80} className="img-fluid img-differentials" src="/images/Furniture.svg" alt="Ícone Móveis" />
                            </div>
                            <div className="d-flex gap-2 service-card align-items-center">
                                <h4 className="fw-light text-center">Transportes e <br />mudanças </h4>
                                <Image quality={100} width={80} height={80} className="img-fluid img-differentials" src="/images/Truck.svg" alt="Ícone Caminhão" />
                            </div>
                        </div>
                        <div className="d-flex gap-5 flex-wrap mt-4">
                            <div className="d-flex gap-2 service-card align-items-center">
                                <h4 className="fw-light text-center">Carga e <br />descarga</h4>
                                <Image quality={100} width={80} height={80} className="img-fluid img-differentials" src="/images/Loading.svg" alt="Ícone Carga e Descarga" />
                            </div>
                            <div className="d-flex gap-2 service-card align-items-center">
                                <h4 className="fw-light text-center">Embalagem <br />completa</h4>
                                <Image quality={100} width={80} height={80} className="img-fluid img-differentials" src="/images/Package.svg" alt="Ícone Embalagem" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-2">
                            <Budget />
                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
}

export default Services;
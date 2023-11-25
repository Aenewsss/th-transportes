import Image from "next/image";
import Budget from "./Buttons/Budget";

const Differentials = () => {
    return (
        <section className="bg-sec pt-5 pb-5" id="differentials">
            <div className="container">
                <h2 className="text-black section-heading display-2 text-center w-100 mt-0">O que diferencia a <br /> TH Transportes?</h2>

                <div className="row mt-5 pt-5 pb-5">
                    <div className="col-md-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/icons/Security.svg" alt="Ícone Segurança" />
                            <h4 className="fw-bold text-black text-center">Compromisso com a segurança</h4>
                            <h5 className="fw-light text-black text-center">Sua carga sempre segura e em boas mãos</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/icons/Clock.svg" alt="Ícone Relógio" />
                            <h4 className="fw-bold text-black text-center">Pontualidade</h4>
                            <h5 className="fw-light text-black text-center">Entregas no prazo, sempre!</h5>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4">
                        <div className="d-flex flex-column gap-3">
                            <Image quality={100} fill className="img-fluid img-differentials" src="/icons/Professional.svg" alt="Ícone Time Profissional" />
                            <h4 className="fw-bold text-black text-center">Equipe especializada</h4>
                            <h5 className="fw-light text-black text-center">Profissionais dedicados e treinados.</h5>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center mt-5">
                        <p className="text-dark text-center">Clique no botão abaixo e faça um orçamento agora mesmo</p>
                        <div className="d-flex justify-content-center">
                            <Budget />
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Differentials;
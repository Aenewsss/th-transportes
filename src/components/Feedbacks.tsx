import Budget from "./Buttons/Budget";

const Feedbacks = () => {
    return (
        <section className="mt-5 container" id="feedbacks">
            <h2 className="section-heading display-2 text-center w-100 mt-0 pt-0 container text-black">Veja o que nossos clientes estão dizendo</h2>

            <div className="col-md-12 d-flex flex-column align-items-center justify-content-between">
                <div id="carouselId" className="carousel carousel-dark slide d-md-flex d-none" data-bs-ride="true">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="d-flex">
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Serviço ótimo! Eles foram pontuais, a equipe foi super prestativa e o preço foi justo. Recomendo a todos!</p>
                                    <h4 className="text-uppercase text-black text-start">- Cristopher Martinelli</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">A equipe foi super profissional, cuidadosa com os meus móveis e fez tudo com muita rapidez. Recomendo!</p>
                                    <h4 className="text-uppercase text-black text-start">- Aenã Eloi</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Foram super pontuais e atenciosos na montagem dos móveis. Ótimo serviço!</p>
                                    <h4 className="text-uppercase text-black text-start">- Samia Lobo</h4>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="d-flex">
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Contratei a TH Transportes para realizar o frete de alguns produtos da minha loja, e fiquei muito satisfeita.Com certeza, contarei com eles novamente</p>
                                    <h4 className="text-uppercase text-black text-start">- Carol Valeriano</h4>
                                </div>
                                <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                    <p className="fst-italic fs-5 text-black">Além de realizarem uma mudança sem nenhum transtorno, a equipe ainda cuidou da montagem e desmontagem dos móveis. Recomendo muito!</p>
                                    <h4 className="text-uppercase text-black text-start">- Gabriel Marques</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div id="carouselMobile" className="carousel carousel-dark slide d-md-none d-flex" data-bs-ride="true">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Serviço ótimo! Eles foram pontuais, a equipe foi super prestativa e o preço foi justo. Recomendo a todos!</p>
                                <h4 className="text-uppercase text-black text-start">- Cristopher Martinelli</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">A equipe foi super profissional, cuidadosa com os meus móveis e fez tudo com muita rapidez. Recomendo!</p>
                                <h4 className="text-uppercase text-black text-start">- Aenã Eloi</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Foram super pontuais e atenciosos na montagem dos móveis. Ótimo serviço!</p>
                                <h4 className="text-uppercase text-black text-start">- Samia Lobo</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Contratei a TH Transportes para realizar o frete de alguns produtos da minha loja, e fiquei muito satisfeita.Com certeza, contarei com eles novamente</p>
                                <h4 className="text-uppercase text-black text-start">- Carol Valeriano</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex flex-column p-3 m-5 feedback-card rounded">
                                <p className="fst-italic fs-5 text-black">Além de realizarem uma mudança sem nenhum transtorno, a equipe ainda cuidou da montagem e desmontagem dos móveis. Recomendo muito!</p>
                                <h4 className="text-uppercase text-black text-start">- Gabriel Marques</h4>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselMobile" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselMobile" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <p className="text-black">Clique no botão abaixo e faça um orçamento agora mesmo</p>
                <div className="d-flex justify-content-center">
                    <Budget />
                </div>
            </div>
        </section>
    );
}

export default Feedbacks;
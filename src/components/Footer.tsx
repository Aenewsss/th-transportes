import { environments } from "@/environments";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-100 mt-5 pt-5">
            <div className="p-4 mt-5">
                <div className="row d-flex justify-content-center gap-md-0 gap-3">
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <Image loading="lazy" width={140} height={42} src="/th-logo.png" alt="Logo TH Transportes" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                        <h6 className="text-main fw-bold mb-0 d-md-flex d-none">TH Transportes</h6>
                        <Link target="_blank" href={environments.mapsLink} className="d-flex align-items-center gap-2 mt-3">
                            <Image loading="lazy" width={20} height={20} src="/icons/Localização.svg" alt="Ícone localização" />
                            <div className="text-black">
                                <p className="fs-10 mb-0">JARDIM BOTÂNICO - BRASÍLIA</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 d-flex d-flex align-items-center justify-content-center mt-md-0 mt-4">
                        <div className="text-black ">
                            <h6 className="text-main fw-bold mb-0 text-center">REDES SOCIAIS</h6>
                            <div className="d-flex flex-column gap-2 mt-3">
                                {/* <Link target="_blank" href={environments.mailLink} className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/Email.svg" alt="Email ícone" />
                                    <span className="text-black">cotacao@iluminus.solar</span>
                                </Link> */}
                                <Link target="_blank" href={environments.whatsAppLink} className="d-flex gap-2 fs-10 text-white mb-0">
                                    <Image loading="lazy" width={20} height={20} src="/icons/whatsapp.svg" alt="whatsapp ícone" />
                                    <span className="text-black">(61) 9 9248-5945</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black p-3">
                <Link className="text-white" href="https://aenamartinelli.com.br">
                    <p className="text-center mb-0 fs-10 ">
                        Copyright © 2023 All rights reserved | Site desenvolvido por
                        <span className="text-success"> aenamartinelli.com.br</span>
                    </p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
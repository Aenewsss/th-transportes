import { poppinsBold } from "@/app/layout";
import Image from "next/image";
import ClickBudget from "./Buttons/ClickBudget";

const HomeTop = () => {
    return (
        <section className="home-top pt-5 pb-5 position-relative">
            <div className="container d-flex flex-column align-items-center pb-5 mt-md-5 justify-content-center ">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className={`${poppinsBold.className} display-2 text-white fw-bold`}>
                            TH Transportes, sua solução eficiente em transportes e mudanças!
                        </h1>
                    </div>

                    <div className="col-md-6 mt-4">
                        <ClickBudget />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomeTop;

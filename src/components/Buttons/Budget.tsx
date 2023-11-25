import { environments } from "@/environments";
import Link from "next/link";

const Budget = () => {

    return (
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-sec text-white scale fs-3 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5">
            <span>Quero Fazer um Orçamento!</span>
        </Link>
    );
}

export default Budget;
import { environments } from "@/environments";
import Image from "next/image";
import Link from "next/link";

const ClickBudget = () => {
    return (
        <Link target="_blank" href={environments.whatsAppLink} className="btn btn-sec text-white scale fs-3 d-flex gap-2 justify-content-center align-items-center ps-5 pe-5">
            <Image width={30} height={30} src="/icons/whats-icon.png" alt="whats icon" />
            <span>Clique e Faça um Orçamento!</span>
        </Link>
    );
}

export default ClickBudget;
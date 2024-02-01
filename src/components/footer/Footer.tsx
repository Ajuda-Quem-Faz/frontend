import { CurrencyCircleDollar, Medal, Storefront, YoutubeLogo } from "@phosphor-icons/react"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="flex flex-col">
            <div className="flex justify-around items-center py-2 text-indigo-950 font-semibold">
                <Link to={'/about'} className="flex flex-col items-center">
                    <Medal size={36}></Medal>
                    <p className="">Quem somos</p>
                </Link>
                <Link to={''} className="flex flex-col items-center">
                    <CurrencyCircleDollar size={36}></CurrencyCircleDollar>
                    <p className="">Como contribuir</p>
                </Link>
                <Link to={''} className="flex flex-col items-center">
                    <Storefront size={36}></Storefront>
                    <p className="">Como Vender</p>
                </Link>
            </div>
            <div className="flex justify-between px-10 py-3 bg-violet-950">
                <img src="" alt="logo"></img>
                <div id="icon" className="flex gap-8">
                    <InstagramLogo size={40} color="#F1F1E7"></InstagramLogo>
                    <FacebookLogo size={40} color="#F1F1E7"></FacebookLogo>
                    <YoutubeLogo size={40} color="#F1F1E7"></YoutubeLogo>
                    <LinkedinLogo size={40} color="#F1F1E7"></LinkedinLogo>
                </div>
            </div>
            <div className="flex justify-between px-8 font-bold text-xs py-1">
                <p>© 2024 AjudaQuemFaz </p>
                <p>Termos de uso e Politica de Privacidade</p>
            </div>
        </footer>
    )
}

export default Footer
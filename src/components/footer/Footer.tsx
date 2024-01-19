import { YoutubeLogo } from "@phosphor-icons/react"
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

function Footer() {
    return (
        <footer className="flex flex-col bg-orange-300">
            <div className="grid grid-cols-3 px-28 py-2 text-purple-950 font-semibold">
                <div className="flex flex-col ml-10 ">
                    <h3 className="text-xl font-semibold py-3">Institucional</h3>
                    <p className="hover:underline cursor-pointer">Quem somos</p>
                    <p className="hover:underline cursor-pointer">Carreira</p>
                    <p className="hover:underline cursor-pointer">Pessoas e Lojas</p>
                    <p className="hover:underline cursor-pointer">Políticas do Ajuda quem faz</p>
                </div>
                <div className="flex flex-col ml-10">
                    <h3 className="text-xl font-semibold py-3">Dúvidas</h3>
                    <p className="hover:underline cursor-pointer">Como doar</p>
                    <p className="hover:underline cursor-pointer">Como comprar</p>
                    <p className="hover:underline cursor-pointer">Isenção fiscal</p>
                    <p className="hover:underline cursor-pointer">Trocas e devoluções</p>
                </div>
                <div className="flex flex-col ml-10">
                    <h3 className="text-xl font-semibold py-3">Informação</h3>
                    <p className="hover:underline cursor-pointer">Meios de Pagamento</p>
                    <p className="hover:underline cursor-pointer">Como vender</p>
                    <p className="hover:underline cursor-pointer">Abra sua loja</p>
                    <p className="hover:underline cursor-pointer">Impacto social</p>
                </div>
            </div>
            <div className="flex justify-between px-10 py-2">
                <img src="" alt="logo"></img>
                <div id="icon" className="flex gap-5">
                    <InstagramLogo size={40} weight="bold" color="purple"></InstagramLogo>
                    <FacebookLogo size={40} weight="bold" color="purple"></FacebookLogo>
                    <YoutubeLogo size={40} weight="bold" color="purple"></YoutubeLogo>
                    <LinkedinLogo size={40} weight="bold" color="purple"></LinkedinLogo>
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
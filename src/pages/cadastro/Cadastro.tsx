function Cadastro() {
        
   
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="py-2 flex flex-col gap-1 justify-center text-center text-slate-800 font-semibold text-2xl mx-28 w-1/4">
                    <h1>Cadastro</h1>
                    <h2>Ajuda Quem Faz</h2>
                </div>
                
                <div className="flex justify-center rounded-xl  bg-orange-100 mb-20 p-12 shadow-xl">

                    <form action="" className="flex flex-col justify-center gap-2">
                        
                        <label className="text-lg">Nome Completo</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">CPF/CNPJ</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">Email</label>
                        <input className="border-2 rounded-lg text-base font-normal text-slate-900 px-2 py-1 bg-gray-100" placeholder="exemplo@email.com" type="email" />
                        <label className="text-lg">Confirmar senha</label>
                        <input className="border-2 rounded-lg text-base font-normal text-gray-800 px-2 py-1 bg-gray-100" placeholder="**" type="confirmarSenha" />
                        <label className="text-lg">Senha</label>
                        <input className="border-2 rounded-lg text-base font-normal text-gray-800 px-2 py-1 bg-gray-100" placeholder="**" type="password" />
                        <button className="border-2 border-solid rounded-lg bg-orange-500 hover:bg-orange-600 border-orange-600 hover:border-orange-700 text-orange-100
                         p-1 mt-4 text-xl">Cadastrar</button>

                        
                        
                    </form>
                </div>
            </div>
        )
    }
    
  export default Cadastro;
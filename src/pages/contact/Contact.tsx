function Contact() {
  return (
    <>
      <div
        id="container-contact"
        className="grid grid-cols-2 w-5/6 mx-auto my-10 rounded-3xl bg-primary-orange"
      >
        {/* Left SIDE */}
        <div className="w-full p-4 m-6">
          {/* Entre em contato */}
          <div className="flex flex-col pb-4">
            <h1 className="font-bold text-3xl">Entre em contato conosco!</h1>
            <p>
              Encontrou um problema, tem sugestões ou quer nos ajudar? Entre em contato
              conosco!
            </p>
          </div>

          {/* Container Botoes */}
          <div className="grid grid-cols-2">
            {/* Container SOU */}
            <div>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Sou comprador
              </button>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Sou vendedor
              </button>
            </div>
            {/* Container Problemas */}
            <div>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Problemas com frete
              </button>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Problemas com entrega
              </button>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Problemas com produto
              </button>
              <button
                type="submit"
                className="rounded-xl bg-light-grayLight hover:bg-light-grayDark
              w-3/4 h-10 py-2 my-4 flex justify-center items-center"
              >
                Problemas com frete
              </button>
            </div>
          </div>
        </div>

        {/* Right SIDE */}
        <div className="w-full  place-items-center space-y-4 px-10 py-10">
          {/* Nome */}
          <div className="w-full flex flex-col">
            <label className="font-bold ml-2">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 bg-light-grayDark rounded-2xl p-2"
            />
          </div>
          {/* E-Mail */}
          <div className="w-full flex flex-col">
            <label className="font-bold ml-2">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Exemplo@email.com"
              className="border-2 bg-light-grayDark rounded-2xl p-2"
            />
          </div>
          {/* Telefone */}
          <div className="w-full flex flex-col">
            <label className="font-bold ml-2">Telefone</label>
            <input
              type="number"
              id="telefone"
              name="telefone"
              placeholder="(00) 90000-0000"
              className="border-2 bg-light-grayDark rounded-2xl p-2"
            />
          </div>
          {/* Descrição */}
          <div className="w-full flex flex-col">
            <label className="font-bold ml-2">Descrição</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Conte um pouco sobre seu problema."
              className="border-2 bg-light-grayDark rounded-2xl p-2 h-32"
            />
          </div>
          {/* Enviar */}
          <div className="w-full flex flex-col place-items-center">
            <button
              type="submit"
              className="rounded-2xl bg-light-grayLight hover:bg-light-grayDark
              w-2/4 py-2 flex justify-center"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

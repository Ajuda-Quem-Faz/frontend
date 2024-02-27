import { Buildings, Envelope, Phone } from '@phosphor-icons/react';
import { useState } from 'react';
import { ToastAlerta } from '../../utils/ToastAlerta';

function Contact() {
  const [tipoComprador, setTipoComprador] = useState('');
  const [problema, setProblema] = useState('');

  const envioForm = (e) => {
    ToastAlerta('Contato enviado com sucesso!', 'sucesso');
  };

  const onTipoCompradorChange = (e) => {
    setTipoComprador(e.target.value);
  };
  const onProblemaChange = (e) => {
    setProblema(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <div className=" flex flex-row text-3xl w-full justify-center py-6">
          <div className="flex flex-col md:w-full md:items-center gap-12 md:flex-col lg:flex-row">
            <div className=" bg-secondary-purple text-center rounded-3xl lg:w-1/3 md: w-[22rem] py-3 flex flex-col items-center justify-center text-primary-orange">
              <div className=" flex flex-row ">
                <Phone size={36} weight="regular" color="#ff9900" className="mb-1" />
                <h1 className="mb-4 text-3xl">Telefone</h1>
              </div>
              <p className="text-tertiary-blueLight text-xl">(11) 3317-2475</p>
              <p className="text-tertiary-blueLight text-xl">(11) 98226-5087</p>
            </div>
            <div className=" bg-secondary-purple text-center rounded-3xl lg:w-1/3 md: w-[22rem] py-3 flex flex-col items-center justify-center text-primary-orange">
              <div className="flex flex-row">
                <Envelope size={36} weight="regular" color="#ff9900" className="mb-1" />
                <h1 className="mb-4 text-3xl">Email</h1>
              </div>
              <p className="text-tertiary-blueLight text-xl pb-7">
                ajudaquemfaz@gmail.com
              </p>
            </div>
            <div className=" bg-secondary-purple text-center rounded-3xl lg:w-1/3 md: w-[22rem] py-3 flex flex-col items-center justify-center text-primary-orange">
              <div className="flex flex-row">
                <Buildings size={36} weight="regular" color="#ff9900" className="mb-1" />
                <h1 className="mb-4 text-3xl">Escritório</h1>
              </div>

              <p className="text-tertiary-blueLight text-xl">
                Rua Mafra 178, Parque Císper
              </p>
              <p className=" text-tertiary-blueLight text-xl">CEP: 03823-010</p>
            </div>
          </div>
        </div>

        <form
          id="container-contact"
          className="grid grid-cols-1 w-full md:rounded-3xl bg-secondary-purple lg:flex-cols-2 sm:flex"
          onSubmit={(event) => {
            event.preventDefault();
            ToastAlerta('Contato enviado com sucesso!', 'sucesso');
          }}
        >
          {/* Left SIDE */}
          <div className=" p-4 m-6">
            {/* Entre em contato */}
            <div className="flex flex-col pb-4">
              <h1 className="font-bold text-3xl text-primary-orange">
                Entre em contato conosco!
              </h1>
              <p className=" text-tertiary-blueLight">
                Encontrou um problema, tem sugestões ou quer nos ajudar? Entre em contato
                conosco!
              </p>
            </div>

            {/* Container Botoes */}
            <div className="grid grid-cols-1 text-secondary-purpleDark lg:grid-cols-2 gap-4">
              {/* Container SOU */}
              <div>
                <input
                  type="radio"
                  name="tipo_usuario"
                  onChange={onTipoCompradorChange}
                  id="comprador"
                  value={'comprador'}
                  className="hidden peer/comprador"
                />
                <label
                  htmlFor="comprador"
                  className="rounded-xl bg-tertiary-blue hover:bg-light-grayDark
               h-10 py-2 my-4 flex justify-center items-center focus:bg-primary-orange peer-checked/comprador:bg-primary-orange"
                >
                  Sou comprador
                </label>
                <input
                  type="radio"
                  name="tipo_usuario"
                  onChange={onTipoCompradorChange}
                  id="vendedor"
                  value={'vendedor'}
                  className="hidden peer/vendedor"
                />
                <label
                  htmlFor="vendedor"
                  className="rounded-xl bg-tertiary-blue hover:bg-light-grayDark
               h-10 py-2 my-4 flex justify-center items-center focus:bg-primary-orange peer-checked/vendedor:bg-primary-orange"
                >
                  Sou Vendedor
                </label>
              </div>
              {/* Container Problemas */}
              {tipoComprador != '' && (
                <div>
                  <input
                    type="radio"
                    name="tipo_contato"
                    onChange={onProblemaChange}
                    id="frete"
                    value={'frete'}
                    className="hidden peer/frete"
                  />
                  <label
                    htmlFor="frete"
                    className="rounded-xl bg-tertiary-blue hover:bg-light-grayDark
               h-10 py-2 my-4 flex justify-center items-center focus:bg-primary-orange peer-checked/frete:bg-primary-orange"
                  >
                    Problema com frete
                  </label>
                  <input
                    type="radio"
                    name="tipo_contato"
                    onChange={onProblemaChange}
                    id="entrega"
                    value={'entrega'}
                    className="hidden peer/entrega"
                  />
                  <label
                    htmlFor="entrega"
                    className="rounded-xl bg-tertiary-blue hover:bg-light-grayDark
               h-10 py-2 my-4 flex justify-center items-center focus:bg-primary-orange peer-checked/entrega:bg-primary-orange"
                  >
                    Problema com entrega
                  </label>
                  <input
                    type="radio"
                    name="tipo_contato"
                    onChange={onProblemaChange}
                    id="produto"
                    value={'produto'}
                    className="hidden peer/produto"
                  />
                  <label
                    htmlFor="produto"
                    className="rounded-xl bg-tertiary-blue hover:bg-light-grayDark
               h-10 py-2 my-4 flex justify-center items-center focus:bg-primary-orange peer-checked/produto:bg-primary-orange"
                  >
                    Problema com produto
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Right SIDE */}
          {tipoComprador != '' && problema != '' && (
            <div className="w-full sm:w-2/4 lg:2/4 place-items-center space-y-4 px-10 py-10 text-primary-orange ">
              {/* Nome */}
              <div className=" w-auto flex flex-col">
                <label className="font-bold ml-2">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  required
                  className="border-2 border-secondary-purpleLight bg-secondary-purpleDark rounded-2xl p-2 text-tertiary-blueLight"
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
                  className="border-2 border-secondary-purpleLight bg-secondary-purpleDark rounded-2xl p-2 text-tertiary-blueLight"
                  required
                />
              </div>
              {/* Telefone */}
              <div className="w-full flex flex-col">
                <label className="font-bold ml-2">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 90000-0000"
                  required
                  className="border-2 border-secondary-purpleLight bg-secondary-purpleDark rounded-2xl p-2 text-tertiary-blueLight"
                />
              </div>
              {/* Descrição */}
              <div className="w-full flex flex-col">
                <label className="font-bold ml-2">Descrição</label>
                <textarea
                  id="descricao"
                  rows={8}
                  name="descricao"
                  placeholder="Conte um pouco sobre seu problema."
                  required
                  className="border-2 border-secondary-purpleLight bg-secondary-purpleDark rounded-2xl p-2 text-tertiary-blueLight"
                />
              </div>
              {/* Enviar */}
              <div className="w-full flex flex-col place-items-center">
                <button
                  type="submit"
                  className="rounded-2xl bg-primary-orange hover:bg-light-grayDark
              w-2/4 py-2 flex justify-center text-secondary-purpleDark font-semibold"
                >
                  <span>Enviar</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;

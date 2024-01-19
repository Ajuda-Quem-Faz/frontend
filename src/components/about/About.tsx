function about() {
    return (
        <div id='container-about' className='grid grid-cols-3 bg-orange-500 p-3'>
            {/*Descrição Ajuda quem Faz*/}
            <div className='grid col-span-1 place-items-center w-full'>
                <h2 className='font-bold text-3xl'>Ajuda Quem Faz!</h2>
                <p> Descrição da ideia do nosso e-commerce. Descrição do nosso e-commerce. Descrição da ideia do nosso e-commerce.</p>
            </div>

            {/*Participantes*/}
            <div id='container-participants' className='grid col-span-2 place-items-center w-full'>
                <div className='w-full flex'>
                    <h3 className='font-bold text-xl'>Milhares de projetos sendo impulsinados por você!<br />Conheça quem faz:</h3>
                </div>
                <div id='carousel' className='grid grid-cols-2'>
                    <div className='bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2'>
                        <div className='grid place-items-center'>
                            <img src='https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg'
                                alt='Imagem Temporaria'
                                className='w-32 h-32 object-cover rounded-full'></img>
                        </div>
                        <div className='grid place-items-center'>
                            <h4 className='font-bold'>Zabo</h4>
                            <p>"Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece que piorou"</p>
                        </div>
                    </div>
                    <div className='bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2'>
                        <div className='grid place-items-center p-2'>
                            <img src='https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg' alt='Imagem Temporaria' className='w-32 h-32 object-cover rounded-full'></img>
                        </div>
                        <div className='grid place-items-center'>
                            <h4 className='font-bold'>Pablo</h4>
                            <p>"Alguem tira o Vitor do projeto"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
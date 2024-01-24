import React from 'react';

function About() {
  return (
    <>
      {/* Cards */}
      <div className="bg-violet-500 w-full grid grid-cols-3 place-items-center p-2">
        {/* Missão */}
        <div className="bg-orange-500 grid place-items-center">
          <h2 className="font-bold text-2xl">Missão</h2>
          <img src="https://static.thenounproject.com/png/526867-200.png"></img>
        </div>
        {/* Valores */}
        <div className="bg-orange-500 grid place-items-center">
          <h2 className="font-bold text-2xl">Valores</h2>
          <img src="https://static.thenounproject.com/png/526867-200.png"></img>
        </div>
        {/* Conquistas */}
        <div className="bg-orange-500 grid place-items-center">
          <h2 className="font-bold text-2xl">Conquistas</h2>
          <img src="https://static.thenounproject.com/png/526867-200.png"></img>
        </div>
      </div>

      {/* Historia */}
      <div className="bg-violet-800 w-full p-2 flex">
        <div>
          <h2 className="font-bold text-white">Nossa história:</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita
            amet asperiores ipsum neque excepturi. Labore quod asperiores reprehenderit,
            facere quaerat amet quam illum libero dolorum vel corporis pariatur magnam.
          </p>
        </div>
        <div>
          <img src="https://static.thenounproject.com/png/526867-200.png"></img>
        </div>
      </div>

      {/* Integrantes */}
      <div className="h-full">
        <div className="grid grid-cols-3">
          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>

          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>

          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>

          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>

          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1"></div>
          <div className="bg-purple-800 text-white grid grid-cols-2 rounded-3xl m-1 p-2">
            <div className="grid place-items-center">
              <img
                src="https://i.pinimg.com/474x/65/82/a8/6582a801819115700f246e35dc4338df.jpg"
                alt="Imagem Temporaria"
                className="w-32 h-32 object-cover rounded-full"
              ></img>
            </div>
            <div className="grid place-items-center">
              <h4 className="font-bold">Zabo</h4>
              <p>
                "Tava bom, agora ficou meio ruim também, não tava muito bom, agora parece
                que piorou"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

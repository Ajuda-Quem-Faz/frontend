export  const links = [
  {
    name: "Categorias",
    submenu: true,
    sublinks: [
      {
        Head: "Produtos",
        sublink: [
          { name: "Acessórios", link: "/" },
          { name: "Alimentos", link: "/" },
          { name: "Artesanato", link: "/" },
          { name: "Cosméticos", link: "/" },
          { name: "Decoração", link: "/" },
          { name: "Livros", link: "/" },
          { name: "Infantil", link: "/" },
          { name: "Moda", link: "/" },
          { name: "Pets", link: "/" },
          { name: "Reciclados", link: "/" },


        ],
      },
      {
          Head: "Instituições",
          sublink: [
            { name: "Assistência Social", link: "/" },
            { name: "Cultura", link: "/" },
            { name: "Saúde", link: "/" },
            { name: "Meio ambiente", link: "/" },
            { name: "Defesa de direitos", link: "/" },
            { name: "Habitação", link: "/" },
            { name: "Educação e Pesquisa", link: "/" },

          ],
        },
        {Head: "Listar todas as categorias",
        sublink: [
          {name: "Todas as Categorias", link: "/categorias"}
        ]
      }
      
    ],
  },
];

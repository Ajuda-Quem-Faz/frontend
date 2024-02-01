export const links = [
  {
    name: 'Categorias',
    submenu: true,
    sublinks: [
      {
        Head: 'Produtos',
        sublink: [
          { name: 'Alimentos', link: '/' },
          { name: 'Artesanais', link: '/' },
          { name: 'Roupas', link: '/' },
          { name: 'Pets', link: '/' },
        ],
      },
      {
        Head: "ONG's",
        sublink: [
          { name: 'Educação', link: '/' },
          { name: 'Ações', link: '/' },
          { name: 'Teste', link: '/' },
          { name: 'teste', link: '/' },
        ],
      },
      {
        Head: 'Listar todas as categorias',
        sublink: [{ name: 'Todas as Categorias', link: '/categorias' }],
      },
    ],
  },
];

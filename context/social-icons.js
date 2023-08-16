// context/images.js

// Função para importar dinamicamente as imagens da pasta 'public/images'
const importImages = (r) => {
  return r.keys().map((fileName) => ({
    fileName,
    url: r(fileName).default,
  }));
};

// Importa todas as imagens da pasta 'public/images'
const socialIcons = importImages(
  require.context("../public/icons/social/", false, /\.(png|jpe?g|svg)$/)
);

const images = importImages(require.context("../public/images"));

export default socialIcons;

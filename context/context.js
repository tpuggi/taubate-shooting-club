/**
 * Função para importar dinamicamente as imagens de uma pasta
 * para usar, apenas seguir o exemplo a seguir:
 * const imagens = importImages("../public/caminho/para/a/pasta/de/imagens", false, /\.(png|jpe?g|svg)$/ );
 */
const importImages = (r) => {
  return r
    .keys()
    .filter((fileName) => !fileName.includes("/contexts"))
    .map((fileName) => ({
      fileName,
      url: r(fileName).default,
    }));
};

export const socialIcons = importImages(
  require.context(
    "../public/contexts/footer-icons/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export const campsImages = importImages(
  require.context(
    "../public/contexts/camps-image/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

// export const coursesCarousel = importImages(
//   require.context(
//     "../public/contexts/courses-carousel/",
//     false,
//     /\.(png|jpe?g|svg)$/
//   )
// );

export const bigCarouselImages = importImages(
  require.context(
    "../public/contexts/big-carousel/",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

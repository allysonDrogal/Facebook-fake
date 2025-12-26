import { ContainerSponsored, ContentSponsored, DescriptionSponsered, ImgensSponsored, SubContentSponsored, SubTitleSponsored, TitleSponsored } from "./styles";

import gatoNoia from "../../../../assets/gatofuma.png"

export default function Sponsored() {
  const cardsSponsored = [
    {
      title: "Anúncio do Facebook",
      subtitle: "@github",
      description: "Conheça o GitHub Copilot, seu novo assistente de programação AI que ajuda você a escrever código mais rápido e com mais eficiência. Experimente agora!",
      image: gatoNoia,
      link: "https://www.github.com/allysonedu"
    }, 
    {
      title: "Anúncio do Facebook",
      subtitle: "@github",
      description: "Conheça o GitHub Copilot, seu novo assistente de programação AI que ajuda você a escrever código mais rápido e com mais eficiência. Experimente agora!",
      image: gatoNoia,
      link: "https://www.github.com/allysonedu"
    }
  ];
  return (
    <ContainerSponsored>
     <TitleSponsored>
      <h4>
        Patrocinado
      </h4>

      <a href="https://www.facebook.com/business/ads">Ver mais</a>
     </TitleSponsored>
    {cardsSponsored.map((card, index) => (
     <ContentSponsored key={index}>
        <SubTitleSponsored>
          <h5>{card.title}</h5>
        </SubTitleSponsored>
         
         <a style={{fontSize: '12px', marginBottom: '5px' }} href={card.link}>{card.subtitle}</a>
        <SubContentSponsored>
         <ImgensSponsored src={card.image} />

          <DescriptionSponsered>

            <p>{card.description}</p>

          </DescriptionSponsered>

        </SubContentSponsored>
     </ContentSponsored>
    ))}
    </ContainerSponsored>
  )
}
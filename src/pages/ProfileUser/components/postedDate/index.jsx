import { ContainerPostedDate, ContentDate, YearItem } from "./styles";

export default function PostedDate() {
  const currentYear = new Date().getFullYear();
  const startYear = 1900;
  
  const years = Array.from(
    { length: currentYear - startYear + 1 }, 
    (_, index) => currentYear - index
  );

  const handleYearClick = (year) => {
    console.log(`Ano clicado: ${year}`);
  };

  return (
    <ContainerPostedDate>
      <ContentDate>
        <YearItem onClick={() => handleYearClick('recente')}>
          Recente
        </YearItem>
        {years.map((year) => (
          <YearItem key={year} onClick={() => handleYearClick(year)}>
            {year}
          </YearItem>
        ))}
      </ContentDate>
    </ContainerPostedDate>
  )
}
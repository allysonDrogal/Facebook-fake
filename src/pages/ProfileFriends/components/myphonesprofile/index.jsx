import { ContainerMyPhonesProfile, ContentMyPhonesProfile, HeaderContentMyPhonesProfile, PhonesListProfile, TagsMorePhonesProfile } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import phone1 from "../../../../assets/phone1.jpg"
import phone2 from "../../../../assets/phone2.jpg"
import phone3 from "../../../../assets/phone3.jpg"
import gatofuma from "../../../../assets/gatofuma.png"

export default function MyPhonesProfile() {
  return (
    <ContainerMyPhonesProfile>
     <ContentMyPhonesProfile>
        <HeaderContentMyPhonesProfile>
          Fotos
        </HeaderContentMyPhonesProfile>
        <TagsMorePhonesProfile>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7580a3', cursor: 'pointer', fontWeight: 500 }}>
          <LocalOfferIcon style={{color: '#7580a3'}} /> 
            Ver mais fotos
          </div> 
        <CloseIcon style={{color: '#7580a3', marginRight: '15px', cursor: 'pointer'}} />
        </TagsMorePhonesProfile>
        <PhonesListProfile>
          <img src={phone1} />
          <img src={phone2} />
          <img src={phone3} />
          <img src={gatofuma} />
          <img src={phone2} />
          <img src={phone3} />
          <img src={phone1} />
          <img src={phone2} />
          <img src={phone3} />
          
        </PhonesListProfile>
     </ContentMyPhonesProfile>
    </ContainerMyPhonesProfile>
  )
}
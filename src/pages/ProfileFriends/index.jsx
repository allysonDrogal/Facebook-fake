import { Container, ProfileBanner, ProfileImage, ProfileName,FollowOrMessage, ButtonFollow, ContainerFollowers, ImageFollowers, ContainerAbout } from "./styles";
import imgProfile from "../../assets/profile.png"
import HeaderProfile from "../../components/header-profile";
import bannerProfile from "../../assets/bannerProfile.png"
import ButtonPage from '../../components/button-page/index';
import WorkIcon from '@mui/icons-material/Work';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import CottageIcon from '@mui/icons-material/Cottage';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import a from "../../assets/a.png"
import b from "../../assets/b.png"
import gatofuma from "../../assets/gatofuma.png"
import picapau from "../../assets/picapau.png"
import gatoblack from "../../assets/gatoblack.png"
import HeaderMain from "../../components/header-main-page";
export default function ProfileUsers() {
  return (
    <Container>
    <HeaderMain/>
      <ProfileBanner bannerUrl={bannerProfile}>
        <ProfileImage src={imgProfile} alt="Profile" />
        <ProfileName>Allyson Silva</ProfileName>
        <FollowOrMessage>
         <ButtonFollow>
            <RssFeedIcon style={{fontSize: '15px'}}/>
            Seguir
         </ButtonFollow> 
         <button style={{borderRight: 'solid 1px gray', height: '25px', width: '100px', fontWeight: 600, borderRadius: '3px 0 0 3px'}}>Mensagem</button>
         <button style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25px', borderRadius: '0 3px 3px 0'}}> <SettingsSharpIcon style={{fontSize: '15px', color: 'gray'}} /> <ArrowDropDownSharpIcon style={{fontSize: '25px', color: '#778391'}} /> </button>
        </FollowOrMessage>    
        <HeaderProfile />
      </ProfileBanner>

      <ContainerFollowers>
       <div style={{ marginLeft: '20px', marginTop: '15px' }}>
          <p style={{ display: 'flex', fontWeight: 500}}>
            <p style={{color: 'gray',  marginRight: '10px'}}>Siga Tal</p> para receber suas publicações publicas no seu Feed de noticias.
          </p>
          <div style={{ display: 'flex', gap: '2px', marginTop: '10px', alignItems: 'center' }}>
            <ImageFollowers src={a} alt="a" />
            <ImageFollowers src={b} alt="b" />
            <ImageFollowers src={imgProfile} alt="a" />
            <ImageFollowers src={gatofuma} alt="gatofuma" />
            <ImageFollowers src={picapau} alt="picapau" />
            <ImageFollowers src={gatoblack} alt="gatoblack" />
            <div style={{display: 'flex', gap: '5px', marginLeft: '15px', color: 'gray', fontWeight: 500}}>
             <p>2.015</p> <p>seguidores</p> 
            </div> 
          </div>
      </div>
      <ButtonPage variant="success" style={{ width: '6%', height: '30%', borderRadius: '2px', marginTop: '15px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
       <RssFeedIcon style={{fontSize: '15px'}} />  Seguir
      </ButtonPage>

      </ContainerFollowers>
       <div style={{ background: '#e8eaec', width: '100%', height: '100%' }}>
        <ContainerAbout>
        <header style={{ background: '#f5f7f9', padding: '10px', borderBottom: '1px solid #ddd' }}>
          <h4 style={{ color: 'gray'}}>Sobre</h4>
        </header>
        <div style={{ padding: '15px', fontSize: '14px', color: '#000000' }}>
            <p style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <WorkIcon style={{fontSize: '20px', color: 'gray' }}  /> Trabalha em:  <strong style={{color: '#4b657f'}}>Facebook Fake</strong>
            </p>
            <p style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <LocalConvenienceStoreIcon style={{fontSize: '20px', color: 'gray' }}  /> Estudou em:  <strong style={{color: '#4b657f'}}>Faculdade de Tecnologia do Estado de São Paulo - FATEC</strong>
            </p>
            <p style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center', gap: '5px' }}>
             <CottageIcon style={{fontSize: '20px', color: 'gray' }}  />  Morando em: <strong style={{color: '#4b657f'}}>São Paulo, Brasil</strong>
            </p>
            <p style={{ marginTop: '10px', paddingBottom: '10px', borderBottom: '1px solid #ddd',  display: 'flex', alignItems: 'center', gap: '5px' }}>
             <LocationPinIcon style={{fontSize: '20px', color: 'gray' }} />  De: <strong style={{color: '#4b657f'}}>São Paulo, Brasil</strong>
            </p>
            <p style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
             <RssFeedIcon style={{fontSize: '20px', color: 'gray' }}  />  Seguidores: <strong style={{color: '#4b657f'}}>2.015</strong>
            </p>
        </div>
        </ContainerAbout>
       </div>
    </Container>
  )
}
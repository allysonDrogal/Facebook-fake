import { Container, BannerVideo, ProfileImageUser, ProfileNameUser, ButtonFollowUser, ContainerFollowersUser, ImageFollowersUser, ContainerAboutUser, ProfileBannerUser, FollowOrMessageUser, ContentProfileUser, ContainerSponsoredUser } from "./styles";
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
import toji from "../../assets/toji.mp4"
import Traveled from "./components/traveled";
import Whattodo from "./components/whattodo";
import MyPhonesProfile from "./components/myphonesprofile";
import PostedDate from "./components/postedDate";
import Sponsored from "./components/sponsored";
export default function ProfileUsers() {
  return (
    <Container>
     <ContentProfileUser>
      <HeaderMain/>
        <ProfileBannerUser>
          <BannerVideo autoPlay loop muted>
            <source src={toji} type="video/mp4" />
          </BannerVideo>
          <ProfileImageUser src={gatoblack} alt="Profile" />
          <ProfileNameUser>Allyson Silva</ProfileNameUser>
          <FollowOrMessageUser>
          <ButtonFollowUser>
              Atualizar informações
          </ButtonFollowUser> 
          <button style={{borderRight: 'solid 1px gray', height: '25px', width: '160px', fontWeight: 600, borderRadius: '3px 0 0 3px'}}>Registro de atividades</button>
          <button style={{ width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25px', borderRadius: '0 3px 3px 0'}}> <SettingsSharpIcon style={{fontSize: '15px', color: 'gray'}} /> <ArrowDropDownSharpIcon style={{fontSize: '25px', color: '#778391'}} /> </button>
          </FollowOrMessageUser>    
          <HeaderProfile />
        </ProfileBannerUser>

        <div style={{ background: '#e8eaec', width: '100%', height: '100%' }}>
          
            <Traveled/>
            <Whattodo />
            <ContainerAboutUser>
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
                </div>
            </ContainerAboutUser>

            <MyPhonesProfile />
        </div>
     </ContentProfileUser>
      <ContainerSponsoredUser>
        <PostedDate/>
        <Sponsored />
      </ContainerSponsoredUser>
       
    </Container>
  )
}
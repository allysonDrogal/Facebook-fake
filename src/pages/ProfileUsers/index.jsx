import { Container, ProfileBanner, ProfileImage, ProfileName,FollowOrMessage, ButtonFollow, ContainerFollowers, ImageFollowers } from "./styles";
import imgProfile from "../../assets/profile.png"
import HeaderProfile from "../../components/header-profile";
import bannerProfile from "../../assets/bannerProfile.png"
import ButtonPage from '../../components/button-page/index';
import a from "../../assets/a.png"
import b from "../../assets/b.png"
import gatofuma from "../../assets/gatofuma.png"
import picapau from "../../assets/picapau.png"
import gatoblack from "../../assets/gatoblack.png"
export default function ProfileUsers() {
  return (
    <Container>
      <ProfileBanner bannerUrl={bannerProfile}>
        <ProfileImage src={imgProfile} alt="Profile" />
        <ProfileName>Allyson Silva</ProfileName>
        <FollowOrMessage>
         <ButtonFollow>Seguir</ButtonFollow>
         <ButtonFollow>Mensagem</ButtonFollow>
         <ButtonFollow>c</ButtonFollow>
        </FollowOrMessage>    
        <HeaderProfile />
      </ProfileBanner>

      <ContainerFollowers>
       <div style={{ marginLeft: '20px', marginTop: '15px' }}>
          <p style={{ display: 'flex', fontWeight: 500}}>
            <p style={{color: 'blueviolet',  marginRight: '10px'}}>Siga Tal</p> para receber suas publicações publicas no seu Feed de noticias.
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
      <ButtonPage variant="success" style={{ width: '5%', height: '30%', borderRadius: '2px', marginTop: '15px', marginRight: '20px' }}>
        Seguir
      </ButtonPage>

      </ContainerFollowers>
    </Container>
  )
}
import { ContainerHeaderMain, ImageFacebook } from "./styles";
import facebookLogo from "../../assets/imgFacebook.png";
import InputText from "../input-text";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import ForumSharpIcon from '@mui/icons-material/ForumSharp';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useAuth } from "../../shared/hooks/auth";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function HeaderMain() {
  const { signOut } = useAuth();

  return (
    <ContainerHeaderMain>
    <ImageFacebook src={facebookLogo}/>
    <InputText style={{ width: "296%", height: "31px", paddingRight: "45px" }} /> <SearchSharpIcon style={{ position: 'relative', left: '27%'}} />
    
    <a style={{position: 'relative', left: '40%', color: 'white', display: 'flex', alignItems: 'center'}} href="/home">
    <HomeSharpIcon style={{ color: 'white', fontSize: '25px', marginRight: '5px'}} />
     Home</a>

     <a style={{position: 'relative', left: '43%', color: 'white', display: 'flex', alignItems: 'center'}} href="/home">
    <AddPhotoAlternateIcon style={{ color: 'white', fontSize: '25px', marginRight: '5px'}} />
     Postar</a>
    <GroupSharpIcon style={{ position: 'relative', left: '55%', color: 'white'}} />
    <ForumSharpIcon style={{ position: 'relative', left: '55.5%', color: 'white'}} />
    <PublicSharpIcon style={{ position: 'relative', left: '56%', color: 'white'}} />
    <ExitToAppIcon style={{ position: 'relative', left: '57%', color: 'white', cursor: 'pointer'}} onClick={signOut}/>
      
    </ContainerHeaderMain>
  )
}
import { ContainerTraveled, TitleTraveled } from "./styles";
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Traveled() {
  return (
    <ContainerTraveled>
      <TitleTraveled>
        <AssistantPhotoIcon style={{ fontSize: '30px', marginRight: '5px', color: '#b0b1b7' }} />
        Você já viajou para vários lugares?
      </TitleTraveled>
      <ArrowForwardIosIcon style={{ fontSize: '20px', color: '#b0b1b7', marginRight: '25px', cursor: 'pointer' }} />
    </ContainerTraveled>
  )
}
import { ContainerWhatToDo, HeaderContent } from "./styles";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CollectionsIcon from '@mui/icons-material/Collections';
import PinDropIcon from '@mui/icons-material/PinDrop';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Whattodo() {
 return (
  <ContainerWhatToDo>
    <HeaderContent>
     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <ReceiptLongIcon style={{ fontSize: '25px', marginRight: '8px', color: '#4b657f' }} /> Status
     </div>

     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <CollectionsIcon style={{ fontSize: '25px', marginRight: '8px', color: '#4b657f' }} /> Fotos
     </div>

     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <PinDropIcon style={{ fontSize: '25px', marginRight: '8px', color: '#4b657f' }} /> Localização
     </div>

     <div style={{ display: 'flex', alignItems: 'center', marginLeft: '15px'}}>
      <AutoStoriesIcon style={{ fontSize: '25px', marginRight: '8px', color: '#4b657f' }} /> Evento de vida
     </div>
    </HeaderContent>
    <div style={{
    width: '100%',
    height: '60%',
    paddingTop: '11px',
    paddingLeft: '11px'}}>
      O que você quer fazer?
    </div>
  </ContainerWhatToDo>
 )
}
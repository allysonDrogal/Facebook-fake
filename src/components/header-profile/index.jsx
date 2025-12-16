import { MenuItem, ProfileHeader } from "./styles";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';




export default function HeaderProfile() {


  return (
    <ProfileHeader>
      <MenuItem>
        Linha do tempo
      </MenuItem>
      <MenuItem>
        Sobre
      </MenuItem>
      <MenuItem>
        Fotos
      </MenuItem>
      <MenuItem>
        Amigos
      </MenuItem>
      <MenuItem>
        Mais
        <ArrowDropDownSharpIcon />
      </MenuItem>

    </ProfileHeader>
  )
}
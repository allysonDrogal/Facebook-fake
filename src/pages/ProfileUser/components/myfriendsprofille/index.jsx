import { ContainerMyFriendsProfile, ContentMyFriendsProfile, HeaderContentMyFriendsProfile, FriendsListProfile, FriendCard, FriendName } from "./styles";

import phone1 from "../../../../assets/phone1.jpg"
import phone2 from "../../../../assets/phone2.jpg"
import phone3 from "../../../../assets/phone3.jpg"
import gatofuma from "../../../../assets/gatofuma.png"

const friends = [
   {
    name: 'Mike Anderson',
    photo: phone1
  },
  {
    name: 'Julia Roberts',
    photo: phone2
  },
  {
    name: 'John Smith',
    photo: phone3
  },
  {
    name: 'Emily Johnson',
    photo: gatofuma
  },
  {
    name: 'Julia Roberts',
    photo: phone2
  },
  {
    name: 'John Smith',
    photo: phone3
  },
  {
    name: 'Mike Anderson',
    photo: phone1
  },
  {
    name: 'Julia Roberts',
    photo: phone2
  },
  {
    name: 'John Smith',
    photo: phone3
  }
]


export default function MyFriendsProfile() {
  return (
    <ContainerMyFriendsProfile>
     <ContentMyFriendsProfile>
        <HeaderContentMyFriendsProfile>
          Amigos
        </HeaderContentMyFriendsProfile>
        <FriendsListProfile>
          {friends.map((friend, index) => (
            <FriendCard key={index}>
              <img src={friend.photo} alt={friend.name} />
              <FriendName>{friend.name}</FriendName>
            </FriendCard>
          ))}
        </FriendsListProfile>
     </ContentMyFriendsProfile>
    </ContainerMyFriendsProfile>
  )
}
import { CommentContainer, CommentInput, ContainerOfComments, ContainerOfLikes, ContainerOfLikesCommentsShares, HeaderFeed, HeaderFeedComments, ImgHeaderFedd, ImgHeaderFeddComments, InputWrapper, MyFeedProfileContainer, MyFeedProfileContent, PublishedFeed, TitleFeed, TitleNameFeed, TitleNameFeedComments } from "./styles";
import ImgProfileFeed from "../../../../assets/gatofuma.png";
import Profile from "../../../../assets/profile.png";

import GroupIcon from '@mui/icons-material/Group';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import Gatoblack from "../../../../assets/gatoblack.png"


const opa = 'Mike Anderson, Julia Roberts';

const FeedComments = [
  {
  photo: Gatoblack,
  name: 'Allyson Silva',
  comment: 'Esse gato é vida loka msm emm',
  time: 'Há 1 hora',
  likes: 12
}, 
{
  photo: Profile,
  name: 'Julia Roberts',
  comment: 'Que fofura de gato, amei!',
  time: 'Há 2 horas',
  likes: 8
}
]

const MyProfileContainer = [
  {
   photo: Gatoblack,
   name: 'Allyson Silva',
   descriptionTitleFeed: 'Esse é o meu gato Fumaça, ele é muito brincalhão, estou doando ele para quem quiser adotar um companheiro fiel!',
   timePost: 'Há 3 horas',
   likesPost: 52,
   publishedFeed: ImgProfileFeed,
   typePublication: 'Atualizou a foto do perfil'
  },
  {
    photo: Profile,
    name: 'Julia Roberts',
    descriptionTitleFeed: 'Adotei esse gatinho das ruas, ele é super carinhoso e adora brincar com bolinhas de papel!',
    timePost: 'Há 1 hora',
    likesPost: 34,
    publishedFeed: ImgProfileFeed,
    typePublication: 'Compartilhou uma foto'
  }
]

export default function MyFeedProfile() {
  return (
    <MyFeedProfileContainer>
    {MyProfileContainer.map((item, index) => (

     <MyFeedProfileContent key={index}>
        <HeaderFeed>
         <ImgHeaderFedd src={item.photo} />
         <TitleNameFeed>
          <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <div style={{color: '#4b657f'}}>
            {`${item.name}`} 
            </div>
            <div style={{color: '#b0adae', fontSize: '15px'}}>
              {`${item.typePublication}` }{/**o tipo da publicação */}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px', color: '#b0adae' }}>
            <p style={{ fontSize: '13px'}}>{`${item.timePost}`}</p> <GroupIcon style={{ fontSize: '13px'}} />
          </div>
         </TitleNameFeed>
        </HeaderFeed>

        <TitleFeed>
          <div>
            {`${item.descriptionTitleFeed}`}
          </div> {/**pode haver um titulo ou não */}
        </TitleFeed>
         <PublishedFeed src={item.publishedFeed} />

        <ContainerOfLikesCommentsShares>
           <div style={{ color:'#3e5f91ff',marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'}}>
            <ThumbUpIcon /> Curtir
           </div>
            <div style={{ color:'#3e5f91ff',marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'}}>
            <CommentIcon /> Comentar
           </div>
            <div style={{  color:'#3e5f91ff',marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'}}>
            <ShareIcon /> Compartilhar
           </div>
        </ContainerOfLikesCommentsShares>
        <ContainerOfLikes>
            <div style={{ marginLeft: '15px', display: 'flex', alignItems: 'center', gap: '5px', color: '#4b657f' }}>
             {`${opa} e outras ${item.likesPost} pessoas curtiram isso.`}
            </div>
        </ContainerOfLikes>
         <div style={{width: '100%', marginTop: '10px', marginBottom: '10px', padding: '5px', color: 'rgba(27, 93, 160, 1)', cursor: 'pointer'}}>
          Ver mais comentários {/** so vai aparecer caso tenha mais comentarios */}

         </div>
        {FeedComments.map((item, index) => (
          <ContainerOfComments key={index}>
            <HeaderFeedComments>
              <ImgHeaderFeddComments src={item.photo} />
                <TitleNameFeedComments>
                  <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                    <div style={{color: '#4b657f'}}>
                    {`${item.name}`} 
                    </div>
                    <div style={{color: '#222222ff', fontSize: '15px'}}>
                      {`${item.comment}` }
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px', color: '#b0adae' }}>
                    <p style={{ fontSize: '13px'}}>{`${item.time}`}</p>  <ThumbUpIcon style={{ fontSize: '15px', color: '#3e5f91ff' }} /> {`${item.likes}`}
                  </div>
                </TitleNameFeedComments>
           </HeaderFeedComments>
          </ContainerOfComments>
        ))}
       <ContainerOfComments>
        <HeaderFeedComments>
          <CommentContainer>
          <ImgHeaderFeddComments src={Profile} />
          <InputWrapper>
            <CommentInput placeholder="Escreva um comentário..." />
            <LocalSeeIcon style={{ position: 'absolute', right: '10px', color: '#999', cursor: 'pointer' }} /> {/* depois adicionar uma funcionalidade qua faz com que quando a pessoa tiver digitando ele mude o icon*/}
          </InputWrapper>
        </CommentContainer>
        </HeaderFeedComments>

       </ContainerOfComments>

     </MyFeedProfileContent>
    ))}
    </MyFeedProfileContainer>
  )
}
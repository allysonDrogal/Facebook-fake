import ButtonPage from "../../components/button-page";
import InputText from "../../components/input-text";
import { Container, Content, Form, Form_1, ImageText } from "./styles";
import imgLogin from "../../assets/imageFace.png"

export default function Login() {
  return (
    <Container>
      <Content>
        <ImageText>
          <h1>No Facebook você se conecta e compartilha o que quiser com quem é importante em sua vida.</h1>

          <img 
          style={{width: '80%', marginLeft: '10%', transform: 'scaleY(0.8)' }} 
          src={imgLogin} alt="" 
            
          />
        </ImageText>

        <Form>
        <div style={{ marginLeft: '8px', marginBottom: '10px'}}>
          <h2>Abra uma conta</h2>
          <br />
          <h4>É gratuito e sempre será.</h4>
        </div>
          <Form_1>
            <InputText
              type="text"
              placeholder="Nome"

            />
            <InputText
              type="text"
              placeholder="Sobrenome"

            />
          </Form_1>
           <InputText
              type="text"
              placeholder="E-mail ou número de celular"

            />
            <InputText
              type="text"
              placeholder="Insira novamente o e-mail ou número de celular"

            />
            <InputText
              type="text"
              placeholder="Nova senha"

            />
        </Form>
      </Content>
    </Container>
  )
}
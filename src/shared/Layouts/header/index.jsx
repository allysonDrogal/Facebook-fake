import ButtonPage from "../../../components/button-page";
import { Input } from "../../../components/input-text/styles";
import { Container, FormLogin } from "./styles";

export default function HeaderBase() {
  return (
    <Container>
      <h1 style={{ color: 'white', marginLeft: '11%', marginTop: '32px' }}>Facebook Fake</h1>

      <FormLogin>
            <div style={{color: '#fff', fontSize: '15px'}}>
             <label htmlFor="email" style={{color: 'white', fontSize: '14px', marginBottom: '4px'}}>
                Email ou telefone
             </label>
             <Input  style={{height: '24px'}}/>
             <input style={{ marginTop: '3px'}} type="checkbox" /> Manter conectado
            </div>
            <div style={{color: '#fff', fontSize: '15px'}}>
             <label htmlFor="email" style={{color: 'white', fontSize: '14px', marginBottom: '4px'}}>
                Email ou telefone
             </label>
             <Input  style={{height: '24px'}}/>
             <input style={{ marginTop: '3px'}} type="checkbox" /> Esqueceu a senha?
            </div>

            <ButtonPage style={{height: '28px', width: '75px'}}>
              Entrar
            </ButtonPage>
      </FormLogin>
    </Container>
  )
}
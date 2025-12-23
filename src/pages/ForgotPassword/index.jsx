import { useCallback, useState } from "react";
import ButtonPage from "../../components/button-page";
import InputText from "../../components/input-text";
import { Container, Content, FormForgotPassword, Title } from "./styles";
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../api/Users";
import { useSnackbar } from "../../shared/hooks/SnackbarProvider";

export default function ForgotPassword() {
   const { showMessage } = useSnackbar();
  const [ formData, setFormData ] = useState({
    email: '',
  });
  const navigate = useNavigate();

  const handleSubmitForgotPassword = useCallback(async (e) => {
    e.preventDefault();
    try {
      await forgotPassword({ email: formData.email });
      showMessage('Instruções para redefinir sua senha foram enviadas para o seu e-mail.', { severity: 'success' });
      navigate('/');
    } catch (error) {
      console.error("Error during forgot password:", error);
    }
  }, [formData.email, navigate]);
  return (
    <Container>
      <Content>    
       <Title>
         <h3>Encontre sua conta</h3>
       </Title>
       <div style={{ border: 'solid 1.5px #ccc', margin: '0 20px' }}/>
       <FormForgotPassword onSubmit={handleSubmitForgotPassword}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <label htmlFor="email" style={{ color: '#363538', marginBottom: '8px', marginTop: '20px' }}>Por favor, informe seu e-mail para pesquisar sua conta.</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
           <EmailIcon style={{ fontSize: '39px', color: '#d1dbe8' }}/>
           <InputText type="text" id="email" name="email" style={{width: '178%', height: '30px', borderRadius: '2px', paddingLeft: '10px', background: '#fafebf' }}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
           />
          </div>
        </div>

        <div style={{ width: '100%', background: '#f2f2f2', height: '45px', borderTop: '1px solid #ccc', marginTop: '47px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
 
          <a  href="/" >
             Não consigo identificar minha conta
          </a>
          <div style={{ gap: '10px', display: 'flex'}}>
           <ButtonPage
              type="submit"
              style={{ height: '28px', width: '105px', borderRadius: '2px' }}>
              Pesquisar
            </ButtonPage>

             <ButtonPage
              onClick={() => navigate('/')}
              style={{ height: '28px', width: '105px', borderRadius: '2px', background: '#e4e6eb', color: '#050505' }}>
              Cancelar
            </ButtonPage>
          </div>
        </div>

       </FormForgotPassword>
      </Content>
    </Container>
  )
}
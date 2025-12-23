import ButtonPage from "../../components/button-page";
import InputText from "../../components/input-text";
import { Container, Content, FormResetPassword, Title } from "./styles";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import computerImg from "../../assets/a.png";
import { useSnackbar } from "../../shared/hooks/SnackbarProvider";
import { useCallback, useState } from "react";
import { resetPassword } from "../../api/Users";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function ResetPassword() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const { showMessage } = useSnackbar();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmitResetPassword = useCallback(async (e) => {
    e.preventDefault();
    
    // Validação das senhas
    if (formData.password !== formData.confirmPassword) {
      showMessage('As senhas não coincidem.', { severity: 'error' });
      return;
    }

    // Pegar o token da URL
    const token = searchParams.get('token');
    
    if (!token) {
      showMessage('Token inválido ou ausente.', { severity: 'error' });
      return;
    }

    try {
      await resetPassword({
        token: token,
        newPassword: formData.password,
      });
      showMessage('Senha redefinida com sucesso!', { severity: 'success' });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      showMessage('Erro ao redefinir a senha. Por favor, tente novamente.', { severity: 'error' });
    }
   }, [formData.password, formData.confirmPassword, searchParams, showMessage, navigate])
  
  return (
    <Container>
      <Content>
        <Title>
          <h3>Redefinir sua senha</h3>
        </Title>
        <div style={{ border: 'solid 1.5px #ccc', margin: '0 20px' }} />
        <FormResetPassword onSubmit={handleSubmitResetPassword}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
              <h4 style={{ marginBottom: '25px' }}>
                Como você deseja redefinir sua senha?
              </h4> 
               <label htmlFor="password" style={{ marginLeft: '31px' }}>Nova senha</label>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <LockOpenIcon style={{ fontSize: '20px', color: '#3a5696', marginRight: '3px' }} />
                <InputText type="password" id="password" name="password" style={{ marginRight: '10px', height: '28px', width: '300px' }}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                 />
              </div>
               <label htmlFor="confirmPassword" style={{ marginLeft: '31px' }}>Confirmar nova senha</label>
               <div style={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenIcon style={{ fontSize: '20px', color: '#3a5696', marginRight: '3px' }} />
                <InputText type="password" id="confirmPassword" name="confirmPassword" style={{ marginRight: '10px', height: '28px', width: '300px' }} 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <div style={{ paddingRight: '40px', paddingLeft: '40px', paddingTop: '17px', borderLeft: 'solid 2px #ccc', marginTop: '20px', height: '200px' }}>
              <img src={computerImg} alt="computer" style={{ width: '150px' }} />
              <div style={{ marginBottom: '5px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <p>
                  nome de usuário
                </p>
              </div>
            </div>
        </div>


          <div style={{ width: '100%', background: '#f2f2f2', height: '50px', borderTop: '1px solid #ccc', marginTop: '7px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>

            <a href="/" >
              Não consigo identificar minha conta
            </a>
            <div style={{ gap: '10px', display: 'flex' }}>
              <ButtonPage
                type="submit"
                style={{ height: '28px', width: '105px', borderRadius: '2px' }}>
                Continuar
              </ButtonPage>

              <ButtonPage
                type="button"
                onClick={() => navigate('/')}
                style={{ height: '28px', width: '135px', borderRadius: '2px', background: '#e4e6eb', color: '#050505' }}>
                Não é você?
              </ButtonPage>
            </div>
          </div>

        </FormResetPassword>
      </Content>
    </Container>
  )
}
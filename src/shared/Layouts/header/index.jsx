import { Link, useNavigate } from "react-router-dom";
import ButtonPage from "../../../components/button-page";
import { Input } from "../../../components/input-text/styles";
import { Container, FormLogin } from "./styles";
import { useCallback, useState } from "react";
import { useAuth } from "../../hooks/auth";

export default function HeaderBase() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmitLogin = useCallback(async (e) => {
    e.preventDefault();
    try {
      await login({ email: formData.email, password: formData.password });
      navigate('/profile-user');
    } catch (error) {
      console.error("Error during login:", error);
    }
  }, [formData, login, navigate]);

  return (
    <Container>
      <h1 style={{ color: 'white', marginLeft: '11%', marginTop: '32px' }}>Facebook Fake</h1>

      <FormLogin onSubmit={handleSubmitLogin}>
        <div style={{ color: '#fff', fontSize: '15px' }}>
          <label htmlFor="email" style={{ color: 'white', fontSize: '14px', marginBottom: '4px' }}>
            Email ou telefone
          </label>
          <Input
            style={{ height: '24px' }}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input style={{ marginTop: '3px' }} type="checkbox" /> Manter conectado
        </div>
        <div style={{ color: '#fff', fontSize: '15px' }}>
          <label htmlFor="email" style={{ color: 'white', fontSize: '14px', marginBottom: '4px' }}>
            Senha
          </label>
          <Input style={{ height: '24px', marginBottom: '4px' }}
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <Link to="/forgot-password">Esqueceu a senha?</Link>
        </div>

        <ButtonPage
          type="submit"
          style={{ height: '28px', width: '75px' }}>
          Entrar
        </ButtonPage>
      </FormLogin>
    </Container>
  )
}
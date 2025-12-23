import ButtonPage from "../../components/button-page";
import InputText from "../../components/input-text";
import { Container, Content, Form, Form_1, ImageText } from "./styles";
import imgLogin from "../../assets/imageFace.png"
import { Button } from "../../components/button-page/styles";
import HeaderBase from "../../shared/Layouts/header";
import { useState } from "react";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useCallback } from "react";
import { RegisterUser } from "../../api/Users";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [value, setValue] = useState(null);
  const [ formData, setFormData ] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    birthDate: '',
    gender: 0,
  });
  const navigate = useNavigate();


  const handleSubmitUsersRegister = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        birthDate: value ? value.format('YYYY-MM-DD') : '',
      };
      await RegisterUser(dataToSend);
      navigate('/profile');
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  }

  return (
    <Container>
      <Content>
        <ImageText>
          <h1 style={{ color: '#464e5a', fontSize: '24px', width: '72%'}}>No Facebook você se conecta e compartilha o que quiser com quem é importante em sua vida.</h1>

          <img 
          style={{width: '80%', marginLeft: '10%', transform: 'scaleY(0.8)' }} 
          src={imgLogin} alt="" 

          />
        </ImageText>

        <Form onSubmit={handleSubmitUsersRegister}>
        <div style={{ marginLeft: '8px', marginBottom: '10px'}}>
          <h2>Abra uma conta</h2>
          <br />
          <h4>É gratuito e sempre será.</h4>
        </div>
          <Form_1>
            <InputText
              type="text"
              placeholder="Nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}

            />
            <InputText
              type="text"
              placeholder="Sobrenome"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}

            />
          </Form_1>
           <InputText
              type="text"
              placeholder="E-mail ou número de celular"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}

            />
            <InputText
              type="text"
              placeholder="Insira novamente o e-mail ou número de celular"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <InputText
              type="text"
              placeholder="Nova senha"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}

            />
            <div style={{ marginTop: '10px', marginLeft: '10px', display: 'flex'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoContainer>
              </LocalizationProvider>
              <p style={{ fontSize: '12px', color: '#65676b', marginTop: '10px', marginLeft: '10px', width: '25%'}} >
                Por que preciso informar minha data de nascimento?
              </p>
            </div>
            <div style={{ gap: '10px', display: 'flex', marginLeft: '10px', marginTop: '10px'}}>
              <div>
               <input style={{ marginTop: '3px'}} type="checkbox" /> Feminino
              </div>
              <div>
               <input style={{ marginTop: '3px'}} type="checkbox" /> Masculino
              </div>
            </div>


            <p style={{ fontSize: '12px', color: '#65676b', marginTop: '10px', marginLeft: '10px', width: '80%'}}>
              Ao clicar em Abrir uma conta, você concorda com nossos Termos, Política de Dados e Política de Cookies. Você pode receber notificações por SMS e pode optar por não recebê-las quando quiser.
            </p>
            <ButtonPage 
              variant="success"
              type="submit"
              style={{ marginTop: '10px', width: '50%', marginLeft: '10px'}}
            >Abrir uma conta</ButtonPage>
        </Form>
      </Content>
    </Container>
  )
}
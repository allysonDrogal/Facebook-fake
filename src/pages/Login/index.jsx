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


export default function Login() {

  const [value, setValue] = React.useState(null);

  return (
    <Container>
     <HeaderBase />
      <Content>
        <ImageText>
          <h1 style={{ color: '#464e5a', fontSize: '24px', width: '72%'}}>No Facebook você se conecta e compartilha o que quiser com quem é importante em sua vida.</h1>

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
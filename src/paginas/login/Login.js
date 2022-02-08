import React, { useState } from 'react';
import './Login.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

import { useHistory } from 'react-router-dom';


function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    );
  }

function BasicButtons({setErrorEmail,setErrorSenha,email,senha,setErrorLabelEmail,setErrorLabelSenha}) {

    const emailvalido = 'fabio@email.com'
    const senhaValida = '123'
    const background = ' linear-gradient(90deg, rgba(13,117,48,1) 26%, rgba(0,212,255,1) 100%);'
    const h = useHistory()
    const logar = ()=>{
        if(email !== emailvalido){
            setErrorEmail(true)
            setErrorLabelEmail('Email invalido')
        }else{
            setErrorEmail(false)
            setErrorLabelEmail('E-mail')
        }
        
        if(senha !== senhaValida){
            setErrorSenha(true)
            setErrorLabelSenha('Senha invalida')
        }else{
            setErrorSenha(false)
            setErrorLabelSenha('Senha')
        }
        if(email === emailvalido && senha === senhaValida){
           h.push('/')
        }
    }
  
    return (
      <Stack spacing={2} direction="row">
        <Button
           id='btn'
           onClick={logar} 
           sx={{background:background,width: '345px',height:'7ch',margin:'10px 0px'}} variant="contained">
           Logar
        </Button>
      </Stack>
    );
  }

function FormPropsTextFields() {
    const [errorEmail,setErrorEmail] = useState(false)
    const [errorSenha,setErrorSenha] = useState(false)
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [errorLabelEmail,setErrorLabelEmail] = useState('E-mail')
    const [errorLabelSenha,setErrorLabelSenha]=useState('Senha')
    const h = useHistory()
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '350px',height:'40px' },
        }}
        noValidate
        autoComplete="off"
      >
          <div className='formularioLogin'>
          <h1 className='loginTitle'>Login</h1>  

          <TextField
            error={errorEmail}
            id="outlined-required"
            label={errorLabelEmail}
            defaultValue={email}
            onChange={e=>setEmail(e.target.value)}
            
          />
      
          <TextField
            error={errorSenha}
            id="outlined-password-input"
            label={errorLabelSenha}
            type="password"
            autoComplete='current-password'
            defaultValue={senha}
            onChange={e=>setSenha(e.target.value)}
          />

          <div className='checkBox'>
                <ControlledCheckbox/>
                <span>relembre-me</span>
          </div>

          <BasicButtons 
                setErrorEmail={setErrorEmail}
                setErrorSenha={setErrorSenha}
                email={email}
                senha={senha} 
                setErrorLabelEmail={setErrorLabelEmail}
                setErrorLabelSenha={setErrorLabelSenha}
          />
          <div>
              Não tem conta? 
              <span 
                className='registroLink'
                onClick={()=>h.push('cadastro')}
              >Registre-se aqui</span>
          </div>
        </div>
      </Box>
    );
  }

export default function Login()

{
  return <div className='login'>
      <FormPropsTextFields/>
  </div>;
}

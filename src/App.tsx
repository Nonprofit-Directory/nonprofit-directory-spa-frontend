
import { RouterProvider, useNavigate } from 'react-router-dom'
import './App.css'
import { router } from './routes/router'
//
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';

Amplify.configure(outputs);

function App() {

  const { route } = useAuthenticator(c => [c.route])
  const navigate = useNavigate()

  // cuando el estado cambia a "authenticated", redirige
  useEffect(() => {
    if (route === 'authenticated') {
      navigate('/home', { replace: true })
    }
  }, [route])

  return <Authenticator
  initialState="signUp"
  formFields={{
    signIn: {
      username: {
        label: 'Correo electrónico',
        placeholder: 'tu@correo.com',
      },
      password: {
        label: 'Contraseña',
        placeholder: '••••••••',
      },
    },
    signUp: {
      username: {
        label: 'Correo electrónico',
        placeholder: 'tu@correo.com',
      },
      password: {
        label: 'Contraseña',
        placeholder: '••••••••',
      },
      confirm_password: {
        label: 'Confirma tu contraseña',
      },
      name: {
        label: 'Nombre completo',
        placeholder: 'Tu nombre',
      },
      'custom:userType': {
        label: 'Tipo de usuario',
        placeholder: '—',
        order: 5,
        // lo podemos ocultar dejando disabled y llenándolo por código
        defaultValue: "user" 
        
      },
    },
  }}
  hideSignUp={false} // muéstralo o no según quieras
>
        <RouterProvider router={router} />
    </Authenticator>
}

export default App

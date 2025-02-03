import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Authenticator } from '@aws-amplify/ui-react';
import './index.css'
import App from './App.tsx'
import App1 from './App1.tsx'
import '@aws-amplify/ui-react/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Authenticator>
      <App />
      <App1 />
    </Authenticator>
  </StrictMode>,
)


  
{/* <React.StrictMode>
<Authenticator>
  <App />
</Authenticator>
</React.StrictMode> */}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './firebase';
// import RealTime from './RealTime';
import AuthEmailPassword from './AuthEmailPassword';
// import DyEmailPass from './DyEmailPass';
// import FireStore from './FireStore';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* < RealTime /> */}
    {/* <FireStore/> */}
    <AuthEmailPassword/>
    {/* <DyEmailPass/> */}
  </StrictMode>
);

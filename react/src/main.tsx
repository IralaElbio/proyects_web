import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from './App.tsx'
import theme from "./theme";
import '@fontsource/roboto/300.css';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)

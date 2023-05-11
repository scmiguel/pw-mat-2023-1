import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/ui/topbar'
import theme from './utils/theme'
import { ThemeProvider, Box, CssBaseline } from '@mui/material'
import FooterBar from './components/ui/footerbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Box sx={{width: '100vw', height: '100vh', backgroundColor: 'background.default'}}>
            <TopBar />
            <Box sx={{margin: '25px 25px 55px 25px' }}>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
              </Routes>
            </Box>
            <FooterBar />
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
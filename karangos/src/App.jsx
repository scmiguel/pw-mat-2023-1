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
import CustomersList from './pages/CustomersList'
import CustomersForm from './pages/CustomersForms'
import CarsList from './pages/CarsList'
import CarsForm from './pages/CarsForms'
import Autor from './pages/Autor'
import './App.css'

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
                <Route path='/customers' element={<CustomersList/>}/>
                <Route path='/customers/new' element={<CustomersForm/>}/>
                <Route path='/customers/:id' element={<CustomersForm/>}/>
                <Route path='/cars' element={<CarsList/>}/>
                <Route path='/cars/new' element={<CarsForm/>}/>
                <Route path='/cars/:id' element={<CarsForm/>}/>
                <Route path='/autor' element={<Autor/>}/>
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
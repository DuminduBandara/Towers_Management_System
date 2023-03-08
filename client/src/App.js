import { Box, CssBaseline, ThemeProvider } from '@mui/material';
// import { themeSettings } from 'theme';
import Typography from '@mui/material/Typography';
import customTheme from 'customTheme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import views
import Dashboard from 'View/dashboard';
import Layout from 'View/layout';
import FinanceDashboard from 'View/finance/';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/financial" element={<FinanceDashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

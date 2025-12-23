import { HashRouter } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from "./shared/styles/GlobalStyles"
import AppRoutes from "./routes";
import { AuthProvider } from "./shared/hooks/auth";
import SnackbarProvider from "./shared/hooks/SnackbarProvider";

function App() {
    return (
    <>
    <AuthProvider>
    <SnackbarProvider>
      <GlobalStyles />
          <HashRouter>
          <AppRoutes />
        </HashRouter>
    </SnackbarProvider>
    </AuthProvider>
    </>
  )
}

export default App

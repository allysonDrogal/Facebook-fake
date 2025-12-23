import { HashRouter } from "react-router-dom";
//import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from "./shared/styles/GlobalStyles"
import AppRoutes from "./routes";
import { AuthProvider } from "./shared/hooks/auth";

function App() {
    return (
    <>
    <AuthProvider>
      <GlobalStyles />
          <HashRouter>
          <AppRoutes />
        </HashRouter>
    </AuthProvider>
    </>
  )
}

export default App

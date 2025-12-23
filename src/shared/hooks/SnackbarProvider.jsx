import React, { createContext, useState, useContext, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarContext = createContext(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  return context;
};

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');

  const showMessage = useCallback((message, options = {}) => {
    setMessage(message);
    setSeverity(options?.severity || 'info');
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar 
        open={open} 
        autoHideDuration={5000} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
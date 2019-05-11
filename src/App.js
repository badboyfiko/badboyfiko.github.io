import React from 'react';
import './App.css';
import Form from './Form'
import {ThemeProvider} from 'styled-components'
import theme from './theme'

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <Form />
        </ThemeProvider>
    </div>
  );
}

export default App;

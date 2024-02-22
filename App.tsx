import React from 'react';
import { Text, View } from 'react-native';
import LoginCliente from './src/login/LoginCliente';
import LoginAdm from './src/login/LoginAdm';
import LoginServico from './src/login/LoginProfissional';


function App(): JSX.Element {

    return (
      
     // <LoginCliente />

      //<LoginAdm />

      <LoginServico />
      
    );
}

export default App;
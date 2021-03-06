import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import App from './views/App';
import Componentes from './views/Componentes';
import Acoes from './views/Acoes';
import * as serviceWorker from './serviceWorker';
import AcaoForm from './views/AcaoForm';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/componentes" exact={true} component={Componentes} />
        <Route path="/acoes" exact={true} component={Acoes} />
        <Route path="/acoes/novo" exact={true} component={AcaoForm} />
        <Route path="/acoes/:id/editar" exact={true} component={AcaoForm} />
    </Switch>
  </ BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

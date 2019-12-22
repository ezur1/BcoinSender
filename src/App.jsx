import React from 'react';
import './styles/App.scss';

import Home from './modules/common/views/Home'
import Contacts from './modules/contact/views/Contacts'
import ContactDetails from './modules/contact/views/ContactDetails'
import ContactEditPage from './modules/contact/views/ContactEditPage'
import Header from './modules/common/components/Header/Header'
import { Route, Switch } from 'react-router-dom'


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <section className="App-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/contact/edit/:id?" component={ContactEditPage} />
            <Route exact path="/contact/:id" component={ContactDetails} />
          </Switch>
        </section>
      </div>
    );
  }
}

export default App;

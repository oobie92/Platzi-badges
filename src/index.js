import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import Badge from './components/Badge';
import './global.css'

const container = document.getElementById('app');

ReactDOM.render(<Badge 
  firstName='Diego' 
  lastName='Mendez' 
  position='DevOps Engineer'
  twitter='diegomarmcfly'
  avatar='https://www.gravatar.com/avatar?d=identicon'/>, 
  container);



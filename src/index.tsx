import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { initDataProxy } from './ShowcaseProxy';

// add all fa-icons
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDown)
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp)
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleLeft)
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleRight)
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

// init data
initDataProxy()

// start rendering
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

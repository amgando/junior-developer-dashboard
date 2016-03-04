import React from 'react'
import { render } from 'react-dom'

import Dashboard from './components/Dashboard'

// placeholder for now to get the UI moving
import data from './data'

render(<Dashboard items={data().items} />, document.querySelector('#container'))

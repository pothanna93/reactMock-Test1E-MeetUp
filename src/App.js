import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import HomeRoute from './components/HomeRoute'
import NotFound from './components/NotFound'
import RegisterRoute from './components/RegisterRoute'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/register" component={RegisterRoute} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    )
  }
}

export default App

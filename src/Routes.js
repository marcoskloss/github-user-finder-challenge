import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/:username' component={User} />
        <Route exact path='/' component={Home}/>
        <Route path='*'>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
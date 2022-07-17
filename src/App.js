import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '~/views/pages/HomePage'
import { UsPage } from '~/views/pages/UsPage'
import { SignInPage, SignUpPage } from '~/views/pages/Auth'
import { ROUTES } from '~/views/routes'
export const App = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.ROOT} component={HomePage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.US} component={UsPage} />
      <Route path='/2' component={() => {
        window.location.href = 'https://www.google.com/maps/place/Gordaliza+1698,+San+Salvador+de+Jujuy,+Jujuy/@-24.1927538,-65.3145103,17z/data=!3m1!4b1!4m5!3m4!1s0x941b0f385365cd3b:0x59b404e7d8511a3c!8m2!3d-24.1927587!4d-65.3123216';
        return null;
      }} />
      <Route path='/0' component={HomePage} />
      <Route path='/1' component={UsPage} />
      <Route path='/3'component={() => {
        window.location.href = 'https://wa.me/+5493884373832/?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20products';
        return null;
      }} />
    </Switch>
  )
}

export default App

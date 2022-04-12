import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Pages } from '../../types';
import LoadingSuspense from '../loading-suspense';

const Home = React.lazy(() => import('../../pages/home'));
const About = React.lazy(() => import('../../pages/about'));
const Contact = React.lazy(() => import('../../pages/contact'));
const Service = React.lazy(() => import('../../pages/service'));

function Loading() {
  return <LoadingSuspense>{getComponent()}</LoadingSuspense>;
}

function componentSuspense(Component: React.FC) {
  return (props: any) => (
    <React.Suspense fallback={<div>{'Loading...'}</div>}>
      <Component {...props} />
    </React.Suspense>
  );
}

function getComponent() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect from='/' to={`${Pages.Home}`} />
      </Route>
      <Route exact path={`${Pages.Home}`} component={componentSuspense(Home)} />
      <Route
        exact
        path={`${Pages.About}`}
        component={componentSuspense(About)}
      />
      <Route
        exact
        path={`${Pages.Contact}`}
        component={componentSuspense(Contact)}
      />
      <Route
        exact
        path={`${Pages.Service}`}
        component={componentSuspense(Service)}
      />
      <Redirect to={`${Pages.Home}`} />
    </Switch>
  );
}

export default Loading;

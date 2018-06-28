import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route 
                    path="/"
                    component={LoginPage}
                    exact={true} 
                />
                <PrivateRoute 
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                    exact={true} 
                />
                <PrivateRoute 
                    path="/create"
                    component={AddExpensePage} 
                />
                <PrivateRoute 
                    path="/edit/:id"
                    component={EditExpensePage}
                    exact={true} 
                />
                <PrivateRoute 
                    path="/help"
                    component={HelpPage} 
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
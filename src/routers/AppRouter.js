import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route 
                    path="/"
                    component={LoginPage}
                    exact={true} 
                />
                <Route 
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                    exact={true} 
                />
                <Route 
                    path="/create"
                    component={AddExpensePage} 
                />
                <Route 
                    path="/edit/:id"
                    component={EditExpensePage}
                    exact={true} 
                />
                <Route 
                    path="/help"
                    component={HelpPage} 
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
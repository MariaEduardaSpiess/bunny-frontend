import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './paginas/user';
import AddUser from './paginas/user/add';
import UserTask from './paginas/user-task';
import AddUserTask from './paginas/user-task/add';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact={true} component={User} />
            <Route path="/add-user" exact={true} component={AddUser} />
            <Route path="/add-user/:user" exact={true} component={AddUser} />
            <Route path="/user-tasks/:user" exact={true} component={UserTask} />
            <Route path="/add-task/:user/:task" exact={true} component={AddUserTask} />
        </Switch>
    )
}

export default Routes;
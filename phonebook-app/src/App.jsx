import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import routes from 'routes/routes';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
              <Switch>
              {routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={() => {
                      return (
                        <route.layout>
                          <route.component/>
                        </route.layout>
                      );
                    }}
                  />
                );
              })}
              </Switch>
            </div>
          </Router>
        );
    }
}

export default App;

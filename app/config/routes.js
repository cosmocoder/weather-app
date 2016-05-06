var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../containers/Main');
var Home = require('../containers/HomeContainer');
var Forecast = require('../containers/ForecastContainer');

var Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="forecast/:city" component={Forecast}/>
        </Route>
    </Router>
);

module.exports = Routes;
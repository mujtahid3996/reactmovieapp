import React from 'react';
import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Movie from '../Movie/Movie'
import NotFound from '../elements/Notfound/NotFound';
const App = () =>
{
    return(
        <BrowserRouter>
            <React.Fragment>
            <Switch>
                <Route path="/" component = { Home } exact/>
                <Route path= "/:movieId" component={ Movie} exact/>
                <Route component= { NotFound }/>
            </Switch>
            </React.Fragment>
        </BrowserRouter>

    )
}
export default App;
import { Router, Route, Switch,  BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PostPage from './posts/containers/PostPage';
import AlbumsPage from './albums/containers/AlbumsPage';
import DetailedPost from './posts/containers/DetailedPost';

const history = createBrowserHistory();

function App() {

  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            component={PostPage}/>
          <Route
            path='/albums'
            component={AlbumsPage}/>
          <Route
            path='/post/:id'
            component={DetailedPost}/>
        </Switch>
      </BrowserRouter>
    </Router>            
  )
}

export default App;
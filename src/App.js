import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ImagePage from './pages/ImagePage';
import LoginPage from './pages/LoginPage';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/perro" component={ImagePage} />
				<Route exact path="/login" component={LoginPage} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;

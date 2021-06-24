import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ListaDePerros from './components/ListaDePerros';
import Descripcion from './components/Descripcion';
import Navbar from './components/Navbar';

import './App.css';

const routes = [
	{
		key: 'Home page',
		path: '/',
		component: ListaDePerros,
	},
	{
		key: 'Perro',
		path: '/perro',
		component: Descripcion,
	},
];

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					{routes.map((r) => {
						return (
							<Route
								key={r.key}
								exact
								path={r.path}
								component={r.component}
							/>
						);
					})}
					<Route component={ListaDePerros} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;

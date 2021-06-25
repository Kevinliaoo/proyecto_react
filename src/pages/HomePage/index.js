import React, { useState } from 'react';

import ListaDePerros from '../../components/ListaPerros';
import useHttp from '../../utils/useHttp';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const HomePage = (props) => {
	const imagenesPorPagina = 9;
	const cantidad = 45;
	const primeraPagina = 1;
	const url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

	const [error, listaDeImgs, loading] = useHttp({ url });

	const [pagina, setPagina] = useState(primeraPagina);

	const ultimo = imagenesPorPagina * pagina;
	const primero = ultimo - imagenesPorPagina;

	const partido = listaDeImgs.slice(primero, ultimo);

	const irAdelante = () => {
		const ultimo = cantidad / imagenesPorPagina;

		if (pagina !== ultimo) setPagina(pagina + 1);
	};

	const irAtras = () => {
		if (pagina !== primeraPagina) setPagina(pagina - 1);
	};

	const verImagen = () => {
		props.history.push('/perro');
	};

	if (error) return <Error />;

	const render = () => {
		return (
			<div>
				<ListaDePerros click={verImagen} data={partido} />

				<div className="container">
					<div className="row offset-6">{pagina}</div>
					<div className="row offset-5">
						<div className="col-4">
							<button onClick={irAtras}>Atrás</button>
							<button onClick={irAdelante}>Adelante</button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return loading ? <Loading /> : render();
};

export default HomePage;

import React from 'react';

import config from '../../utils/config';

const ImagePage = (props) => {
	const url = window.localStorage.getItem(config.llaveImagen);

	const volver = () => {
		props.history.push('/');
	};

	return (
		<div className="container">
			<div className="row offset-4">
				<img className="imagen" src={url} alt="Imagen del perro" />
			</div>
			<div className="row">
				<div className="col-2 offset-5">
					<button onClick={volver}>Volver</button>
				</div>
			</div>
		</div>
	);
};

export default ImagePage;

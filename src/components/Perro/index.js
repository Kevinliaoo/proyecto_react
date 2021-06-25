import React from 'react';

import config from '../../utils/config';

const Perro = ({ url }) => {
	const clickeado = () => {
		window.localStorage.setItem(config.llaveImagen, url);
	};

	return (
		<div className="perro" onClick={clickeado}>
			<img className="perro__imagen" src={url} alt="Foto de perro" />
		</div>
	);
};

export default Perro;

import React from 'react';

import Perro from '../Perro';

const ListaDePerros = (props) => {
	const { data, click } = props;
	let key = 0;

	return (
		<div className="container">
			<div className="row">
				{data.map((p) => {
					key++;
					return (
						<div className="col-4" onClick={click} key={key}>
							<Perro url={p} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ListaDePerros;

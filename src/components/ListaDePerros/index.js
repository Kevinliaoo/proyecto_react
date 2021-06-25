import { useState } from 'react';

import Perro from '../Perro';
import Loading from '../Loading';
import useHttp from '../../hooks/useHttp';

const ListaDePerros = (props) => {
	const numperPics = 36;
	const URL = `https://dog.ceo/api/breeds/image/random/${numperPics}`;

	const [error, perros, loading] = useHttp({ url: URL });

	const [postsPerPage, setPostsPerPage] = useState(9);
	const [pageNumber, setPageNumber] = useState(1);

	const lastIndex = postsPerPage * pageNumber;
	const firstIndex = lastIndex - postsPerPage;

	const goBack = () => {
		if (pageNumber !== 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	const goNext = () => {
		if (pageNumber !== numperPics / postsPerPage) {
			setPageNumber(pageNumber + 1);
		}
	};

	const renderComponent = () => (
		<div className="container">
			<div className="row">
				{perros.slice(firstIndex, lastIndex).map((link) => {
					return (
						<div className="col-4">
							<Perro url={link} props={props} />
						</div>
					);
				})}
			</div>
			<div className="row btnContainer">{pageNumber}</div>
			<div className="row">
				<div className="btnContainer">
					<button onClick={goBack}>Prev.</button>
					<button onClick={goNext}>Next.</button>
				</div>
			</div>
		</div>
	);

	return loading && !error ? <Loading /> : renderComponent();
};

export default ListaDePerros;

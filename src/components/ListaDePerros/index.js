import Perro from '../Perro';
import Loading from '../Loading';
import useHttp from '../../hooks/useHttp';

const ListaDePerros = (props) => {
	const URL = 'https://dog.ceo/api/breeds/image/random/21';

	const [error, perros, loading] = useHttp({ url: URL });

	const renderComponent = () => (
		<div className="container">
			<div className="row">
				{perros.message.map((link) => {
					return (
						<div className="col-4">
							<Perro url={link} props={props} />
						</div>
					);
				})}
			</div>
		</div>
	);

	return loading && !error ? <Loading /> : renderComponent();
};

export default ListaDePerros;

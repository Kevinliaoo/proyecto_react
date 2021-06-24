import config from '../../utils/config';

const Descripcion = (props) => {
	console.log(props);
	const img_url = window.localStorage.getItem(config.image);

	const volver = () => {
		props.history.push('/');
	};

	return (
		<div className="descrContainer">
			<img src={img_url} alt="Imagen" />
			<button onClick={volver}>Back</button>
		</div>
	);
};

export default Descripcion;

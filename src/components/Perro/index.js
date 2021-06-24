import config from '../../utils/config';

const Perro = (props) => {
	const imageClicked = () => {
		window.localStorage.setItem(config.image, props.url);
		props.props.history.push('/perro');
	};

	return (
		<div className="perro" onClick={imageClicked}>
			<img className="perro__img" src={props.url} alt="Foto de perro" />
		</div>
	);
};

export default Perro;

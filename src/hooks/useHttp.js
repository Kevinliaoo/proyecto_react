import { useState, useEffect } from 'react';
import axios from 'axios';

const useGet = ({ url, initiState = [], params }) => {
	const [data, setData] = useState(initiState);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const get = async () => {
			try {
				const response = await axios.get(url);
				setData(response.data);
				setLoading(false);
			} catch (e) {
				return [e, null, null];
			}
		};
		get();
	}, [url]);

	return [null, data, loading];
};

export default useGet;

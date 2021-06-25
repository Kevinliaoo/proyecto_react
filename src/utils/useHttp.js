import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttp = ({ url, params = {}, initialState = [] }) => {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState(initialState);

	useEffect(() => {
		const get = async () => {
			try {
				const { data } = await axios.get(url);
				setResponse(data.message);
				setLoading(false);
			} catch (e) {
				return [e, null, false];
			}
		};

		get();
	}, [url]);

	return [null, response, loading];
};

export default useHttp;

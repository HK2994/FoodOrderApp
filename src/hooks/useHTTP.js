import { useCallback, useState } from "react";

const useHTTP = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async (url, options = {}) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(url, options);

			if (!response.ok) {
				throw Error("Something went wrong");
			}

			const data = await response.json();

			const transformedData = [];

			for (const key in data) {
				transformedData.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setData(transformedData);
		} catch (err) {
			setError(err);
		}
		setIsLoading(false);
	}, []);

	return {
		data,
		fetchData,
		isLoading,
		error,
	};
};

export default useHTTP;

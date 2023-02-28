import { useCallback } from "react"


const useFetch = () => {

    const handleGet = useCallback(async (url, headers) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
            });

            if(!response.ok) {
                return;
            }

            return response.json()
        } catch (error) {
            console.log(error);
        }
    }, []);

    return { handleGet }
}

export default useFetch;
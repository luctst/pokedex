/**
 * Fetch the data from an API by using the fetch API.
 * @param bdd the url to fetch the data.
 * @return Promise by using
 */
export const getData = async bdd => {
    try {
        const data = await fetch(bdd);
        const dataParsed = data.json();
        return dataParsed;
    } catch (error) {
        throw error;
    }
}
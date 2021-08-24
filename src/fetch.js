export default class FetchData {
    startUrl = 'https://api.openbrewerydb.org/breweries/'
    getResource = async url => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Ошибка ${res.status}`);
        }
        return await res.json();
    };

     getBreweries = async () => await this.getResource(this.startUrl + '?page=1');
     getSearch = async (inputValue) => await this.getResource(this.startUrl+ 'search?query=' + inputValue);
    
};
const URI = 'https://tlacoapp.000webhostapp.com';

export default {
    async FetchMonumento() {
        try {
                let response = await fetch(URI + '/api/monumento');
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log("Excepcion: " + e)
        }
    }
}
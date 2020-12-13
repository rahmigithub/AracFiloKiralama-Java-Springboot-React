import axios from 'axios';

const ARAC_API_BASE_URL = "http://localhost:8080/api/1.0/araclar";

class AracService {

    getAracs(){
        return axios.get("http://localhost:8080/api/1.0/araclar/AllArac");
    }

    createArac(arac){
        return axios.post(ARAC_API_BASE_URL, arac);
    }

    getAracById(aracId){
        return axios.get(ARAC_API_BASE_URL + '/' + aracId);
    }

    updateArac(arac){
        return axios.post(ARAC_API_BASE_URL + '/uptArac', arac);
    }

    deleteArac(aracId){
        return axios.post(ARAC_API_BASE_URL + '/DeleteArac/' + aracId);
    }

    getIpArac(aracId){
        return axios.get(ARAC_API_BASE_URL + '/findip/' + aracId);

    }
    
    


}

export default new AracService()
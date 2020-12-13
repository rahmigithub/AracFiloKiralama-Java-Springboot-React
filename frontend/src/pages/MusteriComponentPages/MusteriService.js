import axios from 'axios';
import React, { Component } from 'react'


const MUSTERI_API_BASE_URL = "http://localhost:8080/api/1.0/musteriler";

class MusteriService {

    getEmployees(){
        return axios.get("http://localhost:8080/api/1.0/musteriler/AllMusteri");
    }

    createMusteri(musteri){
        return axios.post(MUSTERI_API_BASE_URL, musteri);
    }

    getMusteriById(musteriId){
        return axios.get(MUSTERI_API_BASE_URL + '/' + musteriId);
    }

    updateMusteri(musteri){
        return axios.post(MUSTERI_API_BASE_URL + '/uptMusteri', musteri);
    
        
    }

    deleteMusteri(musteriId){
        return axios.post(MUSTERI_API_BASE_URL + '/DeleteMusteri/' + musteriId);
    }
    deleteAracFromMusteri(body){

        axios.post(MUSTERI_API_BASE_URL + '/DeleteCarFromMusteri',body);

}
}

export default new MusteriService()
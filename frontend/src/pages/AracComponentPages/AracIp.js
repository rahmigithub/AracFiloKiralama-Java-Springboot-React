import React, { Component } from 'react'
import { Map, GoogleApiWrapper,InfoWindow,Marker } from 'google-maps-react';

import AracService from './AracService';
const mapStyles = {
    width: '60%',
    height: '60%'
  };
  

export class AracIp extends Component {

    
    state = {
        showingInfoWindow: true,
       
        
        
      };
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            lngx:null,
            laty:null,  }
    }

    componentDidMount() {
        AracService.getIpArac(this.state.id).then(res => {


            this.setState({
                lngx: res.data[0],
                laty: res.data[1]     });
        })
    }

    



    render() {
        return (
            <div>

                <div>

        <h5 className="text-center"> Arac Gps bilgileri</h5>
        <h6 className="text-center">Tahmini boylam değeri: {this.state.lngx}</h6>
        <h6 className="text-center">Tahmini enlem değeri : {this.state.laty}</h6>
                </div>
                <div>
                  
            <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        center={
          {
            lng: this.state.lngx,
            lat: this.state.laty
            
          }
        }
       >
       
        </Map>
        
  </div>
  </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'Your_api_here'
  })(AracIp);
import React, { Component } from 'react'
import MusteriService from './MusteriService'
import AracService from '../AracComponentPages/AracService'

class ViewMusteriComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            musteri: {},
            araclistemp: [],
           

        }
    }

    deleteAracFromMusteribase(aracid){
        
      

        const body = {
  
            id1: this.state.id,
            id2: aracid
          
            
   
         }
        
        MusteriService.deleteAracFromMusteri(body);
        window.location.reload();
        }

    componentDidMount() {
        MusteriService.getMusteriById(this.state.id).then(res => {
            this.setState({
                musteri: res.data,
                araclistemp :res.data.musteriAracListesi
            });
        })
    }

    render() {
        return (
            <div>
                <br></br>


                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Musteri Detay Ekranı</h3>
                    <div className="card-body">
                        <div className="row">
                           <h6 className="text-center">{ this.state.musteri.musteriAdi}</h6>
                           <label>-</label>
                            <h6 className="text-center">{ this.state.musteri.musteriSoyadi} </h6></div>
                        

                        
                            <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Arac marka </th>
                                    <th> Arac model </th>
                                    <th> Arac işlemi </th>
                                    
                                </tr>
                            </thead>
                                <tbody>

                                    {this.state.araclistemp.map(arac =>
                                        <tr key = {arac.id}>
                                            
                                            <td>{arac.marka}</td>
                                            <td>{arac.model}</td>
                                            
                                            <button onClick={() => this.deleteAracFromMusteribase(arac.id)} className="btn btn-info" >Aracı çıkar </button>
                                        </tr>
                                        
                                    )}
                                        
                                </tbody>
                            </table>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewMusteriComponent
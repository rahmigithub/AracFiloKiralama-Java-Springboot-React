import React, { Component } from 'react'
import MusteriService from './MusteriService'

class ListMusteriComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            musteris: []
        }
       
    }

    deleteMusteri(id){
        
        
        MusteriService.deleteMusteri(id);
        this.props.history.push(`/view-musteriList`);
    }
    viewMusteri(id){
        this.props.history.push(`/view-musteri/${id}`);
    }
    editMusteri(id){
        this.props.history.push(`/update-musteri/${id}`);
    }

    componentDidMount(){
      
        MusteriService.getEmployees().then((res) => {
            this.setState({ musteris: res.data});
        });
       
    }

    addMusteri(){
        this.props.history.push('/add-musteri/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Musteri Edit Sayfası</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() => this.addMusteri()}>Yeni Musteri Ekle</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Musteri Adı</th>
                                    <th> Musteri Soyadı</th>
                                    <th> İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.musteris.map(
                                        musteri => 
                                        <tr key = {musteri.id}>
                                             <td>{musteri.musteriAdi}</td>
                                              <td>{musteri.musteriSoyadi}</td>
                                             <td>
                                                 <button onClick={ () => this.editMusteri(musteri.id)} className="btn btn-info">Güncelle </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteMusteri(musteri.id)} className="btn btn-danger">Sil </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewMusteri(musteri.id)} className="btn btn-info">Görüntüle </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListMusteriComponent
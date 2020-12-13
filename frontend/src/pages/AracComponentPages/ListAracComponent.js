import React, { Component } from 'react'
import AracService from './AracService'

class ListAracComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            aracs: []
        }
       
    }

    deleteArac(id){
        
        
        AracService.deleteArac(id);
        this.props.history.push(`/view-aracList`);
    }
    viewArac(id){
        this.props.history.push(`/view-arac/${id}`);
    }
    editArac(id){
        this.props.history.push(`/update-arac/${id}`);
    }

    aracbul(id){
        
        this.props.history.push(`/aracIp/${id}`);
    }
    aracbulmap(){
        this.props.history.push(`/aracIpmap`);

    }

    componentDidMount(){
        AracService.getAracs().then((res) => {
            this.setState({ aracs: res.data});
        });
    }

    addArac(){
        this.props.history.push('/add-arac/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Arac Edit Sayfası</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={() =>this.addArac()}>Yeni Arac Ekle</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Arac marka</th>
                                    <th> Arac model</th>
                                    <th> Arac yıl</th>
                                    <th> Arac ip</th>
                                    <th> İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.aracs.map(
                                        arac => 
                                        <tr key = {arac.id}>
                                             <td>{arac.marka}</td>
                                              <td>{arac.model}</td>
                                              <td>{arac.yıl}</td>
                                              <td>{arac.aracip}</td>
                                             <td>
                                                 <button onClick={ () => this.editArac(arac.id)} className="btn btn-info">Güncelle </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteArac(arac.id)} className="btn btn-danger">Sil </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewArac(arac.id)} className="btn btn-info">Görüntüle </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.aracbul(arac.id)} className="btn btn-info">Arac bul </button>
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

export default ListAracComponent
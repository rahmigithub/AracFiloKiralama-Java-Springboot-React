import React from 'react';
import axios from 'axios';
class MusteriAracAdd extends React.Component {


    state = {
        aracs: [],
        musteris: [],
        id11:null,
        id22:null
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/1.0/araclar/AllFreeArac`)
            .then(res => {
                const aracs = res.data;
                this.setState({ aracs });
            })

        axios.get(`http://localhost:8080/api/1.0/musteriler/AllMusteri`)
            .then(res => {
                const musteris = res.data;
                this.setState({ musteris });
            })
    }

    MusteriAracAddPage = event => {

        event.preventDefault();
        
  
        const body = {
  
           id1: this.state.id11,
           id2:this.state.id22
           
  
        }
  
        axios.post('http://localhost:8080/api/1.0/musteriler/AddCarToMusteri',body)
        window.location.reload();

       
  
     }

     onChange1 = event => {

        const value =event.target.value
        const id11 = event.target.value
  
        this.setState({
            
           id11:value
              
        });
   
       };
       onChange2 = event => {

        const value =event.target.value
        const id22 = event.target.value
  
        this.setState({
            
           id22:value
              
        });
   
       };


    render() {
        return (

            <div className="container">
                <form>
                    <h1 className="text-center">Musteriye Arac Atama</h1>

                    <div className="row">
                        <div className="col">

                            <h1 className="text-center">Arac Listesi</h1>


                            <table class="table table-bordered">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Marka</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Yıl</th>
                                    </tr>
                                </thead>
                                <tbody>




                                    {this.state.aracs.map(arac =>
                                        <tr key={arac.id}>

                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={arac.id} onChange={this.onChange2} />

                                            <td>{arac.model}</td>
                                            <td>{arac.marka}</td>
                                            <td>{arac.yıl}</td>

                                        </tr>
                                    )}


                                </tbody>
                            </table>

                        </div>
                    

                    <div className="col">
                        <h1 className="text-center">Musteri Listesi</h1>


                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Musteri Adi</th>
                                    <th scope="col">Musteri Soyadi</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.musteris.map(musteri =>
                                    <tr>
                                       <td><input className="form-check-input" type="radio" name="exampleRadios2" id="exampleRadios2" value={musteri.id} onChange={this.onChange1} />   </td>

                                        <td>{musteri.musteriAdi}</td>
                                        <td>{musteri.musteriSoyadi}</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                    </div>

                    <div className="text-center">
                        <button class="btn btn-primary" type="submit" onClick={this.MusteriAracAddPage}>Submit form</button>
                    </div>
                </form>
            </div>

        )
    }

}
export default MusteriAracAdd;



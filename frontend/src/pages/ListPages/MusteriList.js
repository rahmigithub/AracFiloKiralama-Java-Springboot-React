import React from 'react';
import axios from 'axios';

class MusteriList extends React.Component {
  state = {
    musteris: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/1.0/musteriler/AllMusteri`)
      .then(res => {
        const musteris = res.data;
        this.setState({ musteris });
      })
  }


  render() {
    return (

      <div className="container">
        

          <h1 className="text-center">Musteri Listesi</h1>


          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th scope="col">Musteri Adi</th>
                <th scope="col">Musteri Soyadi</th>
              </tr>
            </thead>
            <tbody>
              
              {this.state.musteris.map(musteri => 
              <tr key={musteri.id}>
              <td>{musteri.musteriAdi}</td>
              <td>{musteri.musteriSoyadi}</td>
              </tr>
              )}
              
            </tbody>
          </table>

      </div>
    )
  }

}

export default MusteriList;

import React from 'react';
import axios from 'axios';

class AracList extends React.Component {
  state = {
    aracs: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/1.0/araclar/AllArac`)
      .then(res => {
        const aracs = res.data;
        this.setState({ aracs });
      })
  }


  render() {
    return (

      <div className="container">


        <h1 className="text-center">Tüm Araclar Listesi</h1>


        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Marka</th>
              <th scope="col">Model</th>
              <th scope="col">Yıl</th>
            </tr>
          </thead>
          <tbody>

            {this.state.aracs.map(arac =>
              <tr key={arac.id}>
                <td>{arac.model}</td>
                <td>{arac.marka}</td>
                <td>{arac.yıl}</td>
              </tr>
            )}

          </tbody>
        </table>

      </div>
    )
  }

}

export default AracList;


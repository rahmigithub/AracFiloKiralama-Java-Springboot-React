import React from 'react';
import axios from 'axios';

class AracFreeList extends React.Component {


    state = {
        freeAracs: []
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/1.0/araclar/AllFreeArac`)
          .then(res => {
            const freeAracs = res.data;
            this.setState({ freeAracs });
          })
      }

    render() {
        return (
            <div className="container">


        <h1 className="text-center">Kiralanabilecek Araçlar Listesi</h1>


        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">Marka</th>
              <th scope="col">Model</th>
              <th scope="col">Yıl</th>
            </tr>
          </thead>
          <tbody>

            {this.state.freeAracs.map(arac =>
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
export default AracFreeList;


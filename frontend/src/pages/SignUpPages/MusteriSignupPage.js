import React from 'react';
import axios from 'axios';


class MusteriSignupPage extends React.Component{

    state ={

        musteriadireact:null,
        musterisoyadireact:null


    };

    onChange = event => {

        const value =event.target.value
        const names = event.target.name
   
        this.setState({
            
           [names]:value
              
        });
   
       };

         MusteriSignupPageBtn = event => {

        event.preventDefault();
        
  
        const body = {
  
           musteriAdi: this.state.musteriadireact,
           musteriSoyadi: this.state.musterisoyadireact
  
        }
  
        axios.post('http://localhost:8080/api/1.0/musteriler',body)
        this.props.history.push('/musteri');  
      
  
  
        //signup(body).
        //   then(Response => {
        //      this.setState({ pendingApiCall: false });
        //   }).catch(error => {
        //      this.setState({ pendingApiCall: false });
        //   });
  
  
     }

render() {
    return (
        <div className="container">
                <form>
                    
                    <h1 className="text-center">Musteri Kayıt Ekranı</h1>
                   
                    
                        <div className="form-group">
                            <label >Musteri Adi</label>
                            <input name="musteriadireact" className="form-control"   onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label >Musteri Soyadi</label>
                            <input type="text" name="musterisoyadireact"  className="form-control" onChange={this.onChange} />
                        </div>
                    
                        

                        <div className="text-center">
                        <button class="btn btn-primary" type="submit" onClick={this.MusteriSignupPageBtn}>Submit form</button>
                        </div>
                </form>

                


            </div>
    )
}


}

export default MusteriSignupPage;
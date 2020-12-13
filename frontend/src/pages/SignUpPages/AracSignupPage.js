import React from 'react';
import axios from 'axios';


class AracSignupPage extends React.Component {


    state ={

        aracmarka:null,
        aracmodel:null,
        aracyıl:null


    };
    

    onChange = event => {

     const value =event.target.value
     const names = event.target.name

     this.setState({
         
        [names]:value
           
     });

    };

    AracSignupPageBtn = event => {

        event.preventDefault();
        
  
        const body = {
  
           marka: this.state.aracmarka,
           model: this.state.aracmodel,
           yıl: this.state.aracyıl
  
        }
  
        axios.post('http://localhost:8080/api/1.0/araclar',body)
  
      
  
  
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
                    
                    <h1 className="text-center">Arac Kayıt Ekranı</h1>
                   
                    
                        <div className="form-group">
                            <label >Marka</label>
                            <input name="aracmarka" className="form-control"   onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label >Model</label>
                            <input type="text" name="aracmodel"  className="form-control" onChange={this.onChange} />
                        </div>
                    
                        <div className="form-group">
                            <label>Yıl</label>
                            <input type="text" name="aracyıl" class="form-control" onChange={this.onChange}/>
                        </div>

                        <div className="text-center">
                        <button class="btn btn-primary" type="submit" onClick={this.AracSignupPageBtn}>Submit form</button>
                        </div>
                </form>

                


            </div>
        );
    }
}
export default AracSignupPage;
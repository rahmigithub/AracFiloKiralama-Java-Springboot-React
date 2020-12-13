import React, { Component } from 'react'
import MusteriService from './MusteriService';

class UpdateMusteriComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            musteriAdi: '',
            musteriSoyadi: ''
            
        }
       
        this.updateMusteri = this.updateMusteri.bind(this);
    }
/*
    componentDidMount(){
        MusteriService.getMusteriById(this.state.id).then( (res) =>{
            let musteris = res.data;
            this.setState({musteriadi : musteris.musteriAdi,
                           musterisoyadi: musteris.musteriSoyadi,
                
            });
        });
    }
*/
    updateMusteri = event => {
        event.preventDefault();

        const musteri = 
        {  id:this.props.match.params.id,
            musteriAdi: this.state.musteriAdi, 
            musteriSoyadi: this.state.musteriSoyadi }

       // console.log('employee => ' + JSON.stringify(musteri))
        //console.log('id => ' + JSON.stringify(this.state.id))
        MusteriService.updateMusteri(musteri)
        
        this.props.history.push('/musteri');
        
    }

    onChange = event => {

        const value =event.target.value
        const names = event.target.name
   
        this.setState({
            
           [names]:value
              
        });
   
       };
    
   

    

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Müşteri Güncelleme</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <label >Musteri Adi</label>
                                          <input type="text" name="musteriAdi"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>
                                        <div className = "form-group">
                                            

                                          <label >Musteri Soyadi</label>
                                          <input type="text" name="musteriSoyadi"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateMusteri}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateMusteriComponent
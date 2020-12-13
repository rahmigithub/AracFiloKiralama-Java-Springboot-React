import React, { Component } from 'react'
import AracService from './AracService';

class UpdateAracComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            marka: '',
            model: '',
            yıl:'',
            aracip:''
        }
       
        this.updateArac = this.updateArac.bind(this);
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
    updateArac = event => {
        event.preventDefault();

        const musteri = 
        {  id:this.props.match.params.id,
            marka: this.state.marka, 
            model: this.state.model,
            yıl: this.state.yıl,
            aracip: this.state.aracip }

       // console.log('employee => ' + JSON.stringify(musteri))
        //console.log('id => ' + JSON.stringify(this.state.id))
        AracService.updateArac(musteri)
        this.props.history.push('/araclar');

        
    }

    onChange = event => {

        const value =event.target.value
        const names = event.target.name
   
        this.setState({
            
           [names]:value
              
        });
   
       };
    
   

    

    cancel(){
        this.props.history.push('/araclar');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Araç Güncelleme</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                        <label >Arac Marka</label>
                                          <input type="text" name="marka"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>
                                        <div className = "form-group">
                                            

                                          <label >Arac Model</label>
                                          <input type="text" name="model"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>
                                        <div className = "form-group">
                                            

                                          <label >Arac Yıl</label>
                                          <input type="text" name="yıl"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>
                                        <div className = "form-group">
                                            

                                          <label >Arac Ip</label>
                                          <input type="text" name="aracip"  className="form-control" 
                                             onChange={this.onChange} />
                                        </div>

                                        
                                        

                                        <button className="btn btn-success" onClick={this.updateArac}>Save</button>
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

export default UpdateAracComponent
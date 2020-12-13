import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './pages/MusteriComponentPages/ListMusteriComponent';
import HeaderComponent from './pages/HeaderFooterPages/HeaderComponent';
import FooterComponent from './pages/HeaderFooterPages/FooterComponent';
import UpdateEmployeeComponent from './pages/MusteriComponentPages/UpdateMusteriComponent';
import ViewEmployeeComponent from './pages/MusteriComponentPages/ViewMusteriComponent';
import MusteriSignupPage from './pages/SignUpPages/MusteriSignupPage';
import AracSignupPage from './pages/SignUpPages/AracSignupPage';
import MusteriAracAdd from './pages/OtherPages/MusteriAracAdd';
import AracFreeList from './pages/ListPages/AracFreeList';
import AracList from './pages/ListPages/AracList';
import MusteriList from './pages/ListPages/MusteriList';
import ListAracComponent from './pages/AracComponentPages/ListAracComponent';
import AracIp from './pages/AracComponentPages/AracIp';
import UpdateAracComponent from './pages/AracComponentPages/UpdateAracComponent'
//import aracIpmap from './pages/editpagearac/aracIpmap';









function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/musteri" component = {ListEmployeeComponent}></Route>
                          <Route path = "/update-musteri/:id" component = {UpdateEmployeeComponent}/>
                          <Route path = "/view-musteri/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/add-musteri/_add" component = {MusteriSignupPage}></Route>
                          <Route path = "/add-arac/_add" component = {AracSignupPage}></Route>
                          <Route path = "/add-musteriarac/_add" component = {MusteriAracAdd}></Route>
                          <Route path = "/view-musteriList" component = {MusteriList}></Route>
                          <Route path = "/view-freeAracList" component = {AracFreeList}></Route>
                          <Route path = "/view-AracList" component = {AracList}></Route>
                          <Route path = "/araclar" component = {ListAracComponent}></Route>
                          <Route path = "/aracIp/:id" component = {AracIp}></Route>
                          <Route path = "/update-arac/:id" component = {UpdateAracComponent}/>
                         
                          

                          
                          


                        
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;

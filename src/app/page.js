'use client'
import { useEffect,useState } from "react";
import './index.css'
import Comp from "./Comp";

export default function Home() {
  const [show1,setShow1] = useState(false);

  const[trial,setTrial] = useState([]);
  useEffect(()=>{
    async function getPageData(){
      const apiUrl = `http://localhost:3000/api`;
      const response = await fetch(apiUrl);
      const res = await response.json();
      console.log(res); 
      setTrial(res);
    }
    getPageData();
  },[]);

  function clickedFunc1(){
    setShow1(!show1);
    // console.log(show);
  }

  return (
    <>
        <nav>
            <div className="nav-logo">
                <img src="#" alt="#"/>
            </div>
            <div className="company-name">Fly<span className="nav-span">App</span></div> 
            <button className="poweroff">&#x2B58;</button>   
        </nav>

        <div className="searchplace">
        
            <p style={{color:'#086b3c', position:'absolute', top:'65px',fontWeight:'600'}}>Please enter SO Number</p>
            <input className="soid" type="text" placeholder="Search SO ID..."/>
            <input placeholder="Enter Date" class="textbox-n" type="text" id="date" />
            <button className="search-btn" style={{backgroundColor:'#0a4b3c'}}>Search</button>

            <div class="export-div">
                <p style={{marginRight:'10px', fontWeight:'bold',position:'relative',top:'10px'}}>Export</p>
                <button className="img-btn" id="img-btn1"><img src="#" alt="#"/></button>
                <button className="img-btn" id="img-btn2"><img src="#" alt="#"/></button>
                <div className="vertical-line"></div>
                <button className="filter-btn">Filter</button>
            </div>
        </div>
        <button style={{backgroundColor:'white',borderRadius:'5px',color:'black', height:'35px',width:'100px',position:"absolute",top:'60px',zIndex:'1',right:'15px',fontWeight:'bold'}}>Filter</button>
        <button style={{backgroundColor:'#0a4b3c',borderRadius:'5px',color:'white', height:'35px',width:'120px',position:"absolute",top:'60px',zIndex:'1',left:'520px'}}>Search</button>
        <input type="text" placeholder="Search SO ID" style={{ height:'35px',width:'150px',position:"absolute",top:'60px',left:'200px',border:'none',borderRadius:'5px',zIndex:'1'}}/>
        <input type="date" placeholder="Enter Date" style={{ height:'35px',width:'150px',position:"absolute",top:'60px',left:'360px',border:'none',borderRadius:'5px',zIndex:'1'}}/>
        <div className="search-div">
            <div className="search-divs">Date<input id="search-inp" type="date"/></div>
            <div className="search-divs">Date Range<input id="search-inp" placeholder="From" type="text"/></div>
            <div className="search-divs" style={{position:'relative',top:'15px'}}><input id="search-inp" placeholder="To" type="text"/></div>
            <div className="search-divs">Type of Product<input id="search-inp" placeholder="All"/></div>
            <div className="search-divs">Customer Name<input id="search-inp"/></div>
            <div className="search-divs">Lot Number<input id="search-inp"/></div>
            <div className="search-divs">Delivery Time<input id="search-inp" placeholder="All"/></div>

            <button id="clear-filter">Clear filter</button>
        </div>


  <div className="carddiv"></div>

  <table>
        <tr>
            <th  id="color1" style={{width:'50px'}}>S.No.</th>
            <th  id="color1">Sales order Date</th>
            <th  id="color2">Packing House Location</th>
            <th  id="color3">Sales Order</th>
            <th  id="color3">Customer Name</th>
            <th  id="color4">Type of Product</th>
            <th  id="color4">Qty(Kg)</th>
            <th  id="color4">#Pre packs</th>
            <th  id="color5">Detected QRs</th>
            <th  id="color5">Successfully Activated QRs</th>
            <th  id="color5">Lot Number</th>
            <th  id="color2">Total Delivery Time(HRS)</th>
            <th  id="color6">Scanned with Installed Silal App</th>
            <th></th>
        </tr>  
    { 
        trial.map((sale)=>{ 
          return(
                <>
                  <tr key={sale.track}>
                      <td>{sale.track}</td>
                      <td>{sale.orderdate}</td>
                      <td>{sale.houseLocation}</td>
                      <td><span style={{backgroundColor:'#12765f',borderRadius:'3px',paddingTop:'5px',paddingBottom:'5px',color:'white',paddingLeft:'15px',paddingRight:'15px'}}>{sale.salesorder}</span></td>
                      <td>{sale.customerName}</td>
                      <td>{sale.productType}</td>
                      <td>{sale.qty}</td>
                      <td>{sale.prePack}</td>
                      <td>{sale.detectedQrs}</td>
                      <td>{sale.activateQrs}</td>
                      <td>{sale.lotNo}</td>
                      <td><span style={{backgroundColor:'#12765f',borderRadius:'3px',paddingTop:'5px',paddingBottom:'5px',color:'white',paddingLeft:'20px',paddingRight:'20px'}}>{sale.deliveryTime}</span></td>
                      <td>{sale.scannedApps}</td>
                      <td><button onClick={()=>clickedFunc1()} class="tablebtn" style={{color:'black',fontWeight:'bold',width:'65px'}}>Track &#x3e;</button></td>
                  </tr>
                  {
                    show1 && <Comp customer={sale.customerName} house={sale.houseLocation} product={sale.productType} order={sale.orderdate}/>
                  }
              </>
          );
          
       }) 
    }
    </table>

    </>
  );
}

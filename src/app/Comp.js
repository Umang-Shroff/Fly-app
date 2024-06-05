import React from 'react'
import './index.css'

const Comp = (props) => {
  return (
    
    <div>
        <div className="innerdiv1" style={{marginTop:'20px',boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',}}><h1 style={{ fontWeight:'bold',textAlign:'center'}}>Customer Name</h1><p style={{textAlign:'center',fontWeight:'400'}}>{props.customer}</p></div>
        <div className="innerdiv2" style={{boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',}}><h1 style={{fontWeight:'bold',textAlign:'center'}}>Customer Location</h1><p style={{textAlign:'center',fontWeight:'400'}}>{props.house}</p></div>
        <div style={{position:'relative',left:'40vw',backgroundColor:'#fdc864',top:'-40px',textAlign:'center',fontWeight:'bold', borderRadius:'7px'}}>Type<p style={{fontWeight:'400'}}>{props.product}</p></div>

        <div style={{height:'120px',marginBottom:'20px',marginLeft:'20px'}}>
            <div style={{backgroundColor:'#1f9090',borderRadius:'7px',height:'120px',width:'150px',position:'relative',left:'180px',color:'white',textAlign:'center',fontWeight:'bold',paddingTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Farm<p style={{fontWeight:'400'}}>{props.house}</p></div>
            <div style={{backgroundColor:'white',borderRadius:'7px',top:'-120px',height:'120px',width:'150px',position:'relative',left:'390px',color:'black',textAlign:'center',fontWeight:'bold',paddingTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}><div style={{backgroundColor:'#f752c8',marginTop:'-10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'7px',color:'white'}}>Collection Center</div>Time<p style={{fontWeight:'400'}}>{props.order}</p></div>
            <div style={{backgroundColor:'white',borderRadius:'7px',top:'-240px',height:'120px',width:'150px',position:'relative',left:'600px',color:'black',textAlign:'center',fontWeight:'bold',paddingTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}><div style={{backgroundColor:'#5528d1',marginTop:'-10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'7px',color:'white'}}>Packing House</div>Location<p style={{fontWeight:'400'}}>{props.house}</p></div>
            <div style={{backgroundColor:'white',borderRadius:'7px',top:'-360px',height:'120px',width:'150px',position:'relative',left:'800px',color:'black',textAlign:'center',fontWeight:'bold',paddingTop:'10px',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',fontSize:'15px'}}><div style={{backgroundColor:'#1f9090',marginTop:'-10px',paddingTop:'5px',paddingBottom:'5px',borderRadius:'7px',color:'white'}}>Distribution Center</div>Time<p style={{fontWeight:'400'}}>{props.order}</p></div>
        </div>
    </div>

  )
}

export default Comp

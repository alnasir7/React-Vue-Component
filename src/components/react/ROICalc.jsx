import React from "react"


const ROICalc = () =>  {
  
  const [fields, setFields] = React.useState ({
    col1: "",
    col2: ""
  }) ;
    

  const handleFieldChange = (e) => {
    const newFields = {...fields};
    const value = e.target.id === "col2" ? e.target.value.replace("$", "") : e.target.value;
    var reg = /^-?\d*\.?\d*$/;
    if (value.match(reg)){
    console.log(value);
    newFields[e.target.id] = value;
    console.log(newFields);
    setFields(newFields);
    }
  }
   
      return (
      <div style={{
        width:"60%",
        padding:"20px",
        margin:"0 auto",
        textAlign:"start",
        fontFamily:"ubuntu",
        border: "1.5px solid #E3E3E3",
        borderRadius: "3px"
        }}>
       <p style={{fontSize:"14px", color:"#000000", margin:"10px 0px", fontWeight:"700"}}>
        FOR EMPLOYERS
       </p>
       <p style={{fontSize:"30px", color:"#000000", margin:"10px 0px",  fontWeight:"400"}}>
       Calculate how much you will save from offering Onward’s services to your employees.
       </p>
       <hr style={{border:"1px solid #ECECEC", margin:"20px 0", width:"100%", padding:"0px"}}/>
       <div>
       <h3 style={{fontSize:"24px", color:"#000000", fontWeight:"500"}}>
         1. How many employees do you have?
       </h3>
       <input  onChange={handleFieldChange}value={fields.col1} type="text" placeholder="eg: 100" id="col1" style={{
         color:"#878787",
         border:"1.5px solid #E3E3E3",
         borderRadius:"3px",
         padding:"10px",
         width:"160px",
         fontSize:"24px"
       }}/>
       <span style = {{color:"#7D7D7D", fontSize:"24px", margin : "0px 15px"}}>employee(s)</span>
       </div>
       <div>
       <h3 style={{fontSize:"24px", color:"#000000", fontWeight:"500"}}>
       2. What is the average hourly income of each employee?
       </h3>
       <input value={"$" + fields.col2} onChange={handleFieldChange}
       type="text" style={{
         color:"#878787",
         border:"1.5px solid #E3E3E3",
         borderRadius:"3px",
         padding:"10px",
         width:"160px",
         fontSize:"24px",
        
       }} name="" id="col2"/>
       <span style = {{color:"#7D7D7D", fontSize:"24px",margin : "0px 15px"}}>per hour</span>
       </div>
       <div style={{margin:"60px auto", marginBottom:"30px", width:"100%", textAlign:"center"}}>
       <button style={{
         background: "#00D898",
         color:"white",
         borderRadius:"3px",
         border:"none",
         fontFamily:"ubuntu",
         padding: "10px 40px",
         fontSize:"24px",
         fontWeight:"700",
         cursor:"pointer",



       }}>
          Calculate →
       </button>
       </div>
    </div>
      )
    
  }

  export default ROICalc ;
import React from "react"
import Popup from 'reactjs-popup';


const ROICalc = () =>  {
  
  const [fields, setFields] = React.useState ({
    col1: "",
    col2: ""
  }) ;

  const [displayResults, changeDisplay] = React.useState (false);

  const [estimate, changeEstimate] = React.useState(0);
    

  const calculateEstimate = () => {
    if (fields.col1.length < 1 || fields.col2.length<1) return;
    const employees = parseInt(fields.col1);
    const wage = parseInt(fields.col2);
    if (wage <= 0 || employees <= 0) return;
    changeDisplay(!displayResults);
    changeEstimate(employees * 0.3 * 0.46 * 3 * 46 * wage);
  }

  const handleFieldChange = (e) => {
    const newFields = {...fields};
    const value = e.target.id === "col2" ? e.target.value.replace("$", "") : e.target.value;
    var reg = /^-?\d*\.?\d*$/;
    if (value.match(reg)){
    newFields[e.target.id] = value;
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
            {!displayResults&&<div>
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
                  color:"#000000",
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
                    color:"#000000",
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
                }} onClick = {calculateEstimate}>
                    Calculate →
                </button>
              </div>
            </div>}


            {displayResults&&<div>
              

              <p style={{fontSize:"14px", color:"#000000", margin:"10px 0px", fontWeight:"700", display: "flex", justifyContent: "space-between"}}>
                <span className = "flexItem">FOR EMPLOYERS</span>

                <Popup trigger={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="10.75" transform="matrix(-1 0 0 1 12 12)" fill="#E3E3E3" stroke="#E3E3E3" stroke-width="1.5"/>
                  <path d="M11.9875 8.304C11.6142 8.304 11.2568 8.352 10.9155 8.448C10.5742 8.53333 10.2168 8.67733 9.84351 8.88L9.29951 7.392C9.69418 7.168 10.1422 6.992 10.6435 6.864C11.1555 6.72533 11.6782 6.656 12.2115 6.656C12.8515 6.656 13.3795 6.74667 13.7955 6.928C14.2115 7.09867 14.5422 7.31733 14.7875 7.584C15.0328 7.85067 15.2035 8.144 15.2995 8.464C15.3955 8.784 15.4435 9.09333 15.4435 9.392C15.4435 9.75467 15.3742 10.08 15.2355 10.368C15.1075 10.656 14.9422 10.9227 14.7395 11.168C14.5368 11.4133 14.3182 11.648 14.0835 11.872C13.8488 12.0853 13.6302 12.3093 13.4275 12.544C13.2248 12.768 13.0542 13.008 12.9155 13.264C12.7875 13.52 12.7235 13.808 12.7235 14.128C12.7235 14.1813 12.7235 14.2453 12.7235 14.32C12.7235 14.384 12.7288 14.448 12.7395 14.512H11.0755C11.0542 14.4053 11.0382 14.2933 11.0275 14.176C11.0168 14.048 11.0115 13.9307 11.0115 13.824C11.0115 13.472 11.0702 13.1573 11.1875 12.88C11.3048 12.6027 11.4542 12.3467 11.6355 12.112C11.8168 11.8773 12.0088 11.6587 12.2115 11.456C12.4248 11.2533 12.6222 11.0507 12.8035 10.848C12.9848 10.6453 13.1342 10.4373 13.2515 10.224C13.3688 10.0107 13.4275 9.776 13.4275 9.52C13.4275 9.168 13.3048 8.88 13.0595 8.656C12.8248 8.42133 12.4675 8.304 11.9875 8.304ZM13.2355 16.944C13.2355 17.3173 13.1128 17.6213 12.8675 17.856C12.6222 18.0907 12.3182 18.208 11.9555 18.208C11.6035 18.208 11.2995 18.0907 11.0435 17.856C10.7982 17.6213 10.6755 17.3173 10.6755 16.944C10.6755 16.5707 10.7982 16.2667 11.0435 16.032C11.2995 15.7867 11.6035 15.664 11.9555 15.664C12.3182 15.664 12.6222 15.7867 12.8675 16.032C13.1128 16.2667 13.2355 16.5707 13.2355 16.944Z" fill="white"/>
                </svg>} position="bottom right" className = "flexItem">
                <div style = {{fontFamily: "Ubuntu",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#7D7D7D",
                  textAlign: "left",
                  border: "2.5px solid #E3E3E3",
                  borderRadius: "3px",
                  padding: "8px",
                  marginRight: "20px",
                  width: "230px",
                  background: "#F8FBFF",
                  zIndex: "2"
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </Popup>
              </p>
              <p style={{fontSize:"30px", color:"#000000", margin:"10px 0px",  fontWeight:"400"}}>
                With the help of Onward, you could save
              </p>

              <h1 style={{fontSize:"48px", color:"#000000", margin:"10px 0px", fontWeight:"500"}}>
                ${estimate.toFixed(2)} / year.
              </h1>
              
              <div style={{margin:"60px auto", marginBottom:"30px", width:"85%", textAlign:"center", display: "flex", justifyContent: "space-between"}}>
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
                  className:"flex-item",
                  width:"40%"
                }} onClick = {() => changeDisplay(!displayResults)}>

                    ← Calculate Again
                </button>
              
                <button style={{
                  background: "#00AADE",
                  color:"white",
                  borderRadius:"3px",
                  border:"none",
                  fontFamily:"ubuntu",
                  padding: "10px 40px",
                  fontSize:"24px",
                  fontWeight:"700",
                  cursor:"pointer",
                  className:"flex-item",
                  width:"40%"
                }} onClick = {() => {window.location = "https://onward.org/"}}>
                    Learn More
                </button>
              </div>
            </div>}
        </div>
      )
    
  }

  export default ROICalc ;
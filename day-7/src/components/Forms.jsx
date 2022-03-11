import { useState,useEffect } from "react"
import axios from "axios";

export const Forms = ()=>{

    const [formData, setFormData]=useState({
        Name:"",
        Age:"",
        Address:"",
        Department: "",
        Salary:"",
        Marital_state:"",
    });

    // useEffect(()=>{
    //     getData();
    // },[]);

    // const getData=()=>{
    //     axios.get("http://localhost:5001/users").then(res=>{
    //         setFormData(res.data)
    //     })
    // }

    const handleChange=(e)=>{

        const{id, value}=e.target;

        setFormData({
            ...formData,
            [id]:value,
                });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:5001/users",formData).then(()=>{
            alert("Conrulations! User stored data sucessfully.");
            setFormData({
                Name:"",
                Age:"",
                Address:"",
                Department: "",
                Salary:"",
                Marital_state:"",

            });

            details();
        });
    };

    const details=()=>{
        axios.get("http://localhost:5001/users").then((res)=>{
            let allData=res.data;
            setFormData(allData);
        })
    };

    useEffect(()=>{
        details();
    },[])

    return (
      <div>  <form onSubmit={handleSubmit}>
            <h1>Employee Details</h1>
           <div className="box"> <input
             value={formData.Name}
             id="Name"
             type="text"
             onChange={handleChange}
             placeholder="Enter your name..."
            />

            <input
             value={formData.Age}
             id="Age"
             type="Number"
             onChange={handleChange}
             placeholder="Enter your age..."
            />

            <input
             value={formData.Address}
             id="Address"
             type="text"
             onChange={handleChange}
             placeholder="Enter your address..."
            /> 

            <input
             value={formData.Department}
             id="Department"
             type="text"
             onChange={handleChange}
             placeholder="Enter your department..."
            />  
            
           
            
            <input
             value={formData.Salary}
             id="Salary"
             type="Number"
             onChange={handleChange}
             placeholder="Enter your salary..."
            />

            <input 
             value={formData.Marital_state}
             id="Marital_state"
             type="text"
             onChange={handleChange}
             placeholder="Enter your marital status..."
            />

<input type="submit" value={"Create user"}/>

            </div>
        </form>

        {
            formData.map((e)=>(
                <tr>
              <td >{e.Name}</td>
              <td>{e.Age}</td>
              <td>{e.Address}</td> 
              <td>{e.Department}</td>
              <td>{e.Marital_state}</td>
              <td>{e.Salary}</td>
            </tr>
            ))


        }
        </div>
      
    )



}
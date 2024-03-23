import { useState } from "react";
import "./Form.css";
import axios from "axios";

axios.defaults.baseURL="http://localhost:2000";

export default function Form2(props){

    const [data,setdata]=useState({});
    

    function ch(e){
        var v={}
        v[e.target.name]=e.target.value;
        setdata({...data,...v})

       console.log(data)
    }

    function submit(){
        axios.post('/user',data)
        .then(()=>{console.log(data)}) 
        .then()   
    }
    function f(){
        props.func(1);
     }
    return(
        <div className="form" >
            <div className="cord">
                <label>Enter No</label>
                <input type="text" name="user_id" onChange={ch}></input>
                <label>Enter Name</label>
                <input type="text" name="Name" onChange={ch}></input>
                <div>
                    <button className="btn" onClick={submit}>Submit</button>
                </div>
                <p onClick={f}>Clear</p>
            </div>

        </div>
    )
}
import { useState } from "react";
import "./Form.css";
import axios from "axios";

axios.defaults.baseURL="http://localhost:2000";

export default function(props){

    const [data,setdata]=useState({});

    

    function ch(e){
        var v={}
        v[e.target.name]=e.target.value;
        setdata({...data,...v})

       console.log(data)
    }

    function submit(){
        axios.post('/book',data)
        .then(()=>{console.log(data)}) 
        .then()
    }
    function f(){
        props.func(1);
     }
    return(
        <div className='form'>
            
            <div className="cord">
                <label>Enter No</label>
                <input type="text" name="book_id" onChange={ch}></input>
                <label>Enter Name</label>
                <input type="text" name="Name" onChange={ch}></input>
                <label>Avaiable</label>
                <input type="text" name="Available" onChange={ch}></input>
                <div>
                    <button className="btn" onClick={submit}>Submit</button>
                </div>
                <p onClick={f}>Clear</p>
            </div>
        </div>
    )
}
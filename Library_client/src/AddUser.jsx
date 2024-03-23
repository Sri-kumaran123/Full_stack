import "./AddUser.css";

import { useState,useEffect } from "react";

import axios from "axios";
import Form from "./Form";
import Form2 from "./Form2";
axios.defaults.baseURL="http://localhost:2000";



function AddUser1(props){

    const [data,setdata]=useState([]);
    const [d,setd]=useState(true);
    const [a1,seta1]=useState(false);
    const [a2,seta2]=useState(false);

    useEffect(()=>{
        fun();
    },[d])


   function fun(){
        var data1;
        axios.get("/user")
        .then(res=>{
            setdata(res.data);
        })
        console.log(data)
    }

    function onclick1(obj1,obj2){
        function f(a){
            return a!=obj2;
        }
        var t={
            user_id:obj1,
            hold:[]

        }
        console.log(obj1,obj2);
        var k;
        axios.post("/findb",{book_id:obj2})
        .then(res=>{console.log(res.data[0].Available);k=res.data[0].Available})
        .then(()=>{
            k=k+1;
            axios.post('updatebook',{book_id:obj2,Available:k})
        })
        axios.post("/findu",{user_id:obj1})
        .then(res=>t.hold=res.data[0].hold)
        .then(()=>{
            t.hold=t.hold.filter(f);
        })
        .then(()=>{
            axios.post("/updateuser",t)
            
        })
        .then(()=>{
            setd(!d);
        })
        
    }
    
    function f1(){
        props.func(2);
    }
    function f2(){
        props.func(3);
    }
   
    return(
        <div className="adduser">
        <div className="first">
            <p onClick={f1}>add user</p>
            <p onClick={f2}>add book</p>
        </div>
        <div className="second">
            {console.log(data)}
            {data?data.map(x=>{return <Box x={x} onclick={onclick1}/>}):""}
         </div>
         
         
         </div>
         
    )
}

function Box({x,onclick}){
    console.log(x)
    function fun2(){
        var v=prompt("Enter User id");
        onclick(x.user_id,v);
    }
    return (
        <div className="box3">
                <div className="c">{x.Name}</div>
                <div>hold books:{x.hold?x.hold.map(x=>x):''}</div>
                <div  className="l">
                   <button className="btn" onClick={fun2}> return</button>
                </div>
        </div>
    )
}

export default function AddUser(){

    const [d,setd]=useState(1);
    console.log(d);
    function fch(obj){
        setd(obj)
    }
    function r(){
        if(d==1) return <AddUser1 func={fch}/>
        else if (d==2) return <Form func={fch}/>
        else return<Form2 func={fch}/>
    }
    return(
<>

{r()}
</>
    )
}
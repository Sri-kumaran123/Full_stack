import Box from "./Box";
import "./Available.css";
import axios from "axios";
import { useState,useEffect } from "react";

axios.defaults.baseURL="http://localhost:2000";

export default function Available(){
    const [data,setdata]=useState([]);
    const [d,setd]=useState(true);

    useEffect(()=>{
        fun();
    },[d])


   function fun(){
        var data1;
        axios.get("/book")
        .then(res=>{
            data1=res.data;
            console.log(res.data)
            setdata(res.data);
        })
        const str=data1;
        setdata(str)
        console.log(data);
    }

    function onclick1(obj,obj2){
        console.log("see",obj)
        var t={
            user_id:obj,
            hold:[]

        }
        var k;
        axios.post("/findu",{user_id:obj})
        .then(res=>t.hold=res.data[0].hold)
        .then(()=>{
            t.hold=[...t.hold,obj2]
        })
        .then(()=>{
            axios.post("/updateuser",t)
            .then(()=>console.log('see'))
        })
        .then(()=>{
            axios.post("/findb",{book_id:obj2})
            .then(res=>{console.log(res.data[0].Available);k=res.data[0].Available})
            .then(()=>{
                k=k-1;
                axios.post('updatebook',{book_id:obj2,Available:k})
            })
            .then(()=>{
                setd(!d);
            })
        })
       
       

    }
    const a=data;
    return(
        <div className="r-side1">
            
                {data?data.map(x=><Box data={x} onclick={onclick1}/>):''}
        </div>
    )
}
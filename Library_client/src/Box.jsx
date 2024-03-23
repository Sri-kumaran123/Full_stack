import './Box.css';
import img1 from './image/im.jpg';

export default function({data,onclick}){ 

    console.log(onclick);
    function click(){
        var v=prompt("Enter User id");
        onclick(v,data.book_id);
    }
    
    return(
        <div className='box'>
            
            <img src={img1} className='image'/>
            
            <div className=' title'>
                {data.Name}
            </div>
            <div className=' side-detaile'>
                Available: {data.Available}
            </div>
            <div className='side-detaile2'>
                <button className='btn' onClick={click}>add</button>
            </div>
        </div>
    )
}
import Available from './Available';
import './Content.css';
import { Route,Routes } from 'react-router-dom';
import Message from './Message';
import AddUser from './AddUser';

export default function Content(){

    return(
        <section className='r-side'>
            <Routes>
                <Route path='/' Component={Message}/>
                <Route path='/Messages' Component={Message}/>
            <Route path='/Avalablity' Component={Available}/>
            <Route path='/User' Component={AddUser}/>
            </Routes>
        </section>
    )
}
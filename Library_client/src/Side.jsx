import { Link } from 'react-router-dom';
import './Side.css';

export default function Side(){
    const menu=['Messages','Avalablity','User']
    return(
        <section className='side'>
            {menu.map(x=><div className='inside'><Link to={x}>{x}</Link></div>)}
        </section>
    )
}

import './card-list.style.css'
import {Card} from '../card/card.component.jsx';

const CardList = (props) => {
    
    return (
        <div className='card-list'>
             {props.monsters.map(monster => (<Card key={monster.id} monster={monster}></Card>))}
        </div>
    )
}

export default CardList;

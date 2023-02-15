import ShopCard from './ShopCard';

function CardsView({cards}) {
    return (
        <div className='cards'>
            {cards.map((card, index) => (
                <ShopCard card={card} key={index}/>
            ))}
        </div>        
    );
}

export default CardsView;

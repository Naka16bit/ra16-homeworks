import ShopItem from './ShopItem';

function ListView({items}) {
    return (
        <div className='items'>
            {items.map((item, index) => (
                <ShopItem item={item} key={index}/>
            ))}
        </div>        
    );
}

export default ListView;

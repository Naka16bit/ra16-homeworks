import PropTypes from 'prop-types';

function Item({item}) {
    if (item.state != 'active') return null;

    const title = item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title;

    let price;
    if (item.currency_code === 'USD') {
        price = '$' + item.price;
    } else if (item.currency_code === 'EUR') {
        price = '€' + item.price;
    } else {
        price = item.price + ' ' + item.currency_code;
    }

    let level;
    if (item.quantity <= 10) {
        level = 'level-low';
    } else if (item.quantity <= 20) {
        level = 'level-medium';
    } else {
        level = 'level-high';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title"> {title} </p>
                <p className="item-price"> {price} </p>
                <p className={"item-quantity " + level}> {item.quantity} left </p>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    }),
};

export default Item;

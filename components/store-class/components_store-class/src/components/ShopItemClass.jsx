import React from 'react';

class ShopItemClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        const price = Math.round(item.price*100/100).toFixed(2);

        return (
            <div class="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div class="description">{item.descriptionFull}</div>
                <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
                <div class="divider"></div>
                <div class="purchase-info">
                    <div class="price">{price} {item.currency}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

export default ShopItemClass;

import "./CartCard.css";

export const CartCard = ({ product }) => {
    const { name, price, image } = product;

    return (
        <div className="cart-cart">
            <img src={image} alt={name} />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
            <button>Remove</button>
        </div>
    );
};

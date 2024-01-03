import "./ProductCard.css";

interface ProductCardProps {
  product: {
    name: string;
    price: number;
    image: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

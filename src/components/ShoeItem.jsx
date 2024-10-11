import "./ShoeItem.css";

export default function ShoeItem({ products }) {
  return (
    <>
      <div className="container">
        <h1>Все кросссовки</h1>
        <div className="shoe">
          {products.map((item) => (
            <div className="shoeCard">
              <img src={item.image} alt="" className="imgShoes" />
              <p>{item.title}</p>
              <h6>Цена:</h6>
              <span className="priceShoes">{item.price}</span>
            </div>
          ))}
        </div>
        ;
      </div>
    </>
  );
}

{
  /* <div className="div">
  <h1>Nike Blazer Mid Suede</h1>
  <div className="Shoe">
    {products.map((item) => (
      <div className="shoe-blok">
        <img src={item.image} alt="" className="img-shoes" />
        <p>{item.title}</p>
        <h6>Цена:</h6>
        <span className="price-shoes">{item.price}</span>
      </div>
    ))}
  </div>
  ;
</div>; */
}

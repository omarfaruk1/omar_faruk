const products = [
  {
    id: 101,
    name: 'Rolls-Royce',
    price: 300000,
    inStock: true,
    imageURL: 'product1.webp',
    rating: 4,
    reviews: 20,
    specs: [
      { name: 'Engine', value: 'V12' },
      { name: 'Horsepower', value: '563 hp' },
      { name: 'Top Speed', value: '155 mph' },
    ],
    description: 'The ultimate in luxury and performance.',
  },
  {
    id: 102,
    name: 'McLaren F1 LM',
    price: 200000,
    inStock: false,
    imageURL: 'product2.webp',
    rating: 5,
    reviews: 30,
    specs: [
      { name: 'Engine', value: 'V12' },
      { name: 'Horsepower', value: '627 hp' },
      { name: 'Top Speed', value: '225 mph' },
    ],
    description: 'A race-inspired hypercar with stunning speed.',
  },
  {
    id: 103,
    name: 'PORSCHE Cayman',
    price: 249000,
    inStock: true,
    imageURL: 'product3.webp',
    rating: 4,
    reviews: 40,
    specs: [
      { name: 'Engine', value: 'Flat-6' },
      { name: 'Horsepower', value: '414 hp' },
      { name: 'Top Speed', value: '182 mph' },
    ],
    description: 'An iconic sports car with dynamic handling.',
  },
  {
    id: 104,
    name: 'Mercedes-Benz',
    price: 99000,
    inStock: false,
    imageURL: 'product4.webp',
    rating: 3,
    reviews: 90,
    specs: [
      { name: 'Engine', value: 'I6' },
      { name: 'Horsepower', value: '429 hp' },
      { name: 'Top Speed', value: '155 mph' },
    ],
    description: 'A perfect blend of elegance and technology.',
  },
];

const ProductCard = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      {products.map((product) => (
        <div
          key={product.id}
          className='product-card'
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <img
            src={product.imageURL}
            alt={product.name}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p style={{ fontSize: '14px', color: '#555' }}>{product.description}</p>
          <p>
            <strong>Rating:</strong> {'⭐'.repeat(product.rating)} ({product.reviews} reviews)
          </p>
          <ul style={{ textAlign: 'left', padding: '0', listStyleType: 'none' }}>
            <strong>Specifications:</strong>
            {product.specs.map((spec, index) => (
              <li key={index} style={{ fontSize: '14px', color: '#555' }}>
                {spec.name}: {spec.value}
              </li>
            ))}
          </ul>
          {product.inStock ? (
            <button
              className='buy-now-button'
              style={{
                backgroundColor: 'green',
                color: 'white',
                transition: 'transform 0.2s',
              }}
            >
              Buy Now
            </button>
          ) : (
            <button
              className='out-of-stock-button'
              style={{
                backgroundColor: 'red',
                color: 'white',
                transition: 'transform 0.2s',
              }}
              disabled
            >
              Out of Stock
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

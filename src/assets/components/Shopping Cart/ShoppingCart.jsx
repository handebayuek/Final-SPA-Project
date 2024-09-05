import React, { useState, useEffect, useContext } from "react";
import { useRemoveFromCart } from "../../hooks/useRemoveFromCart";
import { useFetch } from "../../hooks/useFetch";

function ShoppingCart() {
  const { data } = useFetch("./data.json"); // Veriyi ve yükleme durumunu alın
  const [product, setProducts] = useState([]); // Ürünler için state oluştur
  const removeFromCart = useRemoveFromCart();

  // Veriler geldiğinde state'i güncelle
  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data); // Gelen veriyi state'e ata
    }
    console.log("Fetched data:", data);
  }, []);

  const handleQuantityChange = (productId, value) => {
    const numericValue = parseInt(value, 10); // Gelen değeri sayıya çevir
    const updatedCartArr = product.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: numericValue }; // Ürünü güncelleyip yeni dizi oluştur
      }
      return item;
    });
    setProducts(updatedCartArr);
  };

  const totalPrices = product.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 0), // Varsayılan değerler ekle
    0
  );

  return (
    <>
      <div className="shopping-card">
        {product.length === 0 ? (
          <h2>Shopping Cart is Empty</h2> // Sepet boş ise mesaj gösterilir
        ) : (
          product.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.product_name}
                className="shopping-image"
              />
              <div className="shopping-details">
                <h2>{product.product_name}</h2>
                <p>{product.bulk}</p>
                <input
                  min="0"
                  type="number"
                  value={product.quantity || 0}
                  onChange={(e) =>
                    handleQuantityChange(product.id, e.target.value)
                  }
                />
                <p>{(product.price || 0).toFixed(2)}</p>
                <p>
                  {((product.price || 0) * (product.quantity || 0)).toFixed(2)}
                </p>
                {/* NaN'ı önlemek için */}
                <button onClick={() => removeFromCart(product.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div>
        <h4>
          Total Price: <span>{totalPrices.toFixed(2)}</span>
        </h4>
      </div>
    </>
  );
}

export default ShoppingCart;

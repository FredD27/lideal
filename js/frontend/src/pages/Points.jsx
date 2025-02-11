import React, { useEffect, useState } from "react";

function Points() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/products");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setProductData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDataProduct();
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  // const products = [
  //   {
  //     id: 1,
  //     name: "Beaume",
  //     img: "./src/assets/lorealproduct.jpg",
  //     price: 15,
  //   },
  //   {
  //     id: 2,
  //     name: "Rouge",
  //     img: "./src/assets/correcteur.jpg",
  //     price: 10,
  //   },
  //   {
  //     id: 3,
  //     name: "Creme",
  //     img: "./src/assets/lorealproduct.jpg",
  //     price: 30,
  //   },
  //   {
  //     id: 4,
  //     name: "Pipe",
  //     img: "./src/assets/lorealproduct.jpg",
  //     price: 50,
  //   },
  //   {
  //     id: 5,
  //     name: "Creamy",
  //     img: "./src/assets/lorealproduct.jpg",
  //     price: 30,
  //   },
  // ];

  const shops = [
    {
      id: 1,
      name: "Salon de coiffure Bon'hair",
      img: "./src/assets/coiffure.jpeg",
    },
    {
      id: 2,
      name: "Salon de manucure ongle ben",
      img: "./src/assets/manucure.jpeg",
    },
    {
      id: 3,
      name: "Pharmacie Jules",
      img: "./src/assets/pharmacie.jpeg",
    },
    {
      id: 4,
      name: "Coiffure Bel'Hair",
      img: "./src/assets/coiffure.jpeg",
    },
    {
      id: 5,
      name: "Manucure Cathy",
      img: "./src/assets/manucure.jpeg",
    },
  ];

  return (
    <div className="point-container bg-white">
      <div className="point-part container-max t-center">
        <div className="contain d-flex d-flex-center">
          <div className="points-container radius bg-black d-flex d-flex-center mt-30 mb-30">
            <div>
              <h1 className="mb-20">Mes points</h1>
              <h2 className="mb-20 points">100 points</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="favorite-part bg-black border-10">
        <div className="contain">
          <h2 className="mt-10 mb-20">Mes produits favoris</h2>
          <ul className="horizontal-scroll line-product">
            {productData.map((data) => (
              <li
                className="card product-card bg-white radius-10"
                key={data.id}
              >
                <a
                  className="d-flex d-flex-space-between d-flex-column h-100"
                  href={data.pproduct_link}
                >
                  <img className="mb-20" src={data.product_img} alt="product" />
                  <figure className="t-center mb-10">
                    <h3>
                      {data.product_name} - {data.product_new_price}€
                    </h3>
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="contain bg-white reduc mb-30">
        <h2 className="mt-10 mb-20">Mes offres</h2>
        <div className="line-offer d-flex d-flex-center mb-20">
          <figure className="promo promo-10">
            <img src="./src/assets/reduc.png" alt="reduc" />
            <figcaption className="w-100 h-100 t-center">-5%</figcaption>
          </figure>
          <h3>Pour 100 Points</h3>
        </div>
        <div className="line-offer d-flex d-flex-center mb-20">
          <figure className="promo promo-10">
            <img src="./src/assets/reduc.png" alt="reduc" />
            <figcaption className="w-100 h-100 t-center">-10%</figcaption>
          </figure>
          <h3>Pour 200 Points</h3>
        </div>
        <div className="line-offer d-flex d-flex-center mb-20">
          <figure className="promo promo-10">
            <img src="./src/assets/reduc.png" alt="reduc" />
            <figcaption className="w-100 h-100 t-center">-15%</figcaption>
          </figure>
          <h3>Pour 300 Points</h3>
        </div>
        <button
          className="button mi-auto radius-10 pb-10 bg-black mt-30"
          type="button"
          onClick={() => {
            setShowPopup(!showPopup);
          }}
        >
          Générer mon code
        </button>
      </div>
      <div className="shop bg-black contain mb-40">
        <h2 className="mt-10 mb-20">Mes points de ventes locaux</h2>
        <div className="horizontal-scroll line-product mt-20">
          {shops.map((data) => (
            <div
              className="card shop-card d-flex d-flex-space-between d-flex-column bg-white radius-10"
              key={data.id}
            >
              <img src={data.img} alt="product" />
              <div>
                <h3>{data.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`popup-container${showPopup ? " active" : ""}`}>
        <div className="popup-infos d-flex d-flex-column d-flex-space-around">
          <div>
            <h2 className="t-center mb-20">Voici votre code:</h2>
            <h2 className="t-center pt-10 pb-10 bg-black">lideal10</h2>
          </div>
          <a
            href="https://www.loreal-paris.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button bg-black mb-20" type="button">
              Utiliser sur le site
            </button>
          </a>
          <button
            className="button mi-auto radius-10 bg-black"
            type="button"
            onClick={() => {
              setShowPopup(!showPopup);
            }}
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}

export default Points;

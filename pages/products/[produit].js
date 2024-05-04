export default function produit(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.produit.title}</h1>
      <img src={props.produit.image} alt={props.produit.title} />
      <p>{props.produit.price}</p>
      <p></p>
      <p>{props.produit.description}</p>
      <p></p>
    </div>
  );
}
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// },

export async function getStaticProps(context) {
  const id = context.params.produit;
  const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  const produit = await data.json();
  return {
    props: { produit },
  };
}
export async function getStaticPaths() {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const produits = await data.json();

  const paths = produits.map((item) => ({
    params: { produit: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

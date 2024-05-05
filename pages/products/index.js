import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosCart } from "react-icons/io";
export default function Produits(props) {
  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  console.log(props);
  return (
    <div className="bg-[#ECECEE]">
      <div className="mx-auto max-w-[350px] sm:max-w-sm md:max-w-[40rem] lg:max-w-[45rem]">
        <h1 className="text-2xl font-bold my-8">List of products</h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
          {props.products.map((item) => (
            <div className="bg-white rounded-lg px-3">
              <Link href={`/products/${item.id}`} className="cursor-pointer">
                <Slider {...settings}>
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={image}
                        alt={item.title}
                        className="mt-2 rounded-md"
                      />
                    </div>
                  ))}
                </Slider>
                <h2 className="text-sm font-semibold mt-2">{item.title}</h2>

                <div className="flex flex-row justify-between my-2">
                  <div>
                    <p className="text-xs text-slate-600">
                      {item.category.name}
                    </p>
                    <p className="text-sm font-bold">{item.price}$</p>
                  </div>
                  <div className="">
                    <IoIosCart className="text-white text-end text-3xl bg-black rounded-full p-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await fetch("https://api.escuelajs.co/api/v1/products");
  const products = await data.json();
  return {
    props: { products },
  };
}
//https://fakestoreapi.com/products
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

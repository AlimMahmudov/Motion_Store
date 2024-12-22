// "use client";
// import { useParams } from "next/navigation";
// import scss from "./Details.module.scss";
// import Image from "next/image";
// import { MdFavoriteBorder } from "react-icons/md";

// interface IProduct {
//   id?: number;
//   brand: string;
//   model: string;
//   processor: string;
//   Ram: string;
//   storage: string;
//   price: string;
//   Description: string;
//   image: string;
// }

// const Details = () => {
//   const { data } = UseData();
//   const { id } = useParams();

//   const findProduct: IProduct | undefined = data?.find(
//     (el) => el.id === Number(id)
//   );
//   const adBasket = () => {
//     if (!findProduct) return;
//     const storedProduct = localStorage.getItem("product");
//     const product = storedProduct ? JSON.parse(storedProduct) : [];

//     const productWithDate = {
//       ...findProduct,
//       addedAt: new Date().toString(),
//     };
//     localStorage.setItem(
//       "product",
//       JSON.stringify([...product, productWithDate])
//     );
//   };
//   return (
//     <div id={scss.Details}>
//       <div className="container">
//         <div className={scss.details}>
//           {findProduct?.image && (
//             <Image
//               src={findProduct.image}
//               alt={findProduct.model}
//               width={320} // Указываем ширину
//               height={300} // Указываем высоту
//               style={{ objectFit: "cover" }} // Настраиваем отображение изображения
//             />
//           )}
//           <div className={scss.text}>
//             <h1>{findProduct?.model}</h1>
//             <p>{findProduct?.Description}</p>

//             <h3>Основные характеристики</h3>
//             <div className={scss.haracter}>
//               <div className={scss.haracter_text}>
//                 <p>Модель:</p>
//                 <p>Бренд:</p>
//                 <p>Размер оперативной памяти:</p>
//                 <p>Процессор:</p>
//                 <p>Размер хранилища:</p>
//               </div>
//               <div className={scss.haracter_data}>
//                 <p>{findProduct?.model}</p>
//                 <p>{findProduct?.brand}</p>
//                 <p>{findProduct?.Ram} ГБ</p>
//                 <p>{findProduct?.processor}</p>
//                 <p>{findProduct?.storage} ГБ</p>
//               </div>
//             </div>
//             <div className={scss.price}>
//               <h2>{findProduct?.price} сом</h2>
//               <div className={scss.buttons}>
//                 <button onClick={adBasket}>Купить</button>
//                 <button className={scss.favorite}>
//                   <MdFavoriteBorder />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

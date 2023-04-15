// import ComboBlock from "../components/products/ComboBlock";
// import SnacksBlock from "../components/products/SnacksBlock";
// // import BeveragesBlock from "./components/products/BeveragesBlock";
// import SaucesBlock from "../components/products/SaucesBlock";

// import snacks from "../assets/shanks.json";
// import sauces from "../assets/sauces.json";

// const Home = () => {
//   const [items, setItems] = useState([]);
//   const [comboItems, setComboItems] = useState([]);
//   const [categoryId, setCategoryId] = useState(0)
//   const [sort, setsort] = useState({
//     name : 'популярности',
//     sortProperty: 'rating',
//   });

//   console.log(categoryId, sort)
  
//     useEffect(() => {
//       fetch(`https://6425b5ce9e0a30d92b39f227.mockapi.io/burgers?${
//         categoryId > 0 ? `category=${categoryId}` : ''
//       }&sortBy=${sort.sortProperty}&order=desc`)
//       .then((res) => res.json())
//         .then((arr) => {
//           setItems(arr)
//       });
//     }, [categoryId, sort]);
// // =-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-==-=-=-=-=-=
//     import React from "react";

// function Categories({ value, onCategory }) {
//   const categories = ['Все', 'Бургеры', 'Комбо', 'Закуски', 'Соусы'];

//     return (
//         <div className="categories">
//                 <ul>
//                   {categories.map((categoryName, i ) => 
//                       <li key={i} onClick={() => onCategory(i)} className={value === i ? 'active' : ''}>{categoryName}</li>
//                     )}
//                 </ul>
//               </div>
//     )
// }
// export default Categories
  
//     // useEffect(() => {
//     //   fetch('https://6425b5ce9e0a30d92b39f227.mockapi.io/combo')
//     //   .then((res) => res.json())
//     //     .then((arr) => {
//     //       setComboItems(arr)
//     //   });
//     // }, []);

//   return (
//     <>
//         <div className="navigation">
//             <Categories value={categoryId} onCategory={(i) => setCategoryId(i)} />
//             <Sort value={sort} onSort={(i) => setsort(i)} />
//         </div>
//         <h2 className="content_title">Бургеры</h2>
//             <div className="content_items">
//               <div className="content_burger main_content">
//                 {
//                   items.map((obj) => (
//                     <BurgerBlock
//                       key={obj.id}
//                       name={obj.name}
//                       price={obj.price}
//                       weight={obj.weight}
//                       image={obj.imageUrl}/>
//                     ))}
//               </div>
//                   <h2 className="content_title">Комбо</h2>
//                   <div className="content-combo main_content">
//                     {
//                       comboItems.map((obj) => (
//                         <ComboBlock 
//                           key={obj.id}
//                           name={obj.name}
//                           price={obj.price}
//                           weight={obj.weight}
//                           image={obj.imageUrl}
//                         />
//                       ))}
//                   </div>
//                   <h2 className="content_title">Закуски</h2>
//                   <div className="content-combo main_content">
//                     {
//                       snacks.map((obj) => (
//                         <SnacksBlock
//                           key={obj}
//                           image={obj.imageUrl}
//                           price={obj.price}
//                           name={obj.name}
//                           weight={obj.weight}
//                         />
//                       ))}
//                   </div>
//                 {/* <h2 className="content_title">Напитки</h2>
//                 <div className="content-beverages main_content">
//                   <BeveragesBlock />
//                 </div> */}
//                 <h2 className="content_title">Соусы</h2>
//                 <div className="content-beverages main_content">
//                   {
//                     sauces.map((obj) => (
//                       <SaucesBlock 
//                         key={obj}
//                         image={obj.imageUrl}
//                         price={obj.price}
//                         name={obj.name}
//                         weight={obj.weight}
//                       />
//                     ))}
//                 </div>
//             </div>
//     </>
//   )
// }

// export default Home;
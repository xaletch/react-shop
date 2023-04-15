import React, {useState, useEffect, useContext, useRef} from 'react'
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import axios from "axios";

import { setCategoryId, setFilters } from '../redux/filterSlice';
import Categories from "../components/Categories";
import Sort, { sortList } from "../components/Sort"

import ProductBlock from '../components/products/ProductBlock';
import Loader from '../components/ProductsBlock/Loader';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { categoryId, sort } = useSelector(state => state.filter);
  // console.log('id category ', categoryId)
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  // console.log(categoryId, sort)
  const [isLoading, setIsLoading] = useState(true);
  
  const onCategory = (id) => {
    dispatch(setCategoryId(id));
    // console.log('category id ', id)
  }
 
  const fetchProducts = () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';
    
    axios
      .get(`https://6425b5ce9e0a30d92b39f227.mockapi.io/burgers?${category}${search}&sortBy=${sortBy}&order=${order}`)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
  };

  // Eсли изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
      });
      navigate(`?${queryString}`); 
    } else {
      isMounted.current = true;
    }
  }, [categoryId, sort]);

  // Eсли был первый рендер, то проверяем URL-параметры и сохраняем в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);
      
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true;
    }
  }, []);

  // Если был первый рендер, то запрашиваем продукты
  useEffect(() => {
    window.scrollTo(0, 0)

    if (!isSearch.current) {
      fetchProducts();
    } else {
      isSearch.current = false;
    };
  }, [categoryId, sort, searchValue]);

  const goods = items.map((obj) => <ProductBlock key={obj.id} {...obj} />)
  const skeleton = [...new Array(8)].map((_, index) => <Loader key={index} />)

  return (
      <div className="container">
        <div className="navigation">
            <Categories value={categoryId} onCategory={onCategory} />
            <Sort />
        </div>
        <h2 className="content_title">Все</h2>
            <div className="content_items">
              <div className="content_burger main_content">
                {isLoading 
                  ? skeleton : goods
                }
              </div>
            </div>
        </div>
  )
}

export default Home;
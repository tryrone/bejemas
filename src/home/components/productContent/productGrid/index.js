import React,{useState} from 'react';
import { Row, Col, Checkbox, Radio } from 'antd';
import style from '../index.module.css';
import 'antd/dist/antd.css';
import ProductCard from '../productCard';
import useDeviceSize from '../../../../../util';
import ReactPaginate from 'react-paginate';
import {useSelector} from 'react-redux'

const backBtn = '/images/backArr.svg';
const nextBtn = '/images/nextArr.svg';

 function ProductGrid({visible}) {
       const [width] = useDeviceSize(); 
       const radioVisibility = width <= 760 ? 0 : 6;
       const imageVisibility = width <= 760 ? 24 :18;
       const [filterObj, setFilterObj] = useState({
         category: [],
         price:{
           min:0,
           max:2000
         },
         sort:''
       });

       const products = useSelector((state) => state.CartReducer.products);
       const [currentPage ,setCurrentPage] = useState(1);
       const [productPerPage] = useState(6);

       //filter
       const buildFilter = (filter) => {
         let query = {};
         for (let keys in filter) {
           if ( (filter[keys].constructor === Object) || filter[keys].constructor === Array && filter[keys].length > 0) {
             query[keys] = filter[keys];
           }
         }
         return query;
       };

       const filterData = (data, query) => {
           const keysWithMinMax = [
              'price',
          ];
          const filteredData = data.filter( (item) => {
              for (let key in query) {
                  if (item[key] === undefined) {
                      return false;
                  }
                  else if (keysWithMinMax.includes(key)) {
                      if (query[key]['min'] !== null && item[key] < query[key]['min']) {
                          return false;
                      }
                      if (query[key]['max'] !== null && item[key] > query[key]['max']) {
                          return false;
                      }
                  }
                  else if (!query[key].includes(item[key])) {
                      return false;
                  }
              }
              return true;
          });
          return filteredData;
       };

       const query = buildFilter(filterObj);
       const result = filterData(products, query);

       //get current product
       const indexOfLastProduct = currentPage * productPerPage;
       const indexOfFirstProduct = indexOfLastProduct - productPerPage;
       const currentProducts =  result.slice(indexOfFirstProduct,indexOfLastProduct);

       const paginate = (num) => {
         setCurrentPage(num)
       }

       const updateFilter = (val) => {
         setFilterObj({ ...filterObj, sort: '', price: { min: 0, max: 2000 } });
            if (filterObj.category.length === 0) {
              setFilterObj({ category: [...filterObj.category, val] });
            } else {
              filterObj.category.map((item, index) => {
                if (item === val) {
                  setFilterObj({
                    category: filterObj.category.filter(
                      (value) => value !== val
                    ),
                  });
                } else {
                  setFilterObj({ category: [...filterObj.category, val] });
                }
              });
            }    
       }

       const setRange = (val) =>{
         setFilterObj({...filterObj, category :[]});
         if(val.target.value === 1){
           setFilterObj({...filterObj,price:{min:0,max:20}});
         }else if(val.target.value === 2){
           setFilterObj({...filterObj, price: { min: 20, max: 100 } });
         }else if (val.target.value === 3){
           setFilterObj({...filterObj, price: { min: 100, max: 200 } });
         }else{
           setFilterObj({...filterObj, price: { min: 200, max: 2000 } });
         }
       }

      return (
        <div className={style.radioWrap}>
          <Row>
            <Col span={radioVisibility}>
              <div className={style.filterContainer}>
                <h3>Category</h3>
                <div className={style.checkboxWrap}>
                  <Checkbox
                    className={style.myCheck}
                    value="people"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    People
                  </Checkbox>
                  <Checkbox
                    className={style.myCheck}
                    value="premium"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    Premium
                  </Checkbox>
                  {/* <Checkbox className={style.myCheck}  value="pets" onChange={(val) => updateFilter(val.target.value)} onChange={() => {}}>
                    Pets
                  </Checkbox> */}
                  <Checkbox
                    className={style.myCheck}
                    value="food"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    Food
                  </Checkbox>
                  <Checkbox
                    className={style.myCheck}
                    value="landmarks"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    Landmarks
                  </Checkbox>
                  <Checkbox
                    className={style.myCheck}
                    value="cities"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    Cities
                  </Checkbox>
                  <Checkbox
                    className={style.myCheck}
                    value="nature"
                    onChange={(val) => updateFilter(val.target.value)}
                  >
                    Nature
                  </Checkbox>
                </div>

                <div className={style.filterBottomContainer}>
                  <h3>Price range</h3>

                  <Radio.Group
                    className={style.radioCont}
                    onChange={(val) => {
                      setRange(val);
                    }}
                  >
                    <Radio className={style.myCheck} value={1}>
                      Lower than $20
                    </Radio>
                    <Radio className={style.myCheck} value={2}>
                      $20 - $100
                    </Radio>
                    <Radio className={style.myCheck} value={3}>
                      $100 - $200
                    </Radio>
                    <Radio className={style.myCheck} value={4}>
                      More than $200
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col span={imageVisibility}>
              <div
                className={
                  currentProducts.length === 2
                    ? style.productRowSmooth
                    : style.productRow
                }
              >
                {currentProducts.map((product, index) => {
                  return (
                    <ProductCard
                      key={index + 'product'}
                      product={product}
                      productsLength={currentProducts.length}
                    />
                  );
                })}
                {currentProducts.length === 0 && (
                  <div className={style.emptyCont}>
                    <h2 className={style.emptyText}>No Product Found ...</h2>
                  </div>
                )}
              </div>
              {currentProducts.length !== 0 && (
                <ReactPaginate
                  previousLabel={<img src={backBtn} />}
                  nextLabel={<img src={nextBtn} />}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={result.length / 6}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={(obj) => {
                    paginate(obj.selected + 1);
                  }}
                  containerClassName={style.pagination}
                  activeClassName={style.active}
                  pageLinkClassName={style.link}
                />
              )}
            </Col>
          </Row>
        </div>
      );
}


export default ProductGrid;
import React,{useState} from 'react'

import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import '../styles/shop.css'

import products from '../assets/data/products'
import ProductsList from '../components/UI/ProductsList'

const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e=>{
    const filterValue = e.target.value
      if(filterValue==='tshirts'){
        const filteredProducts = products.filter(item => item.category ==='tshirts')
        setProductsData(filteredProducts)
      }

      if(filterValue==='hoodies'){
        const filteredProducts = products.filter(item => item.category ==='hoodies')
        setProductsData(filteredProducts)
      }

      if(filterValue==='jeans'){
        const filteredProducts = products.filter(item => item.category ==='jeans')
        setProductsData(filteredProducts)
      }

      if(filterValue==='pants'){
        const filteredProducts = products.filter(item => item.category ==='pants')
        setProductsData(filteredProducts)
      }

      if(filterValue==='sweatshirts'){
        const filteredProducts = products.filter(item => item.category ==='sweatshirts')
        setProductsData(filteredProducts)
      }
  }

  const handleSearch = e=>{
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return (<Helmet title='Shop'>
    <CommonSection title='Products'/>

    <section>
    <Container>
      <Row>
        <Col lg='3' md='6'>
          <div className='filter_widget'>
            <select onChange={handleFilter}>
              <option>Filter By Category</option>
              <option value='tshirts'>tshirts</option>
              <option value='hoodies'>hoodies</option>
              <option value='jeans'>jeans</option>
              <option value='pants'>pants</option>
              <option value='sweatshirts'>sweatshirts</option>
            </select>
          </div>
        </Col> 
        <Col lg='3' md='6' className='text-end'>
        
        </Col>
        <Col lg='6' md='12'>
          <div className='search_box'>
            <input type='text' placeholder='Search......' onChange={handleSearch}/>
            <span>
              <i class="ri-search-line"></i>
            </span>
          </div>
        </Col>
      </Row>
    </Container>  
    </section> 

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No Products are found!</h1> 
            : <ProductsList data={productsData}/>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Shop
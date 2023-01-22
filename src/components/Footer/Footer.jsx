import React from 'react'
import './footer.css' 
import { Container, Row , Col, ListGroup, ListGroupItem} from'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md='6'>
          <div className='logo'>
              <div>
                  <h1 className='text-white'>La Galerie</h1>
              </div>
              </div>
              <p className='footer_text mt-4'>
                Id nulla incididunt duis commodo incididunt nisi. Ipsum 
                anim et est velit culpa sunt consectetur aute non nulla sunt minim. 
                Velit in nisi elit tempor nisi magna cillum commodo.
              </p>
            </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>T-Shirts</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Hoodies</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Jeans</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Sweatshirts</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='3' className='mb-4'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className='footer_quick-links'>
              <h4 className='quick_links-title'>Contact</h4>
              <ListGroup className='footer_contact'>
                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>Le Belvedere, 10 Rue de Jerusalem, Tunis 1002</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+21627947957</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex 
                align-items-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  <p>services@lagallery.com</p>
                </ListGroupItem>          
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className='footer_copyright'>Copyright {year} developed
            by Rochdi Sahraoui. All Right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
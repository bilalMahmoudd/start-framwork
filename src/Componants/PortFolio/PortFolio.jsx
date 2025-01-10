import './PortFolio.css'
import Products from '../Products/Products'

export default function PortFolio() {


  return (<>
    <section id='portfolio' className='py-2'>
      <h2 className='text-uppercase pt-3 text-center mb-3 fs-1 fw-bolder'>portfolio component</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3'></div>
        <i className='fa-solid fa-star'/>
        <div className='line ms-3'></div>
      </div>
      <div className='container'>
        <div className='row g-4'>
          <Products/>
        </div>
      </div>
    </section>
  </>)
}

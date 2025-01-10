import './Home.css'
import logo from '../../assets/avataaars.svg'
export default function Home() {
  return (<>
    <section id='Home'>
      <div className='home d-flex justify-content-center align-items-center text-center'>
        <div className='text-center'>
          <img src={logo} alt='logo' className=' mb-3' width='250px'/>
          <h2 className='text-uppercase text-white pt-3 text-center mb-3 fs-1 fw-bolder'>start Framework</h2>
          <div className='d-flex align-items-center justify-content-center mb-3'>
            <div className='line me-3'></div>
            <i className='fa-solid fa-star text-white'/>
            <div className='line ms-3'></div>
          </div>
          <div className='text-white'>Graphic Artist - Web Designer - Illustrator</div>
        </div>
      </div>
    </section>
  </>)
}

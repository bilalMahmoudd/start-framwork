import './About.css'
export default function About() {
  return (
    <section id='about' className='d-flex justify-content-center align-items-center flex-column'>
      <div className='text-center pt-3'>
        <h2 className='text-uppercase text-white  text-center mb-3 fs-1 fw-bolder'>about component</h2>
        <div className='d-flex align-items-center justify-content-center mb-3'>
          <div className='line me-3'></div>
          <i className='fa-solid fa-star text-white'/>
          <div className='line ms-3'></div>
        </div>
      </div>
      <div className='container'>
        <div className='row px-5'>
          <div className='col-md-6 ps-md-5 text-white'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className='col-md-6 ps-md-5 text-white'>
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

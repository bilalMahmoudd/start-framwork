import './Contact.css'

export default function Contact() {
  return (<>
    <section id='contact'>
      <h2 className='text-uppercase pt-3 text-center mb-3 fs-1 fw-bolder'>conatct section</h2>
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <div className='line me-3'></div>
        <i className='fa-solid fa-star'/>
        <div className='line ms-3'></div>
      </div>
      <div className='py-5 me-5'>
        <form>
          <div className="mb-5 w-50 m-auto">
            <input className=' border-0 border-bottom form-control' placeholder='userName' type="Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-5 w-50 m-auto">
            <input className=' border-0 border-bottom form-control' placeholder='userAge' type="Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-5 w-50 m-auto">
            <input className=' border-0 border-bottom form-control' placeholder='userEmail' type="Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-5 w-50 m-auto">
            <input className=' border-0 border-bottom form-control' placeholder='userPassword' type="Name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className='mb-4 w-50 m-auto'>
            <button className='btn mt-1 m-auto text-white'>Send Message</button>
          </div>
        </form>
      </div>
    </section>

  
  </>)
}

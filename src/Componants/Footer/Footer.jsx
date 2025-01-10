import './Footer.css'

export default function Footer() {
  return (<>
   <section id="footer" className="text-white text-center">
      <div className="m-4">
         <div className="row">
            <div className="col-md-4">
               <div className=" text-center text-white">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className=" text-center text-white">
                  <h3>AROUND THE WEB</h3>
                  <div className='icons'>
                     <i className='fa-brands fa-facebook mx-1 icon border border-2 p-2 rounded-circle'/>
                     <i className='fa-brands fa-twitter mx-1 icon border border-2 p-2 rounded-circle'/>
                     <i className='fa-brands fa-linkedin-in mx-1 icon border border-2 p-2 rounded-circle'/>
                     <i className='fa-solid fa-globe mx-1 icon border border-2 p-2 rounded-circle'/> 
                  </div>
               </div>
            </div>
            <div className="col-md-4">
               <div className=" text-center text-white">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id='copyright'>
      <div className='copyright'>
         <p className='text-white text-center mb-1 pt-2'>Copyright © Your Website 2021</p>
      </div>
   </section>
  </>)
}

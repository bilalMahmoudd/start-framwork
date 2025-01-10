import Port2 from '../../assets/port2.png'
import Port3 from '../../assets/port3.png'
import Port1 from '../../assets/poert1.png'
export default function Products() {
  return (<>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port1} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port2} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port3} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port1} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port2} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>
   <div className='col-lg-4 col-md-6'>
      <div className='item rounded-3 overflow-hidden position-relative'>
         <img src={Port3} className='w-100'/>
         <div className='layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
            <i className='text-white fa-solid fa-plus fa-6x'/>
         </div>
      </div>
   </div>

  </>)
}

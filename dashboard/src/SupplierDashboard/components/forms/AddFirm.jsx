
import React from 'react'

const AddFirm = () => {
  return (
    <div className='firmcontainer m-auto'>
        <h1 className='text-center'>Firm</h1>
     <form className="row g-3">
     <div className="col-md-7">
     <label for="inputName4" className="form-label">Name</label>
     <input type="text" className="form-control" id="inputName4"/>
     </div>
     <div className="col-md-6">
     <label for="inputNumber4" className="form-label">Mobile Number</label>
     <input type="Number" className="form-control" id="inputNumber4"/>
     </div>
     <div className="col-md-7">
     <label for="inputEmail4" className="form-label">Email</label>
     <input type="email" className="form-control" id="inputEmail4"/>
     </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-md-7">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div class="mb-3">
  <label for="formFile" class="form-label">Firm Image</label>
  <input class="form-control" type="file" id="formFile"/>
 </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
     <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
  )
}

export default AddFirm

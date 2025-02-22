import React from 'react'

const AddProduct = () => {
  return (
       <div className='productcontainer m-auto'>
        <h1 className='text-center'>Add Product</h1>
     <form className="row g-3">
     <div className="col-md-7">
     <label for="inputName4" className="form-label">Product Name</label>
     <input type="text" className="form-control" id="inputName4"/>
     </div>
     <div className="col-md-4">
     <label for="inputtext4" className="form-label">Price</label>
     <input type="text" className="form-control" id="inputtext4"/>
     </div>
     <label for="inputtext4" className="form-label">Category</label>
     <div className="col-md-6">
     <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Veg
      </label>
      </div>
      </div>
    <div className="col-md-6">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Non-Veg
      </label>
     </div>
     </div>
     <label for="inputtext4" className="form-label">Styles</label>
     <div className="col-md-2">
     <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        eastern
      </label>
      </div>
      </div>
      <div className="col-md-2">
     <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Western
      </label>
      </div>
      </div>
    <div className="col-md-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Chinese
      </label>
     </div>
     </div>
     <div className="col-md-2">
     <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Southern
      </label>
      </div>
     </div>
     <div className="col-md-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Northern
      </label>
     </div>
     </div>

     <div className="col-md-7">
     <label for="inputtext" className="form-label">Famous Foods</label>
     <input type="text" className="form-control" id="inputtext"/>
     </div>

     <div class="mb-3">
     <label for="formFile" class="form-label">Product Image</label>
     <input class="form-control" type="file" id="formFile"/>
     </div>
     <div className="col-12">
     <label for="inputtext" className="form-label">Description</label>
     <input type="text" className="form-control" id="inputtext"/>
     </div>
     <div className="col-12">
     <div className="text-center">
     <button type="submit" className="btn btn-primary">Submit</button>
     </div>
     </div>
    
</form>
    </div>
  )
}

export default AddProduct

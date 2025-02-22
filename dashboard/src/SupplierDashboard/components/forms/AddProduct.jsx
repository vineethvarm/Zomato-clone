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
     <div className="col-md-6">
     <label for="inputtext4" className="form-label">Price</label>
     <input type="text" className="form-control" id="inputtext4"/>
     </div>
     <div className="col-md-7">
     <label for="inputtext4" className="form-label">Category</label>
     <input type="text" className="form-control" id="inputtext4"/>
     </div>
     <div className="col-md-7">
     <label for="inputCity" className="form-label">Best Seller</label>
     <input type="text" className="form-control" id="inputCity"/>
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

import React,{useState} from 'react'
import baseUrl from '../../database/baseUrl'

const productId = ({ product }) => {
    const [quantity,setQuantity] = useState(1)
    const [modal,setModal] = useState(false)

    const increaseQuantity=()=>{
        setQuantity(quantity+1);
    }
    const decreaseQuantity=()=>{
        if(quantity >1){
            setQuantity(quantity-1);
        }else{
            setQuantity(1);
        }
    }
    console.log(modal);

    return (
        <>
        {/* <button  type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Delete</button>      
             <>         
        <div class="modal" style={{zIndex:"10"}}  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
            </> */}
        
            <div class="row-fluid mt-5">
                <div class="col-12 col-md-8 mx-auto ">
                    <div class="card mb-3 shadow-lg mb-5 bg-white rounded">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={product.mediaUrl} class="card-img img-fluid" alt={product.name} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title h4">{product.name}</h5>
                                    <p class="card-text h5">{product.description}</p>
                                    <p class="card-text h4">Rs {product.price}</p>
                                     {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>  */}

                                </div>
                                <div class="card-footer ">
                                    <center>
                                        <div class="btn-group " role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-outline-danger no_border" onClick={()=>decreaseQuantity()} ><i class="fas fa-minus"></i></button>
                                            <input type="text" class="btn btn-secondary" value={quantity} onChange={e=>setQuantity(e.target.value)}></input>
                                            <button type="button" class="btn btn-outline-warning no_border" onClick={()=>increaseQuantity()}><i class="fas fa-plus"></i></button>
                                        </div>
                                    </center>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}/api/product/${id}`)
    const data = await res.json()
    console.log(data);
    return {
        props: { product: data }
    }

}

export default productId

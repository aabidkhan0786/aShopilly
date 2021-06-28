export default function Home({products}) {
  return (
    <>
    <div class="row-fluid ">
      <div class="col-12 d-flex flex-row bd-highlight">
      {/* style={{"max-width": "18rem"}} */}
    {
      products.map((prod)=>(
        <>
     
        <div class="col-12 col-md-3 mx-auto m-2 ">
    <div class="card" >
      <img src={prod.mediaUrl} class="card-img-top" alt={prod.name}/>
      <div class="card-body">
        <h5 class="card-title">{prod.name}- <span class="float-right">{prod.price} Rs</span></h5>
        {/* <h5 class="card-title"></h5> */}
        <p class="card-text">{prod.description}</p>
      </div>
    </div>
  </div>

</>

))
}
</div>
    </div>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch("http://localhost:3000/api/product")
  const data = await res.json();
  return{
    props:{
      products:data
    }
  }
}
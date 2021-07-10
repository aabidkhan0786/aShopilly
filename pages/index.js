import Link from "next/link"
import baseUrl from "../database/baseUrl";

export default function Home({ products }) {
  return (
    <>
      <div className="row-fluid ">
        <div className="col-12 d-flex bd-highlight">
          {/* style={{"max-width": "18rem"}} */}
          {
            products.map((prod) => (
              <>

                <div className="col-12 col-md-3 mx-auto m-2 ">
                  <div className="card shadow-lg mb-5 bg-white rounded" >
                    <img src={prod.mediaUrl} className="card-img-top img-fluid" alt={prod.name} />
                    <div className="card-body">
                      <h5 className="card-title h3">{prod.name}- <span className="float-right"><b>{prod.price} Rs</b></span></h5>
                      {/* <h5 className="card-title"></h5> */}
                      <p className="card-text h5">{prod.description}</p>
                      <center>
                        <Link href={"/product/[id]"} as={`/product/${prod._id}`} >
                          <a className="btn btn-outline-primary my-2">View Product</a>
                        </Link>
                      </center>
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

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/product`)
  const data = await res.json();
  return {
    props: {
      products: data
    }
  }
}
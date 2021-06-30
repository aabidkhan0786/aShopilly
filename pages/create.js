import {useState} from "react"
import baseUrl from "../database/baseUrl";
const create = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [desc,setDesc] = useState('');
    const [media,setMedia] = useState('');

    const handleCreate= async ()=>{
        console.log(name,price,desc,media);
        if(!name || ! desc || !media || !price){
            return alert("Plaese add feolds")
        }

        const res = await fetch(`${baseUrl}/api/product`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                price,
                description:desc,
                media
            })
        })

        const response = await res.json()
    }
    return (
        <>
            <div className="row-fluid mt-5 ">
                <div className="col-12 col-md-6 mx-auto shadow-lg mb-5 bg-white rounded">
                <legend className="text-center m-4 h3 text-uppercase ">Create New Product</legend>
                <div class="form-group ">
                    {/* <label class="form-label mt-4 h4">Create New Product</label> */}
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setName(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput" class="h5">Product Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setPrice(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput" class="h5">Price</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setDesc(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput " class="h5">Description</label>
                    </div>
                    <div class="form-group mb-3">
                        <label for="formFile" class="form-label mt-4 " class="h5">Select Product Image</label>
                        <input class="form-control" type="file" id="formFile" onChange={e=>setMedia(e.target.files[0])} accept="image/*"/>
                    </div>
                    {
                        media ?
                        <>
                        <h3>Product Preview</h3>
                        <img class="img-fluid" src={media?URL.createObjectURL(media):""}/>
                        </>:""
                    }
                    </div>
                    <button class="btn btn-lg btn-primary my-4 col-12 text-uppercase" onClick={handleCreate()} type="button">add Product</button>
                </div>
            </div>
        </>
    )
}

export default create

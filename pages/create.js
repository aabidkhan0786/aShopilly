import {useState} from "react"
import baseUrl from "../database/baseUrl";
const create = () => {
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [desc,setDesc] = useState('');
    const [media,setMedia] = useState('');

    const handleCreate= async (e)=>{
            e.preventDefault()
            console.log(name,price,desc,media);
        if(!name || ! desc || !media || !price){
                return alert("Plaese add feolds")
            }
            const mediaUrl = await imageUpload()


        const res = await fetch(`${baseUrl}/api/product`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                price,
                description:desc,
                mediaUrl
            })
        })

        const response = await res.json
        if(response.error){
            alert(error)
        }else{
            alert("prodcut added")
        }
    }

    const imageUpload = async ()=>{
        const data = new FormData()
        data.append("file", media)
        data.append("upload_preset","aShoppilly")
        data.append("cloud_name","asocials")
        const res = await fetch("https://api.cloudinary.com/v1_1/asocials/image/upload",{
            method:"POST",
            body:data
        })

        const result = await res.json()
        console.log(result.url);
        return result.url
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
                        <label for="floatingInput" class="h6">Product Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setPrice(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput" class="h6">Price</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" onChange={e=>setDesc(e.target.value)} placeholder="name@example.com"/>
                        <label for="floatingInput " class="h6">Description</label>
                    </div>
                    <div class="form-group mb-2">
                        <label for="formFile" class="form-label mt-4 " class="h6">Select Product Image</label>
                        <input class="form-control" type="file" id="formFile" onChange={e=>setMedia(e.target.files[0])} accept="image/*"/>
                    </div>
                    {
                        media ?
                        <>
                        <h3 className="text-center my-3">Product Preview:</h3>
                        <img class="img-fluid" src={media?URL.createObjectURL(media):""}/>
                        </>:""
                    }
                    </div>
                    <button class="btn btn-lg btn-primary mb-3 col-12 text-uppercase" onClick={e=>handleCreate(e)} type="button">add Product</button>
                </div>
            </div>
        </>
    )
}

export default create

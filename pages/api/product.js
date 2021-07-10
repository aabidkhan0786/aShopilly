import initDB from "../../database/initDB";
import Product from "../../models/Product";


initDB()



export default async(req,res)=>{
   switch(req.method){
       case "GET":
            await getAllProducts(req,res);
           break;
       case "POST":
            await saveProducts(req,res);
           break;
   }
}

const getAllProducts= async(req,res)=>{
    Product.find().then(products=>{
        res.status(200).json(products)
    })
}

const saveProducts =  async (req,res)=>{
    const {name,price,description,mediaUrl} = req.body

    const prod = new Product({
        name,
        price,
        description,
        mediaUrl
    }).save()
    res.status(201).json(prod)
}
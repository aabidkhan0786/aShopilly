import React from 'react'

const productId = ({product}) => {
    return (
        <>
            {product.name}
        </>
    )
}

export async function getServerSideProps({params:{id}}){
    const res = await fetch(`http://localhost:3000/api/product/${id}`)
    const data = await res.json()
    console.log(data);
    return{
            props:{product :data}
        }
    
}

export default productId

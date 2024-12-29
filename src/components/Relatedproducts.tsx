'use client';
import { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


interface Data{
    id: number,
    name: string,
    price: number,
    image: StaticImageData,
    width: number,
    height: number
}

function Realtedproducts() {
    const [products, setProducts] = useState<Data[] | any>(String);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);  

    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:3000/api/products/`);
          if(!response.ok) {
            throw new Error("Failed to fetch product data");
          }
          const data: Data[] = await response.json();
          setProducts(data);
        } 
        catch (err: any) {
          setError(err.message)
        }
        finally {
          setLoading(false)
        }
  
      };
  
      fetchProduct();
    } );
    if (loading) {
      return <div className='loading'> Loading...</div>
    }
    
    if (error) {
      return <div>Error: {error}...</div>
    }

  return (
    <div className='related bg-white'>
         
        <div className='related-section-one '>
            <h1 className='related-section-one-h font-medium'>Related Products</h1>
        </div>

        
        <div className='related-section-two custom-xl:space-x-[40px] custom-lg:space-x-[40px] custom-md:space-x-[40px] custom-sm:space-x-[40px] custom-xs:space-x-[40px] custom-xxs:space-x-[20px] custom-tiny:space-x-[0px] custom-mini:space-x-[0px] '>

            {products.map((product: Data) => (
                <div key={product.id} className='related-section-two-item ' >
                    <div className='related-section-two-item-one bg-white '>
                        <Image height={product.height} width={product.width} src={product.image} alt="img"/>
                    </div>
                    <div className='space-y-3 '>
                        <p className='related-section-two-item-two-p'>{product.name}</p>
                        <p className='font-medium related-section-two-item-two-pp'>{product.price}</p>
                    </div>
                </div>
            ))}
           </div>
           <div className='justify-items-center related-section-three'>
           <p className='related-section-three-p font-medium pb-2 border-b-[1px] border-black '>View More</p>
           </div>

           

 

           
           
    
    </div>
  )
}

export default Realtedproducts;

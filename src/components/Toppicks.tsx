'use client';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react'
import Image from 'next/image'


interface Data{
    id: number,
    name: string,
    price: number,
    image: StaticImageData,
    width: number,
    height: number
}

function Toppicks() {
    const [products, setProducts] = useState<Data[] | any>(String);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)  
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://ui-ux-hackathon-xi.vercel.app/api/toppicks/`);
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
    <div className='toppicks bg-white'>
         
        <div className='toppicks-section-one '>
            <h1 className='toppicks-section-one-h font-medium'>Top Picks For You</h1>
            <p className='toppicks-section-one-p text-[#9F9F9F] font-medium '>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        </div>

        
        <div className='toppicks-section-two space-x-[30px]  '>

            {products.map((product: Data) => (
                <div key={product.id} className='toppicks-section-two-item   justify-center justify-items-center items-center' >
                    <div className='toppicks-section-two-item-one  bg-white '>
                        <Image height={product.height} width={product.width} src={product.image} alt="img"/>
                    </div>
                    <div className='toppicks-section-two-item-two  space-y-3'>
                        <p className='toppicks-section-two-item-two-p  '>{product.name}</p>
                        <p className='toppicks-section-two-item-two-pp font-medium '>{product.price}</p>
                    </div>
                </div>
            ))}
           </div>
           <div className='toppicks-section-three justify-items-center '>
           <p className='toppicks-section-three-p  font-medium pb-2 border-b-[1px] border-black '>View More</p>
           </div>

           

 

           
           
    
    </div>
  )
}

export default Toppicks;

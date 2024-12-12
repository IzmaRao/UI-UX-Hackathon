import React from 'react';
import Image from 'next/image';

interface Data {
    id: number;
    name: string;
    price: string; // Change to string since price is formatted with commas
    image: string; // Change from StaticImageData to string
    width: number;
    height: number;
}

async function Toppicks() {
    let data: Data[] = [];

    try {
        const response = await fetch('https://ui-ux-hackathon-xi.vercel.app/api/toppicks'); // Use relative URL
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        data = await response.json();
        console.log("Data ==>", data);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., set data to an empty array or show an error message)
    }

    return (
        <div className='toppicks bg-white'>
            <div className='toppicks-section-one'>
                <h1 className='toppicks-section-one-h font-medium'>Top Picks For You</h1>
                <p className='toppicks-section-one-p text-[#9F9F9F] font-medium'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>

            <div className='toppicks-section-two space-x-[30px]'>
                {data.map((product) => (
                    <div key={product.id} className='toppicks-section-two-item justify-center justify-items-center items-center'>
                        <div className='toppicks-section-two-item-one bg-white'>
                            <Image height={product.height} width={product.width} src={product.image} alt={product.name} />
                        </div>
                        <div className='toppicks-section-two-item-two space-y-3'>
                            <p className='toppicks-section-two-item-two-p'>{product.name}</p>
                            <p className='toppicks-section-two-item-two-pp font-medium'>{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='toppicks-section-three justify-items-center'>
                <p className='toppicks-section-three-p font-medium pb-2 border-b-[1px] border-black'>View More</p>
            </div>
        </div>
    );
}

export default Toppicks;

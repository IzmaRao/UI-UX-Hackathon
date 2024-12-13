import { NextRequest, NextResponse } from 'next/server';

const products = [
    { id: 1, name: "Trenton modular sofa_3", price: "25,000.00", image: "/Trenton modular sofa_3 1.png", width: 750, height: 384.46, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 2, name: "Granite dining table with dining chair", price: "25,000.00", image: "/Granite dining table with dining chair 1.png", width: 255, height: 185, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 3, name: "Outdoor bar table and stool", price: "25,000.00", image: "/Outdoor bar table and stool 1.png", width: 250, height: 376, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 4, name: "Plain console with teak mirror", price: "25,000.00", image: "/Plain console with teak mirror 1.png", width: 280, height: 174, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 5, name: "Grain coffee table", price: "258,200.00", image: "/Grain coffee table 1.png", width: 283, height: 188, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 6, name: "Kent coffee table", price: "20,000.00", image: "/Kent coffee table 1.png", width: 269, height: 169, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 7, name: "Round coffee table_color 2", price: "200,000.00", image: "/Round coffee table_color 2 1.png", width: 289, height: 510, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 8, name: "Reclaimed teak coffee table", price: "100,000.00", image: "/Reclaimed teak coffee table 1.png", width: 262, height: 162, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 9, name: "Plain console_", price: "258,200.00", image: "/Plain console_ 1.png", width: 278, height: 154, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 10, name: "Reclaimed teak Sideboard", price: "20,000.00", image: "/Reclaimed teak Sideboard 1.png", width: 298, height: 298, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 11, name: "SJP_0825", price: "200,000.00", image: "/SJP_0825  1.png", width: 492, height: 327, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 12, name: "Bella chair and table", price: "100,000.00", image: "/Bella chair and table 1.png", width: 310, height: 207, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 13, name: "Granite square side table", price: "258,800.00", image: "/Granite square side table 2.png", width: 471, height: 709, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 14, name: "Asgaard sofa", price: "250,000.00", image: "/Asgaard sofa 3.png", width: 481, height: 391, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 15, name: "Maya sofa three seater", price: "115,000.00", image: "/Maya sofa three seater 1.png", width: 296, height: 133, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } },
    { id: 16, name: "Outdoor sofa set", price: "244,000.00", image: "/Outdoor sofa set 1.png", width: 318, height: 211, detailimg: { img1: "/Outdoor sofa set 2.png", img2: "/Outdoor sofa set_2 1.png", img3: "/Stuart sofa 1.png", img4: "/Maya sofa three seater (1) 1.png" } }
];

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const productsId = parseInt(id, 10);
  const product = products.find((p) => p.id === productsId);

  console.log("Received ID:", id);
  console.log("Parsed Product ID:", productsId);
  console.log("Found Product:", product);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

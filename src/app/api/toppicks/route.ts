import { NextResponse } from 'next/server'


export function GET() {
    return NextResponse.json([
        { id: 1, name: "Trenton modular sofa_3", price: '25,000.00', image: "/Trenton modular sofa_3 1.png", width: 750, height: 384.46},
    { id: 2, name: "Granite dining table with dining chair", price: '25,000.00', image: "/Granite dining table with dining chair 1.png" , width: 255, height: 185},
    { id: 3, name: "Outdoor bar table and stool", price: '25,000.00', image: "/Outdoor bar table and stool 1.png" , width: 250, height: 376},
    { id: 4, name: "Plain console with teak mirror", price: '25,000.00', image: "/Plain console with teak mirror 1.png" , width: 240, height: 174}
    ])
}
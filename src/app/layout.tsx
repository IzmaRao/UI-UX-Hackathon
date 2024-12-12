

import "./globals.css";

import React, { ReactNode } from 'react'
import Footer from "@/components/Footer";

interface layoutprop{
  children: ReactNode
}

function layout({children}: layoutprop) {
  return (
    <html>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

export default layout
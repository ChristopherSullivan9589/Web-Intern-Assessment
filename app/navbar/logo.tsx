import React from 'react'
import Link from 'next/link'
import NavigationBar from './navigation-bar'


const Logo = () => {
  return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link href="/">
            <img src="/favicon.ico" className="w-10 h-10"/> {/*Image link to landing page*/}
            </Link>

            <span className="ml-3 text-xl">LiftCard</span>
          </div>
      
        </div>
  
  )
}

export default Logo

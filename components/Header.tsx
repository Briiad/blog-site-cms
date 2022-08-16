import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../services';

const Header = () => {

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto px-10 my-6">
      <div className="w-full inline-block py-4 2xl:py-8 px-4 bg-white rounded-md">
        <div className="md:float-left block bg">
          <Link href="/">
              <span className="cursor-pointer font-bold text-2xl 2xl:text-4xl">
                Blggo
              </span>
          </Link>
        </div>

        <div className="md:float-right hidden md:block">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} key={category.slug}> 
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer text-sm 2xl:text-xl">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
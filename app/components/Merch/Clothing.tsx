import React from 'react'
import type { ClothingType } from '@/types/clothes'
import { Image as DatoImage } from 'react-datocms'

type ClothingProps = {
  clothing: ClothingType[]
}

const Clothing = ({ clothing }: ClothingProps) => {
  return (
    <>
      <div className="border border-red-500">
        <div className="mb-8 text-left">
          <h2 className="bg-navbar inline p-2 shadow-md">Textilien</h2>
        </div>
        <div className="clothing-grid border-2 border-blue-500">
          {clothing.map((clothingArticle) => (
            <>
              <div className="space-y-2 border border-green-500">
                <div className="relative max-w-[250px]">
                  <DatoImage
                    data={clothingArticle.productImage.responsiveImage}
                  />
                  <div className="absolute bottom-1 left-1 flex h-[6rem] w-[6rem] flex-wrap items-center justify-center rounded-full bg-white p-2 text-center text-black">
                    {clothingArticle.price}€
                  </div>
                </div>
                <h3 className="text-left">
                  {clothingArticle.name} ({clothingArticle.sizes})
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Clothing

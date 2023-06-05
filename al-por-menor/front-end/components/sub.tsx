import React from 'react'
import '../app/subscripcion/[id]/styles.css'
import { IProductPromotion} from '@/types/responses'


interface ProductProps {
    product: IProductPromotion,
    id: string
  }

export const Sub: React.FC<ProductProps> = ({product, id}) =>{
  return (
        <div className='sub-container'>
            <div className='sub'>
                <div className="flex w-full transform text-left text-base transition ">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src={product.imgUrl} className="object-cover object-center"/>
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                
                        <section aria-labelledby="information-heading" className="mt-2">
                            <h3 id="information-heading" className="sr-only">subscription information</h3>       
                
                        </section>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
  }

  export default Sub;

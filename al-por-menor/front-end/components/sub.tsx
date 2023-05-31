import React from 'react'
import '../app/subscripcion/[id]/styles.css'
import Link from 'next/link'


export default function Sub({product}: any) {
  return (
        <div className='sub-container'>
            <div className='sub'>
                <div className="flex w-full transform text-left text-base transition ">
                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img src={product.img} alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.nombre}</h2>
                
                        <section aria-labelledby="information-heading" className="mt-2">
                            <h3 id="information-heading" className="sr-only">Product information</h3>
                
                            <p className="text-2xl text-gray-900">${product.precio}</p>     

                            <div className='pack-content'>
                                <h3 >Contenido del pack:</h3>
                                    {
                                        product.descripcion.map((item: any) => (	
                                            <p className="text-1xl text-gray-900 " >{item}</p>
                                        ))
                                    } 
                            </div>          
                
                            <div className="mt-6">
                            <div className="flex items-center">
                                <div className="flex items-center">
                
                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                                <svg className="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                                <svg className="text-gray-200 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                </svg>
                                </div>
                                <p className="sr-only">3.9 out of 5 stars</p>
                                <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reseñas</a>
                            </div>
                            </div>
                        </section>

                
                        <section aria-labelledby="options-heading" className="mt-10">
                            <h3 id="options-heading" className="sr-only">Product options</h3>
                
                            <form>
                
                            <div>
                            <h4 className="text-sm font-medium text-gray-900">¿Para cuántas personas?</h4>

                            </div>
                
                            <fieldset className="mt-4 radio-inputs-1">
                            <legend className="sr-only">Choose a size</legend>
                            <div className="grid grid-cols-5 gap-4 options-container-1">
                                <label className="radio-1">
                                <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                <span className="name-1" id="size-choice-0-label">1</span>
                                </label>
                                <label className="radio-1">
                                <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                <span className="name-1" id="size-choice-1-label">2</span>
                                </label>
                                <label className="radio-1">
                                <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                <span className="name-1" id="size-choice-2-label">3</span>
                                </label>
                                <label className="radio-1">
                                <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                <span className="name-1" id="size-choice-2-label">4</span>
                                </label>
                                <label className="radio-1 ">
                                <input type="radio" name="size-choice" value="M" className="sr-only " aria-labelledby="size-choice-3-label" />
                                <span className="name-1 " id="size-choice-3-label">Mas</span>
                                </label>
                            </div>
                            </fieldset>



                            

                            <div className="mt-10">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-gray-900">¿Cada cuanto quieres tu envío?</h4>
                        </div>


                        <div className="mt-4 radio-inputs">
                        <fieldset className="mt-4">
                            <legend className="sr-only">Choose a size</legend>
                            <div className="grid grid-cols-4 gap-4">
                            <label className="radio">
                                <input type="radio" name="size-choice1" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                <span className="name" id="size-choice-0-label">Semanal</span>
                            </label>
                            <label className="radio">
                                <input type="radio" name="size-choice1" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                <span className="name" id="size-choice-1-label">Quincenal</span>
                            </label>
                            <label className="radio">
                                <input type="radio" name="size-choice1" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                <span className="name" id="size-choice-2-label">Mensual</span>
                            </label>
                            <label className="radio">
                                <input type="radio" name="size-choice1" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                                <span className="name" id="size-choice-3-label">Bimestral</span>
                            </label>
                            </div>
                        </fieldset>
                        </div>
                    </div>

                
                            <Link href={"/pago-envio"} className="btn-sub mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Subscribirme</Link>
                            </form>
                        </section>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  )
  }


'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

import OnlineGroceriesImage from '@/public/images/undraw_online_groceries_a02y.svg'
import DeliveryImage from '@/public/images/undraw_deliveries_2r4y.svg'

export default function Features() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">¿Qué es al Por Menor?</h1>
            <p className="text-xl text-gray-600">Al Por Menor es un sitio que agrupa las compras de los usuarios en una compra mayorista, para que vos puedas
            acceder al mejor precio siempre, por las unidades que vos quieras y recibirlo desde la comodidad de tu casa.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3">Descubrí nuestro sistema de suscripciones</h3>
                <p className="text-xl text-gray-600">Suscribite a planes de compra quincenal, mensual y bimestral y despreocupate por las compras: nosotros
                compramos y ahorramos por vos.</p>
              </div>
              {/* Tabs buttons */}

            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={OnlineGroceriesImage} width={500} height="462" alt="Features bg" />
                  </div>
                </Transition>
                
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
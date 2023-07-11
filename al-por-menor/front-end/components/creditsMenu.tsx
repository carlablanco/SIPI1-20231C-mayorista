import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import React, { Fragment, useContext } from 'react'
import HelpIcon from '@mui/icons-material/Help';
import swal from 'sweetalert';
import { Context } from '@/app/context/Context';

export default function CreditsMenu() {

        const {points} = useContext(Context)

        function classNames(...classes :any) {
        return classes.filter(Boolean).join(' ')
        }

        function creditHelp() {
            swal('¿Que son AxM Points?', 
            `Los AxM Points son la moneda virtual de nuestra tienda. Estos puntos pueden ser utilizados como medio de pago en tus compras. \n\n Cuando usas AxM points para pagar tus compras, te aseguramos que pagaras siempre el minimo precio obtenido de los productos seleccionados!` , 'info')
        }

  return (
            <Menu as="div" className="flex grow justify-end relative ml-3">
                  <div className='credit-menu-container'>
                    <div  onClick={()=> creditHelp()}>
                        <HelpIcon className='info-alert'/>
                    </div>
                    <Menu.Button className="text-sm credits-btn">
                        <h2 >AxM Points: <span>{points}</span></h2>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="user-menu-list absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                            <Link
                            href="/credits/add"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                            Agregar AxM points
                            </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
  )
}

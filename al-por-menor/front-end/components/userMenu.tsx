import React, { Fragment , useContext} from 'react'
import img from '../public/images/defaultUserImg.png'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import SettingsIcon from '@mui/icons-material/Settings';
import { Context } from '@/app/context/context'

export default function UserMenu() {

    const {logout, user} = useContext(Context)

    function classNames(...classes :any) {
        return classes.filter(Boolean).join(' ')
        }

  return (
                <Menu as="div" className="flex grow justify-end relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={img}
                        alt=""
                      />
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
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mi perfil
                          </Link>
                        )}
                      </Menu.Item>
                    { user.isAdmin ? 
                    <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/admin/products"
                            className={classNames(active ? 'bg-gray-100 ' : '', 'block px-4 py-2 text-sm text-gray-700 ')}
                          >
                            <SettingsIcon/>
                            .   Administar tienda
                          </Link>
                        )}
                      </Menu.Item>: null}
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href={'/'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            onClick={()=> logout()}
                          >
                            Logout
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
  )
}

'use client'

import { Context } from '@/app/context/Context'
import Link from 'next/link'
import { useContext, useState } from 'react'


export default function SignIn() {

  const {login,authUser} = useContext(Context)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleChangeEmail(e:any) {
    setEmail(e.target.value)
  }

  function handleChangePassword(e:any) {
    setPassword(e.target.value)
  }

  const iniciarSesion = () => {
    let user = {
      email: email,
      password: password
    }
    login(user)
  }

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Hola de nuevo!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto" >
            <form >
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Mail</label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Ingresá tu mail" required onChange={(e) => handleChangeEmail(e)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Contraseña</label>
                    <Link href="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">¿No podés ingresar a tu cuenta?</Link>
                  </div>
                  <input id="password" type="password" className="form-input w-full text-gray-800" placeholder="Ingresá tu contraseña" required onChange={(e) => handleChangePassword(e)} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-600 ml-2">Mantener mi sesión</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <label className="btn text-white bg-blue-600 hover:bg-blue-700 w-full cursor-pointer" onClick={()=> iniciarSesion()}>Iniciar Sesión</label>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div className="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-600 italic">ó</div>
              <div className="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
            </div>
            <form>
            </form>
            <div className="text-gray-600 text-center mt-6">
              No tenés cuenta todavía? <Link href="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Registrate</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

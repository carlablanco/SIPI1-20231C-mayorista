'use client'
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import UserMenu from '../userMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemainingTime from '../RemainingTime';
import { calculateNextDay, getDateDifference } from '@/app/helpers/date.helper';
import { Context } from '@/app/context/Context';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const { logged, cartItems } = useContext(Context);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<any>(null);

  useEffect(() => {

    const calculateRemainingTime = () => {
      const difference = calculateNextDayDifference();
      setRemainingTime(difference);
    };

    const timer = setInterval(calculateRemainingTime, 1000);

    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    scrollHandler();
    window.addEventListener('scroll', scrollHandler);


    return () => {
      window.removeEventListener('scroll', scrollHandler)
      clearInterval(timer);
    };
  }, []);

  const calculateNextDayDifference = (): { days: number, hours: number, minutes: number, seconds: number } => {
    const nextDay = calculateNextDay();
    const currentDate = new Date();
  
    if (currentDate.getDay() === nextDay.getDay() && currentDate.getHours() >= 22) {
      nextDay.setDate(nextDay.getDate() + 7);
    }
  
    nextDay.setHours(22, 0, 0); // Set the time to 10 PM (22:00:00)
  
    const timeDifference = nextDay.getTime() - currentDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    return { days, hours: hours % 24, minutes: minutes % 60, seconds: seconds % 60 };
  };

  const toggleCart = () => {
    setShowCart((prevState) => !prevState);
  };
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? 'bg-white backdrop-blur-sm shadow-lg' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>
          <div className='shrink-0 mr-4'>
            <RemainingTime remainingTime={remainingTime}/>
          </div>
          <nav className="hidden md:flex md:grow">
            {!logged ? (
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    href="/signin"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <span>Registrate</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href={'/cart'}>
                      <button
                        className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                        onClick={toggleCart}
                      >
                        <ShoppingCartIcon />
                        {cartItems.length > 0 ? <span className='ml-2'>{cartItems.length}</span> : ''}
                      </button>
                  </Link>
                </li>
                <li>
                  <UserMenu />
                </li>
              </ul>
            )}
          </nav>

          {showCart && logged && (
            <div className="absolute top-16 right-0 mt-2 bg-white text-gray-900 p-2 rounded shadow">
              {/* Contenido del carrito de compras */}
            </div>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

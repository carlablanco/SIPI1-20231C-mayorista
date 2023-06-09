'use client'
import { createContext , useContext , useState} from 'react';
import { users } from '@/mock/mockdata'
import {useRouter} from 'next/navigation';

export const Context = createContext();

export const Provider = ({children}) => {


    const router = useRouter();


    const [user, setUser] = useState({});

    const [logged , setLogged] = useState(false);
    

    const login = (user) => {
        authUser(user);
    }

    const logout = () => {
        setUser({});
        setLogged(false);
    }


    // SOLUCIONAR PROBLEMAS CON EL INICIO DE SESION
    const authUser = (userData) => {
        console.log(userData)
        users.forEach(u => {
            if (u.email == userData.email && u.password == userData.password) {
                console.log(u)
                setUser(u);
                console.log(user)                
                setLogged(true);
                router.push('/')
            }
        })

    }

    // Calculate total items in cart
    const calculateTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };


    // Context Carrito

    const [cartItems, setCartItems] = useState([]);



    // Función para agregar un producto al carrito con una cantidad específica
    const addItemToCart = (product, quantity) => {
        // Verificar si el producto ya existe en el carrito
        const existingItem = cartItems.find(item => item.product.productId === product.productId);

        if (existingItem) {
        // Si el producto ya existe, incrementar la cantidad
        const updatedItem = {
            product: existingItem.product,
            quantity: existingItem.quantity + quantity
        };

        // Reemplazar el producto existente en el carrito con la cantidad actualizada
        const updatedCartItems = cartItems.map(item => {
            if (item.product.productId === product.productId) {
            return updatedItem;
            }
            return item;
        });

        setCartItems(updatedCartItems);
        } else {
        // Si el producto no existe en el carrito, agregarlo como un nuevo elemento
        const newItem = {
            product,
            quantity
        };

        setCartItems([...cartItems, newItem]);
        }
        console.log(cartItems)
    };

    // Función para sumar la cantidad de un producto en el carrito
    const incrementQuantity = (productId) => {
        const updatedProducts = cartItems.map((item) => {
        if (item.product.productId === productId) {
            return {
            ...item,
            quantity: item.quantity + 1
            };
        }
        return item;
    });

    setCartItems(updatedProducts);
  };

    // Función para restar la cantidad de un producto en el carrito
    const decrementQuantity = (productId) => {
        const updatedProducts = cartItems.map((item) => {
        if (item.product.productId === productId) {
            return {
            ...item,
            quantity: item.quantity - 1
            };
        }
        return item;
    });

    setCartItems(updatedProducts);
  };

    // Función para remover un producto del carrito
    const removeItemFromCart = (productId) => {
        const updatedProducts = cartItems.filter((item) => item.product.productId !== productId);
        console.log(updatedProducts)
        setCartItems(updatedProducts);
  };

  const removeAllItemsFromCart = () => {
    setCartItems([]);
    };


  const [total, setTotal] = useState(0);
  
  const calculateTotal = (t) => {
    setTotal(t)
  }

  const [points, setPoints] = useState(30000);

  const removePoints = () => {
        setPoints(points - total);
    }


    return <Context.Provider value={{user, logged, login, logout, authUser, addItemToCart, cartItems, incrementQuantity, decrementQuantity, removeItemFromCart, calculateTotalItems, points, removePoints, calculateTotal, total, removeAllItemsFromCart}}>
        {children}
    </Context.Provider>
}



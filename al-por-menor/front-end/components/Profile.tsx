"use client";
import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";
import React, { useState } from "react";
import SubscriptionComponent from "./UserSubscription";

// Interface for user
interface User {
  id: number;
  name: string;
  lastName: string;
  address: string;
  city: string;
  password: string;
  supplier: boolean;
  otpCode: number;
  otpExpiration: Date;
  email: string;
  subscriptions: ISubscription[];
}

// Profile component
const ProfilePage: React.FC = () => {
  // User state
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address: "1425 5th Ave #2300",
    city: "Buenos Aires",
    password: "",
    supplier: false,
    otpCode: 0,
    otpExpiration: new Date(),
    subscriptions: [
      {
        userId: "1",
        subscriptionId: "1",
        cadence: Cadence.MONTHLY,
        numberOfPeople: 1,
        name: "Pack 1",
        price: 100,
        imgUrl: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        productList: [],
      },
      {
        userId: "1",
        subscriptionId: "2",
        cadence: Cadence.WEEKLY,
        numberOfPeople: 4,
        name: "Pack 2",
        price: 200,
        imgUrl: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        productList: [],
      },
      {
        userId: "1",
        subscriptionId: "3",
        cadence: Cadence.BIWEEKLY,
        numberOfPeople: 2,
        name: "Pack 3",
        price: 300,
        imgUrl: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        productList: [],
      },
      {
        userId: "1",
        subscriptionId: "4",
        cadence: Cadence.BIMONTHLY,
        numberOfPeople: 3,
        name: "Pack 4",
        price: 400,
        imgUrl: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        productList: [],
      }
    ],
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const setIsEditingTrue = () => {
    setIsEditing(true);
  }

  const setIsEditingFalse = () => {
    setIsEditing(false);
  }

  const calculatePrice = (subscription: ISubscription) => {
    //TO-DO call api to get price
    return subscription.price * subscription.numberOfPeople;
  }

  // Update subscription cadence
  const updateCadence = (subscriptionId: string, cadence: Cadence) => {
    setIsEditingTrue();
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription.subscriptionId === subscriptionId
          ? { ...subscription, cadence }
          : subscription
      );
      updatePrice(subscriptionId);
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  };

  // Update subscription numberOfPeople
  const updateNumberOfPeople = (subscriptionId: string, numberOfPeople: number) => {
    setIsEditingTrue();
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription.subscriptionId === subscriptionId
          ? { ...subscription, numberOfPeople }
          : subscription
      );
      updatePrice(subscriptionId);
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  };

  const updatePrice = (subscriptionId: string) => {
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription?.subscriptionId === subscriptionId && subscription.numberOfPeople
          ? { ...subscription, price: calculatePrice(subscription)
        }
          : subscription
      );
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  }

  const deleteSubscription = (subscriptionId: string) => {
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.filter((subscription) =>
        subscription.subscriptionId !== subscriptionId
      );
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  };


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 items-center">
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Nombre: {user.name} {user.lastName} </p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Email: {user.email}</p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Direccion: {user.address}</p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Ciudad: {user.city}</p>


      <h2 className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-4xl">Subscripciones activas:</h2>
      <div className="bg-white grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {user.subscriptions.map((subscription) => (
        <SubscriptionComponent
          key={subscription.subscriptionId}
          subscription={subscription}
          updateCadence={updateCadence}
          updateNumberOfPeople={updateNumberOfPeople}
          deleteSubscription={deleteSubscription}
        />
      ))}
      </div>
      <div>
        <button disabled={!isEditing} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:ml-4 disabled:opacity-50">Guardar Cambios</button>
      </div>
    </div>
  );
};
export default ProfilePage;
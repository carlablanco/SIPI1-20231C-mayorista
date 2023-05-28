"use client";
import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";
import React, { useState } from "react";
import SubscriptionComponent from "./SubscriptionComponent";

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
    name: "John Doe",
    lastName: "",
    email: "johndoe@example.com",
    address: "",
    city: "",
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
      },
      {
        userId: "1",
        subscriptionId: "2",
        cadence: Cadence.WEEKLY,
        numberOfPeople: 1,
      },
    ],
  });

  // Update subscription cadence
  const updateCadence = (subscriptionId: string, cadence: Cadence) => {
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription.subscriptionId === subscriptionId
          ? { ...subscription, cadence }
          : subscription
      );
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  };

  // Update subscription quantity
  const updateQuantity = (subscriptionId: string, quantity: number) => {
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription.subscriptionId === subscriptionId
          ? { ...subscription, quantity }
          : subscription
      );
      return { ...prevUser, subscriptions: updatedSubscriptions };
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 items-center">
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Nombre: {user.name}</p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Email: {user.email}</p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Direccion: {user.email}</p>
      <p className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-2xl">Ciudad: {user.email}</p>


      <h2 className="mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-4xl">Subscripciones activas:</h2>
      <div className="flex justify-around columns-3 container flex-wrap mx-auto max-w-4xl font-display font-medium tracking-tight text-slate-900 sm:text-1xl">
      {user.subscriptions.map((subscription) => (
        <SubscriptionComponent
          key={subscription.subscriptionId}
          subscription={subscription}
          updateCadence={updateCadence}
          updateQuantity={updateQuantity}
        />
      ))}
      </div>
    </div>
  );
};

export default ProfilePage;
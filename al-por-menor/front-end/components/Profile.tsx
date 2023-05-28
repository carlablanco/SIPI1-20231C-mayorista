"use client";
import { Frequency } from "@/enums/enums";
import { ISubscription } from "@/types/responses";
import React, { useState } from "react";
import SubscriptionComponent from "./SubscriptionComponent";

// Interface for user
interface User {
  id: number;
  name: string;
  email: string;
  subscriptions: ISubscription[];
}

// Profile component
const ProfilePage: React.FC = () => {
  // User state
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    subscriptions: [
      {
        subscriptionId: "1",
        imgUrl: "subscription_image1.jpg",
        productName: "Pack 1",
        frequency: Frequency.MONTHLY,
        quantity: 2,
        price: 10,
      },
      {
        subscriptionId: "2",
        imgUrl: "subscription_image2.jpg",
        productName: "Pack 2",
        frequency: Frequency.WEEKLY,
        quantity: 1,
        price: 5,
      },
    ],
  });

  // Update subscription frequency
  const updateFrequency = (subscriptionId: string, frequency: Frequency) => {
    setUser((prevUser) => {
      const updatedSubscriptions = prevUser.subscriptions.map((subscription) =>
        subscription.subscriptionId === subscriptionId
          ? { ...subscription, frequency }
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
      {user.subscriptions.map((subscription) => (
        <SubscriptionComponent
          key={subscription.subscriptionId}
          subscription={subscription}
          updateFrequency={updateFrequency}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default ProfilePage;
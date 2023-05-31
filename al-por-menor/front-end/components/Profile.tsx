"use client";
import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";
import React, { useState } from "react";
import SubscriptionComponent from "./UserSubscription";
import '../app/(profile)/profile/ProfileStyles.css';

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
    name: "Juan",
    lastName: "Perez",
    email: "johndoe@uade.edu.ar",
    address: "Lima 773",
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
          ? { ...subscription, price: calculatePrice(subscription) }
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
    <div className="profile-container mx-auto max-w-1200px">
      <div className="group">
        <div className="profile-input">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={`${user.name} ${user.lastName}`}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        <div className="profile-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        <div className="profile-input">
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            value={user.address}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        <div className="profile-input">
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            value={user.city}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
      </div>
  
      <div className="profile-details">
        <h2 className="text-2xl font-bold mb-4">Subscripciones activas:</h2>
        <div className="subscription-list">
          {user.subscriptions.map((subscription) => (
            <div className="subscription-container" key={subscription.subscriptionId}>
              <SubscriptionComponent
                subscription={subscription}
                updateCadence={updateCadence}
                updateNumberOfPeople={updateNumberOfPeople}
                deleteSubscription={deleteSubscription}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );  
};

export default ProfilePage;
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
  password: string;
  isAdmin: boolean;
  otpCode: number;
  otpExpiration: Date;
  email: string;
}

// Profile component
const ProfilePage: React.FC = () => {
  // User state
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Juan",
    lastName: "Perez",
    email: "johndoe@uade.edu.ar",
    password: "",
    isAdmin: false,
    otpCode: 0,
    otpExpiration: new Date(),
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);
  
  const setIsEditingTrue = () => {
    setIsEditing(true);
  }

  const setIsEditingFalse = () => {
    setIsEditing(false);
  }


  return (
    <div className="profile-container mx-auto max-w-1200px">
      <div className="group">
        <div className="profile-input">
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={`${user.name}`}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        <div className="profile-input">
          <label htmlFor="name">Apellido: </label>
          <input
            type="text"
            id="lastName"
            value={`${user.lastName}`}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        <div className="profile-input">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={user.email}
            readOnly={false} // Cambia readOnly a false
          />
        </div>
        
      </div>
    </div>
  );  
};

export default ProfilePage;
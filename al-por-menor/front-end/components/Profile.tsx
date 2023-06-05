"use client";
import { Cadence } from "@/enums/enums";
import { ISubscription } from "@/types/responses";
import React, { useState } from "react";
import SubscriptionComponent from "./UserSubscription";
import '../app/(profile)/profile/ProfileStyles.css';
import TextField from '@mui/material/TextField';

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
  const [name, setName] = useState<string>(user.name);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [email, setEmail] = useState<string>(user.email);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSaveChanges = () => {
    setUser((prevUser) => ({
      ...prevUser,
      name,
      lastName,
      email,
    }));
    setIsEditing(false);
  };

  const handleCancelChanges = () => {
    setName(user.name);
    setLastName(user.lastName);
    setEmail(user.email);
    setIsEditing(false);
  };

  const handleModifyProfile = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-container mx-auto max-w-1200px container">
      <div className="group">
        <div className="profile-input">
          <TextField
            id="nombre"
            label="Nombre"
            variant="standard"
            placeholder="Nombre"
            value={name}
            onChange={handleNameChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-input">
          <TextField
            id="apellido"
            label="Apellido"
            variant="standard"
            placeholder="Apellido"
            value={lastName}
            onChange={handleLastNameChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-input">
          <TextField
            id="email"
            label="Email"
            variant="standard"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      {isEditing ? (
        <div className='Guardar-Cancelar-container'>
          <button className="Guardar" onClick={handleSaveChanges}>Guardar</button>
          <button className="cancelar" onClick={handleCancelChanges}>Cancelar</button>
        </div>
      ) : (
        <button className="Modificar" onClick={handleModifyProfile}>Modificar</button>
      )}
    </div>
  );
};

export default ProfilePage;
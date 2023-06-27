"use client"
import React, { useState } from 'react';
import { users } from '@/mock/mockdata'


export default function UsersPage() {


  const [userList, setUserList] = useState(users);

  const handleDeleteUser = (userId: number) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  };
    
  return (
    <div>
      <h1 className="users_title">Users</h1>
      <table className="basic">
        <thead>
          <tr>
            <th className="user_id prd-tr">#</th>
            <th className="user_name prd-tr">Nombre</th>
            <th className="user_admin prd-tr">Admin</th>
          </tr>
        </thead>
        <tbody>
        {users.length > 0 && userList.map((user) => (
          <tr key={user.id} className="user-list" data-aos="fade-down">
            <td className="user_id">#{user.id}</td>
            <td className="user_name">{user.name} {user.lastName}</td>
            <td className={user.isAdmin? 'admin' : 'not-admin'}>Admin</td>
            <td className="btns-container">
                <button className="btn-default btn-users">
                { user.isAdmin ? 'Remove admin' : 'Give admin' }
                </button>
                <button className="btn-red" onClick={() => handleDeleteUser(user.id)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Delete
                </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  )
}

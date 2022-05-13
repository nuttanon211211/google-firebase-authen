import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from "../context/AuthContext";

// <

// Frondend
export default function Home() {
  // Import user, login, logout from context
  const { user, login, logout } = useAuth();

  // Simple webpage that have a login and logout button
  return (


        <div>
          <button onClick={login}> Login </button>
          <button onClick={logout}> Logout </button>
        </div>

  )
}

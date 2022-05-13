import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from "../context/AuthContext";

// <

export default function Home() {
  const { user, login, logout } = useAuth();
  return (


        <div>
          <button onClick={login}> Login </button>
          <button onClick={logout}> Logout </button>
        </div>

  )
}

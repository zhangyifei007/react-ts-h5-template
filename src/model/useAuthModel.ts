import { useState } from 'react'
export default function useAuthModel() {
  const [user, setUser] = useState(null);
  return {
    setUser,
    user,
  }
}
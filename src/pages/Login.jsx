import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'


const Login = () => {
  const navigate = useNavigate();
  const { currentUser, signinWithGoogle } = UserAuth();

    const handleLogin = async () => {
      try {
        await signinWithGoogle();
      } catch (error) {
        console.log(error)
    }
    }

    useEffect(()=>{
      if(currentUser) {
        navigate('/chat')
      }
    },[currentUser]);


  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>Hello there 👋🏻</h1>
          <p className='py-6'>Join the conversation, meet new people, and make connections in one shared room.
          </p>
          <button onClick={handleLogin} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>LOGIN WITH GOOGLE</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
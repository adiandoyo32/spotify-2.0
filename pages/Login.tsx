import React from 'react'
import { getProviders } from 'next-auth/react'

function Login() {
  return (
    <div>
      <img className='w-52 mb-5' src='https://i.imgur.com/fPuEa9V.png' />

    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    }
  }
}

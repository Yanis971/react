import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(nickname)
  const handleSubmit = (event) => {
    event.proventDefault() // on empeche le fonctionnement par default du formulaire
  }

  return (
    <div className='flex flex-1 flex-col h-screen justify-start items-center bg-black'>
      <h2 className='text-white font-bold text-xl pb-5 py-5'> Enregistrez vous
      </h2>
      <form onSubmit={handleSubmit}
        className='max-w-md mx-auto'>
        <CustomInput
          state={nickname}
          label="Mon pseudo"
          type="text"
          callable={(event) => setNickname(event.target.value)} />

        {/* input pour Email */}
        <CustomInput
          state={email}
          label="Mon email"
          type="eamil"
          callable={(event) => setEmail(event.target.value)} />

        {/* input pour Password*/}
        <CustomInput
          state={password}
          label="Mot de passe"
          type="password"
          callable={(event) => setPassword(event.target.value)} />

        <Link to='/'
          className='text-white'>Vous avez déjà un compte ? </Link>
        <a
          href="/"
          className='text-green'> Me connecter</a>
        <div className='flex items-center justify-center pt-5'>

          <button type='submit'
            className='bg-green hover:bg-green_top text-white font-bold py-2 px-4 rounded'> S'enregistrer
          </button>

        </div>
      </form >
    </div >
  )
}

export default Register
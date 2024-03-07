import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/CustomInput';
import axios from 'axios';
import { apiRoot } from '../../constants/apiConstant';
import { useAuthContext } from '../../contexts/AuthContext';
import { setLoading } from '../../redux/album/albumSlice';
import ButtonLoader from '../../components/Loader/ButtonLoader';

const Register = () => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // on récupère la méthode signIn du context d'authentification
  const { signIn } = useAuthContext();
  // on récupère le hook de navigation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // empêche le fonctionnement par défaut du formulaire
    setIsLoading(true);
    axios.post(`${apiRoot}/register`, {
      nickname,
      email,
      password
    }).then((response) => {
      if (response.data.email) {
        const user = {
          userId: response.data.id,
          nickname: response.data.nickname,
          email: response.data.email
        };

        try {
          signIn(user);
          setIsLoading(false);
          navigate('/');
        } catch (error) {
          console.log(`Erreur lors de la création de la session: ${error}`);
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
        console.log(`Erreur lors de la réponse serveur: ${response}`);
      }
    }).catch((error) => { // Correction ici: ajout des parenthèses autour de 'error'
      setIsLoading(false);
      console.log(`Erreur lors de l'enregistrement de l'user: ${error}`);
    });
  };


  return (
    <div className="flex flex-1 flex-col h-screen justify-start items-center bg-black">
      <h2 className='text-white font-bold text-3xl py-5'>Enregistrez-vous</h2>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto' >
        {/* input pour le nickname */}
        {/* <div className="mb-3">
                    <label htmlFor="nickname" className='block text-white mb-2'>Votre Pseudo</label>
                    <input type="text" value={nickname} onChange={(event) => setNickname(event.target.value)} className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus-shadow-outline' />
                </div> */}
        <CustomInput state={nickname} label={'Votre Pseudo'} type={'text'} callable={(event) => setNickname(event.target.value)} />

        {/* input pour email */}
        <CustomInput state={email} label={'Votre Email'} type={'email'} callable={(event) => setEmail(event.target.value)} />
        {/* input pour le mdp */}
        <CustomInput state={password} label={'Mot de passe'} type={'password'} callable={(event) => setPassword(event.target.value)} />

        <p className='text-white pb-4'> Vous avez déjà un compte ?
          <Link to='/' className='text-green font-bold hover:text-green_06'> Se connecter</Link>
        </p>
        {isLoading ? <ButtonLoader /> :
          <button className="bg-green hover:bg-green_top text-white font-bold py-2 px-4 rounded mx-auto block">S'enregistrer</button>
        }
      </form>
    </div>
  )
}

export default Register
import Headtitle from '../common/Headtitle';
import axios from 'axios';
import router from 'next/router';
import { useEffect } from 'react';

function Signup() {
  useEffect(() => {
    axios
      .get('/api/auth')
      .then(response => {
        // If the server returns a 200 status code, it means the user is authenticated
        console.log(response);
      })
      .catch(error => {
        // Redirect the user to the login page
        router.push('/login');
      });
  }, []);
  return <Headtitle />;
}

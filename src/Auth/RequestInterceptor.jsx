
import React from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import axios from 'axios';
import { loginRequest } from './authConfig';


export const RequestInterceptor = ({ children }) => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0]);

  axios.interceptors.request.use(async (config) => {
    if (!account) {
      throw Error('No active account! Verify a user has been signed in.');
    }

    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account,
    });

    const bearer = `Bearer ${response.accessToken}`;
    config.headers.Authorization = bearer;
    console.log(config);
    return config;

  });

  return (
    <>
      {children}
    </>
  )
}
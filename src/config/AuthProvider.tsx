import React, { ReactNode, useState, useContext, createContext } from 'react';
import { auth } from './firebase';
import {
  Auth,
  UserCredential,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Panier } from '../models/Panier';





export interface AuthProviderProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>({} as UserContextState);

export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  panier: Panier[] ;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  setPanier: (panier: Panier[]) => void;
}

export const AuthContext = React.createContext<AuthContextModel>({} as AuthContextModel);

export function useAuth(): AuthContextModel {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [panier, setPanier] = useState<Panier[]>([]);

  function signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const values = {
    signUp,
    user,
    signIn,
    auth,
    panier,
    setPanier,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
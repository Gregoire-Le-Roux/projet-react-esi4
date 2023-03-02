import React, { ReactNode, useState, useContext, createContext } from 'react';
import { auth } from './firebase';
import {
  Auth,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { User } from '../models/Users';
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
  setUser: (user: User) => void;
  signOut: () => void;
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

  function signOut () {
    setUser(null);
  }

  const values = {
    user,
    setUser,
    signUp,
    signIn,
    signOut,
    auth,
    panier,
    setPanier,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
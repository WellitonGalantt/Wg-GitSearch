import { useState } from "react";
import AppContext from "./AppContext"
import { UserProps, ReposUserProps } from "../types/user";

interface ProviderProps {
  children: React.ReactNode;
}

function Provider({children}:ProviderProps){

  const[ user, setUser ] = useState<UserProps | null>(null);
  const[ openUser, setOpenUser ] = useState<boolean>(false);
  const[ reposUser, setReposUser ] = useState<ReposUserProps | null>(null);

  const value:any = {
    user,
    setUser,

    openUser,
    setOpenUser,

    reposUser,
    setReposUser,
  }

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default Provider;
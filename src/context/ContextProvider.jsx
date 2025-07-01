import React, { createContext, useState } from 'react'

function ContextProvider({children}) {

    const AppContext = createContext();
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
  return (
    <AppContext.Provider value={{ token, setToken, username, setUsername }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
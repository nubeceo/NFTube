import React, { useState } from 'react'
import userContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [Open, SetOpen] =useState(false);

    return(
        <userContext.Provider  value={{Open, SetOpen}}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider
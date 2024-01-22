import React, { useState } from 'react'
import userContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [Open, SetOpen] =useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setselectedCategory] = useState('Coding');


    return(
        <userContext.Provider  value={{Open, SetOpen, searchValue, setSearchValue,selectedCategory, setselectedCategory}}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider
import { useMemo, useState} from 'react'
import { SideBarContext } from './SideBarContext';
import React from 'react';

const SideBarProvider = ({children}) =>{
    const [isOpen,setIsOpen] = useState(false)

    return (
       <SideBarContext.Provider value={{isOpen,setIsOpen}}>
        {children}
       </SideBarContext.Provider>
    );
}

export default SideBarProvider
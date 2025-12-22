import React, {createContext,useContext,useState} from 'react'

export const OnBoardingContext = createContext();

export const OnBoardingProvider = ({children}) =>{
    const [currentPage, setCurrentPage] = useState(1);
    const [roleArn, setRoleArn] = useState("");

    const isArnValid = roleArn.trim().startsWith("arn:aws:iam::") && roleArn.length > 20;

  
    const handleNext = () => setCurrentPage((prev) => prev + 1);
    const handleBack = () => setCurrentPage((prev) => prev - 1);

    const value = {
     currentPage,
     roleArn,
     setRoleArn,
     isArnValid,
     handleNext,
     handleBack,
  };
    return (
        <OnBoardingContext.Provider value={value}>
        {children}
        </OnBoardingContext.Provider>
    )
}
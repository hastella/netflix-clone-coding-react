import React from 'react';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';

const override  = {
    display: "block",
    borderColor: "red",
    position: "absolute",
    top: "35%",
    left: "45%"
  };

const LoadingPage = () =>{
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true);

    const goToMainPage=()=> {
        navigate("/main");
    }

    useEffect(() => {
        setTimeout(() => {
        goToMainPage();
    }, 3000);
    document.body.classList.add('body');
    })

    return (
        <>
            <ClipLoader color="red" loading={loading} cssOverride={override} size={150} />
        </>
    )
}

export default LoadingPage
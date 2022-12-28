import React, { useState,useEffect } from "react";
import Nav from "./Nav";
import Filters from "./Filters/Filters";
import LoggIn from "./LoggIn";
import { getAuth, signOut } from "firebase/auth";
import Alert from "./Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [isLogged, setIsLogged] = useState(false);

  const signUpHandler = () => {
    setIsLogged(true);
  };

  const modeChangeHandler = () => {
    if (mode === "light") setmode("dark");
    else setmode("light");
  };

  const auth = getAuth();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setIsLogged(false);
        localStorage.removeItem('token');
        showAlert("Success","Signed Out successfully");
      })
      .catch((error) => {
        showAlert("Failed",error.code)
      });
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if(localToken){
      setIsLogged(true);
    }
    else{
      setIsLogged(false);
    }
  }, []);

  

  return (
    <React.Fragment>
      {alert != null && <Alert alert={alert} />}
      {!isLogged && <LoggIn showAlert={showAlert} onAuth={signUpHandler} />}
      {isLogged && (
        <>
          <Nav
            mode={mode}
            onSignOut={signOutHandler}
            onUpdateMode={modeChangeHandler}
          />
          <Filters mode={mode} />
        </>
      )}
    </React.Fragment>
  );
}
export default App;


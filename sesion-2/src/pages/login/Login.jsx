import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";


const Login = () => {
    const {user,loginGoogleWithPopup,observeAuthState } = useAuthStore();

    useEffect(() => {
        observeAuthState();
    }
    ,[observeAuthState])

    const onHandlerLogin = useCallback (() => {
        loginGoogleWithPopup()
    },[loginGoogleWithPopup])


  return (
    <div>
        <h1>hola L:{user}</h1>
      <button onClick={onHandlerLogin}>Log in</button>
    </div>
  )
}

export default Login

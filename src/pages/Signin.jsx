import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Signin = () => {
  const clientId =
    '888991993406-1g4cs1pqs2a7ovb2d05ebtpjhagmis1f.apps.googleusercontent.com';

  const handleLogin = async (credentialResponse) => {
    var obj = jwt_decode(credentialResponse.credential);
    var data = JSON.stringify(obj);
    console.log(data);

    const config = {
      method: 'POST',
      url: 'your backend server or endpoint',
      headers: {},
      data: data,
    };

    await axios(config);
  };

  return (
    <div className="flex justify-center items-center min-w-full h-[87vh] bg-slate-50">
      <div className="flex items-center rounded-2xl shadow-lg w-[60%] h-[80%] bg-[#fff]">
        <div className="flex-1 flex flex-column items-center justify-center flex-col">
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin onSuccess={handleLogin} />
          </GoogleOAuthProvider>
          ;<div>Facebook</div>
          <div>Github</div>
        </div>
        <div className="h-[100%] flex items-center justify-center">
          <div className="w-[0.1rem] h-[60%] bg-slate-300 absolute m-auto"></div>
          <div className="rounded-full border-2 border-slate-300 flex items-center justify-center p-2 font-bold bg-[#fff] z-10">
            OR
          </div>
        </div>
        <div className="flex-1 flex flex-column items-center justify-center flex-col">
          <input type="text" placeholder="Username"></input>
          <input type="text" placeholder="Password"></input>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;

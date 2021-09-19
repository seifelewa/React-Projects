import React from 'react';
import SignUp from './signUp';
import SignUpContextProvider from '../contexts/signUpContext';

class SignUpPage extends React.Component{
    render(){
        return(
        <body className="signUpBg">
            <SignUpContextProvider>
                <SignUp/>
            </SignUpContextProvider>
        </body>
        ); 
    }
    
}
export default SignUpPage;
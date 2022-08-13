import { NavBar } from "./NavBar";
import SignInSignOutButton from "./Botones Login/SignInSignOutButton";
import { AuthenticatedTemplate } from "@azure/msal-react";
import './PageLayout.scss'



export const PageLayout = (props) => {


        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
     
    
    return (
        <>
        

            <NavBar />

            <AuthenticatedTemplate>
            
            {/* <RequestInterceptor > */}
                <SignInSignOutButton />
            {/* </RequestInterceptor > */}
        </AuthenticatedTemplate>
    

            { props.children }
        </>
    );
};
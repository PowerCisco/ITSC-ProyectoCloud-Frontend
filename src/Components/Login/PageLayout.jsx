import { NavBar } from "./NavBar";
import SignInSignOutButton from "./Botones Login/SignInSignOutButton";
import { AuthenticatedTemplate } from "@azure/msal-react";
import './PageLayout.scss'
import { RequestInterceptor } from "../../Auth/RequestInterceptor";


export const PageLayout = (props) => {


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
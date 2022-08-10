import { NavBar } from "./NavBar";
import SignInSignOutButton from "./Botones Login/SignInSignOutButton";
import { AuthenticatedTemplate } from "@azure/msal-react";
import './PageLayout.scss'
export const PageLayout = (props) => {
    return (
        <>



            <NavBar />


            <AuthenticatedTemplate>
                <SignInSignOutButton />
            </AuthenticatedTemplate>

            {props.children}
        </>
    );
};
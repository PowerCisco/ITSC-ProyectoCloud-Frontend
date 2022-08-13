
import { useNavigate } from "react-router-dom";

import { CustomNavigationClient } from "../Auth/NavigationClient";

import { MsalProvider } from "@azure/msal-react";
import { PageLayout } from "./Login/PageLayout";

import { ChooseUrl } from "./ChooseUrl";
import { Home } from "./Principal Page/Home";
import { UnauthenticatedTemplate, AuthenticatedTemplate } from "@azure/msal-react";



export const App = ({ pca }) => {
    const history = useNavigate();
    const navigationClient = new CustomNavigationClient(history);


    pca.setNavigationClient(navigationClient);

    return (
        <>

            <MsalProvider instance={pca}>
                <AuthenticatedTemplate>


                    <PageLayout>

                        <ChooseUrl />

                    </PageLayout>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>

                    <Home />
                </UnauthenticatedTemplate>
            </MsalProvider>
        </>

    );




}



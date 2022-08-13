import { LogLevel } from "@azure/msal-browser";
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; 

//localhost: http://localhost:3000/
// redirectUri: "https://www.proyectofinal.cloud";
export const msalConfig = {
    auth: {
        clientId: "84c198d7-95d1-44cb-b67d-b5cc03de1d08",
        authority: "https://login.microsoftonline.com/19d7ec74-b477-423d-8b58-ae4a996cf32f",
        redirectUri: "http://localhost:3000/",
        postLogoutRedirectUri: "/"
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE || isEdge || isFirefox
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {	
                    return;	
                }
                switch (level) {	
                    case LogLevel.Error:	
                        console.error(message);	
                        return;	
                    case LogLevel.Info:	
                        console.info(message);	
                        return;	
                    case LogLevel.Verbose:	
                        console.debug(message);	
                        return;	
                    case LogLevel.Warning:	
                        console.warn(message);	
                        return;	
                    default:
                        return;
                }
            }
        }
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
    // scopes: [`api://84c198d7-95d1-44cb-b67d-b5cc03de1d08/.default`],
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft-ppe.com/v1.0/me"
};

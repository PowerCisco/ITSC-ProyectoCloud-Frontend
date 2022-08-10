import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import Button from "@material-ui/core/Button";
import { loginRequest } from "../../../Auth/authConfig";

export const SignInButton = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleLogin = () => {
        setAnchorEl(null);

            instance.loginRedirect(loginRequest);
       
    }

    return (
        <div>
            <Button
                color="primary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                 onClick={() => handleLogin()}
            >
                Ingresar
            </Button>
        
     
        </div>
    )
};
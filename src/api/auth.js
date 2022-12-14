import jwtDecode from "jwt-decode";
import { setUser } from "../store/actions/authActions";

let initialized = false;
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

export const initializeGoogleAuth = async () => {
    return new Promise((resolve) => {
        if (initialized) {
            return;
        }

        window.addEventListener('load', () => {
            /*global google*/
            google.accounts.id.initialize({
                client_id: clientId,
                callback: (response) => {
                    console.log(response);
                    const { 
                        given_name: firstName, 
                        family_name: lastName, 
                        email, 
                        picture: avatar, 
                        sub: id, 
                        name 
                    } = jwtDecode(response.credential);

                    store.dispatch(setUser({
                        firstName,
                        lastName,
                        email,
                        avatar,
                        id,
                        name,
                    })
                    )
                },
                scope: 'email profile',
            });
            resolve()
            initialized = true;
        })
    })
}

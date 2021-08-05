import decode from 'jwt-decode';

class AuhtService {
    // getting token and getting the profile page
    getProfile(){
        return decode(this.getToken());
    }

    // checking loggedIn with token 
    loggedIn(){
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    // check the created token ist expired or not
    isTokenExpired(token){
        try {
            const decoded = decode(token);
            if(decoded.exp < Date.now()/1000){
                return true;
            } else {
                return false;
            }
        } catch (err){
            return false;
        }
    }

    //get saved token
    getToken(){
        return localStorage.getItem('id_token');
    }
    // set token for login in
    login(idToken){
        localStorage.setItem('id_token',idToken);

        window.location.assign('/');
    }
    // remove save token when user logs out
    logout(){
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuhtService();
import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS,QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = props => {
    const { username: userParam } = useParams();
    

    const { loading,data } =useQuery(userParam ? QUERY_USERS : QUERY_ME,{
        variables:{ username: userParam }
    });

    const user = data?.user || {};
    console.log(user.username);

    if(
        Auth.loggedIn() && 
        Auth.getProfile().data.username === userParam
    ) {
        return <Redirect to="/profile" />;
    }

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    This is {userParam ? `${user.username}` : 'Your'} Profile
                </h2>
            </div>
        </div>
    )
}
export default Profile;
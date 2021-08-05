import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Profile = props => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.users || {};
    if (
        Auth.loggedIn() &&
        Auth.getProfile().data.username === userParam
    ) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>
    }
    if(!Auth.loggedIn()){
        return (
            <h4>
                You need to be logged in
            </h4>
        )
    }
 

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    This is { Auth.getProfile().data.username ? `${ Auth.getProfile().data.username}'s` : 'Your'} Profile
                </h2>
                <h2>
                    Username: {`${ Auth.getProfile().data.username}`}
                </h2>
                <h2>
                    Email: {`${Auth.getProfile().data.email}`}
                </h2>
                    <button className="btn ml-auto">
                        Invite people
                    </button>

            </div>
        </div>
    )
}
export default Profile;
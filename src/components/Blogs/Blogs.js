import React from 'react';

const Blogs = () => {
    return (
        <div className='container pt-5'>
            {/* question number 1 */}
            <h3>Difference between Authentications and Authorization</h3>
            <p><b>Authentication:</b> Authentication is a system to give access an user on an application. When a user proved his identity on the authentication center and get access all over the application.</p>

            <p><b>Authorization:</b> Authorization is provide different type of access of every user. An application needs different type of modaretors, admin, accountant, Human Resources, management etc. different type of department. This type of applications need authorization system.</p>


            <br /><br />

            {/* question number 2 */}
            <h3>Why we use firebase? What is the other option do you have implement Authentication.</h3>
            <p>Firebase Provide us authentication and authorization and that way is too much easy to use. Firebase provide us different types of login system like google, facebook, github, game center etc. Firebase is more secure and fast developed by many google developer.</p>

            <p>There is a list about firebase alternatives.
                <ul>
                    <li>Amazon Cognito</li>
                    <li>Auth 0</li>
                    <li>OneLogin</li>
                    <li>STYTCH</li>
                    <li>Ory</li>
                    <li>Supabase</li>
                    <li>Okta</li>
                    <li>PingIdentity</li>
                    <li>Keycloak</li>
                    <li>Frontegg</li>
                    <li>Authress</li>
                </ul>
            </p>

            <br /> <br />

            {/* quetion number 3  */}
            <h3>What other services does firebase provide other than Authentication</h3>
            <p>Firebase is a third party authentication and authorization system provide by google. Without authentication and authorization firebase also provide some other Services. There is the list in bellow about firebase services. 
                <ul>
                    <li>Cloud Firestore.</li>
                    <li>Cloud Functions.</li>
                    <li>Hosting.</li>
                    <li>Cloud Storage.</li>
                    <li>Google Analytics.</li>
                    <li>Predictions.</li>
                    <li>Cloud Messaging</li>
                </ul>
            </p>
        </div>
    );
};

export default Blogs;
//Higher Order Components
//reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDom from 'react-dom';

//generic component
const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);

//higher order component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin &&  <p>This is private info, please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};  

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>You do not have permission to access this.</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="This is the details" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="This is the details" />, document.getElementById('app'));

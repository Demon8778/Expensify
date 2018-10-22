//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse code
//Render hijacking
//Prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
};

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {/* {!props.isAuthenticated && <p>You are not authenticated to view this component!</p>}
            {props.isAuthenticated && <WrappedComponent {...props} />} */}
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>You are not authenticated to view this component</p>
            )}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details!"/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details!"/>, document.querySelector('#app'));

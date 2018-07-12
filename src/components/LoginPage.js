import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ( { startLogin } ) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Tracking App</h1>
            <p>Take control of your expenses.</p>
            <button
                className="button"
                onClick={startLogin}
            >Login with Google &nbsp;<img className="button__icon" src="images/google.png" /></button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
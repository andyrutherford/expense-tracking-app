import { login, logout } from '../../actions/auth';

test('should generate login action correctly', () => {
    const action = login('abc');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abc'
    });
});

test('should generate logout action correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
import { User } from '../../models/user';
import * as userActions from '../actions/authentication.actions';

export type Action = userActions.All;

const defaultUser = new User(null, 'GUEST', '');

export function userReducer(state: User = defaultUser, action: Action) {
    switch (action.type) {
        case userActions.GET_USER: {
            return {
                ...state,
                loading: true
            };
        }

        case userActions.AUTHENTICATED: {
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        }

        case userActions.NOT_AUTHENTICATED: {
            return {
                ...state,
                ...defaultUser,
                loading: false
            };
        }

        case userActions.GOOGLE_LOGIN || userActions.GITHUB_LOGIN: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }

        case userActions.AUTH_ERROR: {
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        }

        case userActions.LOGOUT: {
            return {
                ...state,
                loading: true
            };
        }

        default: {
            return state;
        }
    }
}

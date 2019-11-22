import {selectAuth, selectLogin, selectRegister} from './selectors';
import {type} from 'ramda';

describe('Auth selectors', () => {
  describe('selectAuth', () => {
    it('should return auth.isLoading as boolean', () => {
      const mockParameters = {
        auth: {
          isLoading: false
        },
      };
      const selected = selectAuth.resultFunc(mockParameters.auth);
      expect(type(selected)).toEqual('Boolean');
    });
  });

  describe('selectLogin', () => {
    it('should return login.isLoggedIn as boolean', () => {
      const mockParameters = {
        login: {
          isLoggedIn: false
        },
      };
      const selected = selectLogin.resultFunc(mockParameters.login);
      expect(type(selected)).toEqual('Boolean');
    });
  });

  describe('selectRegister', () => {
    it('should return register.submitted as boolean', () => {
      const mockParameters = {
        register: {
          submitted: false
        },
      };
      const selected = selectRegister.resultFunc(mockParameters.register);
      expect(type(selected)).toEqual('Boolean');
    });
  });
});
import {selectProfile} from './selectors';
import {type} from 'ramda';

describe('Profile selector', () => {
  describe('selectProfile', () => {
    it('should return map.submitted as boolean', () => {
      const mockParameters = {
        profile: {
          submitted: false
        },
      };
      const selected = selectProfile.resultFunc(mockParameters.profile);
      expect(type(selected)).toEqual('Boolean');
    });
  });
});
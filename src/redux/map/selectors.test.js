import {selectMap, selectRoutes, selectAddresses} from './selectors';
import {type} from 'ramda';

describe('Map selectors', () => {
  describe('selectMap', () => {
    it('should return map.isLoading as boolean', () => {
      const mockParameters = {
        map: {
          isLoading: false
        },
      };
      const selected = selectMap.resultFunc(mockParameters.map);
      expect(type(selected)).toEqual('Boolean');
    });
  });

  describe('selectRoutes', () => {
    it('should return routes.coords as array', () => {
      const mockParameters = {
        routes: {
          coords: []
        },
      };
      const selected = selectRoutes.resultFunc(mockParameters.routes);
      expect(type(selected)).toEqual('Array');
    });
  });

  describe('selectAddresses', () => {
    it('should return addresses.addresses as array', () => {
      const mockParameters = {
        addresses: {
          addresses: []
        },
      };
      const selected = selectAddresses.resultFunc(mockParameters.addresses);
      expect(type(selected)).toEqual('Array');
    });
  });
});
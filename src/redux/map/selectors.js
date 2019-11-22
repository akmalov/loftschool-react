import {createSelector} from 'reselect';

export const getMap = state => state.map;
export const getRoutes = state => getMap(state).routes;
export const getAddresses = state => getMap(state).addresses;

export const selectMap = createSelector(
  getMap, (mapState) => mapState.isLoading
);

export const selectRoutes = createSelector(
  getRoutes, (routesState) => routesState.coords
);

export const selectAddresses = createSelector(
  getAddresses, (addressesState) => addressesState.addresses
);
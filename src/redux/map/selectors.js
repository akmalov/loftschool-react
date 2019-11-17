export const getMap = state => state.map;
export const getRoutes = state => getMap(state).routes;
export const getAddresses = state => getMap(state).addresses;
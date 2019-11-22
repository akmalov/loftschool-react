import {createSelector} from 'reselect';

export const getProfile = state => state.profile;

export const selectProfile = createSelector(
  getProfile, (profileState) => profileState.submitted
);
import axios from 'axios';

import { Profile } from './types';
import store from './../store';

/**
 * Edit profile success aciton
 *
 * @param {Object} user - updated user data
 *
 * @returns {Object} - action type and payload
 */
const editProfileSuccess = user => (
  {
    type: Profile.EDIT_PROFILE_SUCCESS,
    user,
  }
);

/**
 * Edit profile success aciton
 *
 * @param {Object} error - updated user data
 *
 * @returns {Object} - action type and payload
 */
const editProfileFailure = error => (
  {
    type: Profile.EDIT_PROFILE_FAILURE,
    error,
  }
);

/**
 * Edit Profile action creator
 *
 * @param {Object} newUserData - new updated data
 *
 * @returns {function} - dispacth function
 */
const editProfile = newUserData => async (dispatch) => {
  try {
    const { data } = await axios.patch('/api/v1/profile/edit', newUserData);
    const { token } = store.getState().user;
    // console.log(data);
    localStorage.setItem('userData', JSON.stringify({ user: data, token }));
    // console.log(localStorage.userData);
    dispatch(editProfileSuccess(data));
  } catch (error) {
    dispatch(editProfileFailure(error));
    console.log('error here', error);
  }
};

export default editProfile;
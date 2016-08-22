/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import gallery from './modules/Gallery/GalleryReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  gallery
});

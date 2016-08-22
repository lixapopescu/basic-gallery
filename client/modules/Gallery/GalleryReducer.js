import { UPLOAD_IMAGES } from './GalleryActions';

// Initial State
const initialState = { data: [] };

const GalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGES :
      return {
        data: [action.images, ...state.data], //TODO: put somewhere the album name as well
      };

    default:
      return state;
  }
};

/* TODO Selectors */
/*
// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
*/

// Export Reducer
export default GalleryReducer;

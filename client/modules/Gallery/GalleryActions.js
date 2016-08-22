import callApi from '../../util/apiCaller';

// Export Constants
export const UPLOAD_IMAGES = 'UPLOAD_IMAGES';

// Export Actions
export function uploadImages(albumId, images) {
  return {
    type: UPLOAD_IMAGES,
    albumId,
    images,
  };
}

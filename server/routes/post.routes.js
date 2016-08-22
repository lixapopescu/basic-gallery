import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as GalleryController from '../controllers/gallery.controller';
import * as AlbumController from '../controllers/album.controller';
const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:cuid').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);


// List galleries
router.route('/albumList').get(GalleryController.getAlbumList);
router.route('/:albumNameUrl/metadata').get(AlbumController.getAlbumMetadata);
router.route('/:albumNameUrl/images').get(AlbumController.getAlbumImages);
router.route('/:albumNameUrl/add').get(AlbumController.uploadImages);


export default router;

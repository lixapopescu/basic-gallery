export function getAlbumMetadata(req, res){
  console.log('getAlbumMetadata');
  res.json({reponse: req.params.albumNameUrl});
}

export function getAlbumImages(req, res){
  console.log('getAlbumImages');
  res.json({reponse: req.params.albumNameUrl});
}

export function uploadImages(req, res){
  console.log('uploadImages');
  res.json({reponse: req.params.albumNameUrl});
}

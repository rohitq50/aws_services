import s3Services from "../models/s3Services.js";

// TODO use classes and typescript
function getBucketName(cb){
	s3Services.getBuckets(cb)
}

function getBucketFiles(cb){
	s3Services.getBucketFiles(cb)
}
function getFile(key, cb) {
	s3Services.getFile(key, cb)
}
function uploadFile(file, cb){
	s3Services.uploadFile(file.buffer, file.originalname, cb)
}

// function deleteBucketFiles(cb){
// 	s3Services.deleteBucketFiles(cb)
// }

export default {
	getBucketName,
	getBucketFiles,
	uploadFile,
	getFile,
	// deleteBucketFiles
}
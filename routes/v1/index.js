import express from 'express';
import fileSystem from "../../services/fileSystem.js";
import auth from "../../services/auth.js"
import multer from 'multer'
const upload = multer()
const router = express.Router();

router.post('/uploadFile', upload.any(), async function(req, res, next) {
	if(req.files.length == 0 || ! auth.verifyFile(req.files[0])) {
		req.fileValidationError = 'Unkown file!';
		return res.status(400).json({code: 400, msg: 'Unkown file!', payload: []})
	}
	const fileObj = req.files[0]
	fileSystem.uploadFile(fileObj, (msg, data) => {
		if(data) {
			return res.status(200).json({code: 200, msg: msg, payload: data})
		}
		return res.status(400).send({msg: 'Failed to upload!'})
	});
});

router.get('/getBuckets', function(req, res, next) {
	fileSystem.getBucketName((msg, data) => {
		if(data) {
			return res.status(200).json({code: 200, msg: msg, payload: data})
		}
		return res.status(400).send({msg: 'Failed to get!'})
	});
});

router.get('/getFiles', function(req, res, next) {
	fileSystem.getBucketFiles((msg, data) => {
		if(data) {
			return res.status(200).json({code: 200, msg: msg, payload: data})
		}
		return res.status(400).send({msg: 'Failed to get files!'})
	});
});

router.get("/getFile", function(req, res, next) {
	if(Object.keys(req.query).length == 0 || ! req.query.fileKey) {
		return res.status(400).json({code: 400, msg: 'Invalid inputs!', payload: []})
	}
	const fileName = req.query.fileKey
	fileSystem.getFile(fileName, (msg, data) => {
		if(data) {
			return res.status(200).attachment(fileName).send(data);
		}
		return res.status(400).send({msg: 'Failed to get files!'})
	});
});

// router.delete('/deleteFiles', async function(req, res, next) {
// 	fileSystem.deleteBucketFiles((msg, data) => {
// 		if(data) {
// 			return res.status(200).json({code: 200, msg: msg, payload: data})
// 		}
// 		return res.status(400).send({msg: 'Failed to delete!'})
// 	});
// });
export default router;
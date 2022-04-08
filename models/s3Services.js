import awsConfig from "./awsConfig.js";
const bucketName = "rohitq50bucket"
// TODO use classes and typescript
function getBuckets(cb){
	// Call S3 to list the buckets
	awsConfig.S3.listBuckets((err, data) => {
		if (err) {
			cb(err, []);
		} else {
			cb("Success", data.Buckets);
		}
	});
}

function getBucketFiles(cb) {
	// Create the parameters for calling listObjects
	const bucketParams = {Bucket : bucketName};
	// Call S3 to obtain a list of the objects in the bucket
	awsConfig.S3.listObjects(bucketParams, function(err, data) {
		if (err) {
			cb(err, []);
		} else {
			cb("Success", data);
		}
	});
}

function getFile(fileKey, cb) {
	const options = {
        Bucket : bucketName,
        Key    : fileKey,
    };
	// return awsConfig.S3.getObject(options)

	awsConfig.S3.getObject(options, function(err, data) {
		if (err) {
			cb(err, []);
		} else {
			cb("success", data.Body);
		}
	});
}

function uploadFile(data, fileName, cb){
	const uploadParams = {Bucket: bucketName, Key: fileName, Body: data};

	// call S3 to retrieve upload file to specified bucket
	awsConfig.S3.upload (uploadParams, function (err, data) {
		if (err) {
			cb(err, []);
		} if (data) {
			cb("Upload Success", data.Location);
		}
	});
}

async function deleteBucketFiles(cb) {
	// Create the parameters for calling listObjects
	const bucketParams = {Bucket : bucketName};

	// Call S3 to obtain a list of the objects in the bucket
	awsConfig.S3.deleteBucket(bucketParams, function(err, data) {
		if (err) {
			cb(err, []);
		} else {
			cb("Success", data);
		}
	});
}

export default {
	getBuckets,
	getBucketFiles,
	uploadFile,
	getFile,
	deleteBucketFiles
}
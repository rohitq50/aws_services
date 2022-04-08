

function verifyFile(file) {
	if ( ! file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|pdf|txt)$/)) {
        return false;
    }
    return true;
}

export default {
	verifyFile
}
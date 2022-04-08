import AWS from 'aws-sdk';
// let S3 = require('aws-sdk/clients/s3');

// Set the Region
AWS.config.update({region: 'ap-south-1'});

// var credentials = new AWS.SharedIniFileCredentials({profile: 'personal-account'});
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'personal-account'});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});
// const s3 = new S3

export default {AWS: AWS, S3: s3};
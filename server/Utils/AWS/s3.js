import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
  accessKeyId: "AKIAUO2TCSAYBLYR4HGI",
  secretAccessKey: "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",
  region: "ap-south-1"
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject)=>
    s3Bucket.upload(options, (error,data)=>{
      if(error) return reject(error);
      return resolve(data);
    })
  );
};
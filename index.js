const restify = require('restify');


const server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());


server.get('/test', (req, res, next) => {
  res.json({ok: true});
  next();
});

server.post('/sns', (req, res, next) => {
  console.log(req.body);
  res.send({ok: true});
  next();

  /*
  Sample S3 => SNS, PUT event
   {
   "Type" : "Notification",
   "MessageId" : "3935d45a-88d1-57d9-b14e-847ca3e8a2cc",
   "TopicArn" : "arn:aws:sns:us-west-1:177315242985:price_delivered",
   "Subject" : "Amazon S3 Notification",
   "Message" : "{\"Records\":[{\"eventVersion\":\"2.0\",\"eventSource\":\"aws:s3\",\"awsRegion\":\"us-west-1\",\"eventTime\":\"2016-08-11T07:27:52.982Z\",\"eventName\":\"ObjectCreated:Put\",\"userIdentity\":{\"principalId\":\"AWS:AIDAIWNTBVJN3CXTO5234\"},\"requestParameters\":{\"sourceIPAddress\":\"192.77.239.202\"},\"responseElements\":{\"x-amz-request-id\":\"72EA97F63B7C9476\",\"x-amz-id-2\":\"4Y75LsyuiPWmL2DGzRZLTgPMkccrIq8bCuUoQFHHGjKucIDTUAmO4gr5nxd/5UP7\"},\"s3\":{\"s3SchemaVersion\":\"1.0\",\"configurationId\":\"PriceBatchDelivered\",\"bucket\":{\"name\":\"prices.semprehealth.com\",\"ownerIdentity\":{\"principalId\":\"A3141LGQ8B5OL9\"},\"arn\":\"arn:aws:s3:::prices.semprehealth.com\"},\"object\":{\"key\":\"batches/a.txt\",\"size\":0,\"eTag\":\"d41d8cd98f00b204e9800998ecf8427e\",\"sequencer\":\"0057AC28F8EE51C66E\"}}}]}",
   "Timestamp" : "2016-08-11T07:27:53.066Z",
   "SignatureVersion" : "1",
   "Signature" : "ekHoVvYNbrSfISotWKar8iW/BfntLB3kEVv9l+Suu96eZBPRaQRs9Sva7UHTJUOqqXB3/v3zCqxItkqlhJbRVYxnqPl4LG/0eTfSntyIDC3z/yAhCx2KRg9puu/qDoTM9iG8eSowv4zntVxwLNU8D3p3O/euIn6jDGa2U9b7U2DzWItw53kqvkCjmvTtSE40Z3oRTLonQ9dtJ7zNGQs1T635461pZYXxS9Ju+PtNOPEPLyAof7RL5kj/fHx+Q29R6sUABXZ8y5zfIJg7bhkEXBjh2A8QZptA2moFdvBoIFM0sYoU1Sdilke5Q1O4BLDluP/Kp/CChmrv8jCkAlE/UQ==",
   "SigningCertURL" : "https://sns.us-west-1.amazonaws.com/SimpleNotificationService-bb750dd426d95ee9390147a5624348ee.pem",
   "UnsubscribeURL" : "https://sns.us-west-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-1:177315242985:price_delivered:4e6b472b-aa55-419f-882e-6d2edacf3439"
   }
   */
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


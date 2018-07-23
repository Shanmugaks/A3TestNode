var response = require('../supercommon/response.js');
var AWS = require('aws-sdk');

const TableName_studentspersonalinfo = 'studentspersonalinfo';

exports.handler = function (event, context, callback) {

  console.log("Invoked Create Personal Info");

  var result = {
    statusCode: 200,
    body: 'Invoked Create Personal Info',
    headers: {'content-type': 'application/json'}
  };

  callback(null, result);
  
  if (event.pathParameters == null || event.pathParameters == undefined) 
  {
    // Throw error
  }

  console.log("\n Received Path params: " + event.pathParameters);

  if(event.pathParameters.studentid == udefined || event.pathParameters.studentid == null)
  {
     // Throw error
  }

  let StudentIdForPersonalInfoToBeCreated = event.pathParameters.studentid; 
  
  if (event.body == null || event.body == undefined) 
  {
     // Throw error
  }
    let bodycontent = JSON.parse(event.body);
 
      
     if (event.bodycontent == null || event.bodycontent == undefined) 
  {
     // Throw error
  }

  let studentspersonalInfo = JSON.stringify(bodycontent.data);   

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const NewPersonalInfo = {
    TableName: TableName_studentspersonalinfo,
    Item: {
      studentid: StudentIdForPersonalInfoToBeCreated,
      personalinfo:  studentspersonalInfo,
      createdAt: new Date().getTime(),
    },
  };

  dynamoDb.put(NewPersonalInfo, function (err, data) {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      callback(null, reponse.failure({
        status: false,
        error: err
      }));
    } else {
      console.log("Added New item:", JSON.stringify(data.Item, null, 2));
      // Return 201
    }    
  });  
};
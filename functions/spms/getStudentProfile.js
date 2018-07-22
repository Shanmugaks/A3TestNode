var response = require('../supercommon/response.js');
var AWS = require('aws-sdk');

const TableName_studentsprofile = 'studentsprofile';

exports.handler = function (event, context, callback) {
  
  if (event.pathParameters == null || event.pathParameters == undefined) 
  {
    // Throw error
  }

  console.log("\n Received Path params: " + event.pathParameters);

  if(event.pathParameters.studentid == udefined || event.pathParameters.studentid == null)
  {
     // Throw error
  }

  let StudentIdForProfileToBeRetrieved = event.pathParameters.studentid; 

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const getStudentProfileQuery = {
    TableName: TableName_studentsprofile,
    Key: {
      studentid: StudentIdForProfileToBeRetrieved,
    },
  };

  dynamoDb.get(getStudentProfileQuery, function (err, data) {
    if (err) {
      console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
      callback(null, failure({
        status: false,
        error: err
      }));
    } else {
      console.log("Read item which added just now:", JSON.stringify(data.Item, null, 2));
      callback(null, success(data.Item));
    }
  }); 

};

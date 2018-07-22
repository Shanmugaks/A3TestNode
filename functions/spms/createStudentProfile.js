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
  
    let StudentIdForProfileToBeCreated = event.pathParameters.studentid; 
    
    if (event.body == null || event.body == undefined) 
    {
       // Throw error
    }
      let bodycontent = JSON.parse(event.body);
   
        
       if (event.bodycontent == null || event.bodycontent == undefined) 
    {
       // Throw error
    }
  
    let studentsprofile = JSON.stringify(bodycontent.data);    
  
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
  
    const NewUserData = {
      TableName: TableName_studentsprofile,
      Item: {
        studentid: StudentIdForProfileToBeCreated,
        profile:  studentsprofile,
        createdAt: new Date().getTime(),
      },
    };
  
    dynamoDb.put(NewUserData, function (err, data) {
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
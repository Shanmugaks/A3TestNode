/*
  Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except
  in compliance with the License. A copy of the License is located at

      http://aws.amazon.com/apache2.0/

  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/
var response = require('../supercommon/response.js');
var AWS = require('aws-sdk');

const TableName_studentsprofile = 'studentsprofile';
const TableName_studentspersonalinfo = 'studentspersonalinfo';

exports.getStudentProfile = function (event, context, callback) {
  
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

exports.createStudentsProfile = function (event, context, callback) {

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

exports.getStudentsPersonalInfo = function (event, context, callback) {
  
  if (event.pathParameters == null || event.pathParameters == undefined) 
  {
    // Throw error
  }

  console.log("\n Received Path params: " + event.pathParameters);

  if(event.pathParameters.studentid == udefined || event.pathParameters.studentid == null)
  {
     // Throw error
  }

  let StudentIdForPersonalInfoToBeRetrieved = event.pathParameters.studentid; 

  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const getStudentPersonalInfoQuery = {
    TableName: TableName_studentspersonalinfo,
    Key: {
      studentid: StudentIdForPersonalInfoToBeRetrieved,
    },
  };

  dynamoDb.get(getStudentPersonalInfoQuery, function (err, data) {
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

exports.createStudentsPersonalInfo = function (event, context, callback) {

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
    TableName: TableName_studentspersonalizeddata,
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
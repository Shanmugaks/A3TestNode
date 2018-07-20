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

exports.handler = function (event, context, callback) {
  //const data = JSON.parse(event.body);
  const Myusername = 'shanmuga';
  const MytableName = 'studentsprofile';
  const Mystudentid = '123456';

  const dynamoDb = new AWS.DynamoDB.DocumentClient();


  const NewUserData = {
    TableName: MytableName,
    Item: {
      Mystudentid,
      username: Myusername,
      createdAt: new Date().getTime(),
    },
  };

  const getStudentProfileQuery = {
    TableName: MytableName,
    Key: {
      Mystudentid,
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
      callback(null, response.success(result.Item));
    }
  });

  dynamoDb.get(getStudentProfileQuery, function (err, data) {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      callback(null, reponse.failure({
        status: false,
        error: err
      }));
    } else {
      console.log("Read item which added just now:", JSON.stringify(data.Item, null, 2));
      callback(null, response.success(result.Item));
    }
  });
};
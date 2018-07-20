/*
  Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except
  in compliance with the License. A copy of the License is located at

      http://aws.amazon.com/apache2.0/

  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/

import * as dynamodb from '../spms/supercommon/dynamodb';
import { success, failure } from '../spms/supercommon/response';

export const main = async (event, context, callback) => {
  //const data = JSON.parse(event.body);
  const Myusername = 'shanmuga';
  const MytableName = 'studentsprofile';
  const Mystudentid = '123456';

  const NewUserData = {
    TableName: MytableName,
    Item: {
      studentid,
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

  try {
    await dynamodb.call('put', NewUserData);
    const result = await dynamodb.call('get', getStudentProfileQuery);
    callback(null, success(result.Item));
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false, error: e }));
  }
};

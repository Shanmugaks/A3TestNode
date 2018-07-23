
var createStudentProfile = require('createStudentProfile.js');
var createStudentsPersonalInfo = require('createStudentsPersonalInfo.js');
var getStudentProfile = require('getStudentProfile.js');
var getStudentsPersonalInfo = require('getStudentsPersonalInfo.js');

exports.handler = function(event, context, callback) 
{
    
    var httpmethod  = event.httpmethod;
    var path        = event.path;
    
    if(httpmethod == 'POST')
    {
        if(path.indexOf('profile') !== -1)
        {
            return createStudentProfile(event, context, callback);

        }
        else if(path.indexOf('personalinfo') !== -1)
        {
            return createStudentsPersonalInfo(event, context, callback);
        }
    }
    else if(httpmethod == 'GET')
    {
        if(path.indexOf('profile') !== -1)
        {
            return getStudentProfile(event, context, callback);

        }
        else if(path.indexOf('personalinfo') !== -1)
        {
            return getStudentsPersonalInfo(event, context, callback);
        }
    }

    var result = {
      statusCode: 405,
      body: 'Invalid HTTP Method',
      headers: {'content-type': 'application/json'}
    };
  
    callback(null, result);
  };
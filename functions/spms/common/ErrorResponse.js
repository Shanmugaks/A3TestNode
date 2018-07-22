'use strict';

let csvToJson = require('convert-csv-to-json');
let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("ErrorResponse.csv");
for(let i=0; i<json.length;i++)
{
    console.log(json[i]);
}

const ResponseBuilder = (statusCode, body) => ({
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  });

module.exports = ErrorResponse = json;
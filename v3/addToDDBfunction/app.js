/*! Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: MIT-0
 */

// Version 3 - with reuse flag, smaller SDK import

'use strict'

const DynamoDB = require('aws-sdk/clients/dynamodb')
const documentClient = new DynamoDB.DocumentClient()

// The Lambda handler
exports.handler = async (event) => {
  // Add a random number and timestamp to the DynamoDB table
  const params = {
    TableName: process.env.DDBtable,
    Item: {
      ID: parseInt(Math.random() * 10000000).toString(),
      Timestamp: new Date().toTimeString()
    }
  }
  await documentClient.put(params).promise()
}
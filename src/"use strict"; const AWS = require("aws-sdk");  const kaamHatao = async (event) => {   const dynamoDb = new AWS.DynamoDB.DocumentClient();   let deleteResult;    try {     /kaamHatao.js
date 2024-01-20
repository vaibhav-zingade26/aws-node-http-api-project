"use strict";
const AWS = require("aws-sdk");

const kaamHatao = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let deleteResult;

  try {
    // Assuming you have an "itemId" field as a unique identifier for the item you want to delete
    const params = {
      TableName: "KaamKaro",
      Key: {
        itemId: "your_item_id_to_delete",
      },
    };

    deleteResult = await dynamoDb.delete(params).promise();
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Item deleted successfully", result: deleteResult }),
  };
};

module.exports = {
  handler: kaamHatao,
};

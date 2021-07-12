exports.handler = async function (event) {
  return {
    isBase64Encoded: false,
    statusCode: 200,
    body: JSON.stringify(event, null, 2),
    headers: {
      'content-type': 'application/json',
    },
  };
};

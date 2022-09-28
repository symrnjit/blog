// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    //start date
    let sDate = new Date(2022, 08, 20);

    //today
    let todayDate = new Date();

    //difference in weeks
    let diff = Math.floor((todayDate - sDate) / (1000 * 60 * 60 * 24 * 7));
    let binTypes = (diff % 2 == 0) ? 'blue and brown' : 'green';

    return {
      statusCode: 200,
      body: `Don't forget bin collection tomorrow for ${binTypes} bins`,
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

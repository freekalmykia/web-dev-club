
// flag that indicates whether data received
let dataReceived = false;
// variable to store data from the server
let data = null;

// function that gets data from remote server
// it takes some time, that is why we use 'async' word before 'function'
// in which we use 'await' before another function which actually performs data fetching.
const getData = async function() {
  try {
    const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/`);
    data = await response.json();
    // we should check 'data' object for error property.
    // if does not exist then data has been received successfully
    if (!data.error) {
      // set dataReceived flag to true
      dataReceived = true;
      // print data into browser console
      console.log('data received: ', data);
    } else {
      dataReceived = false;
      console.log('could not receive data!');
    }
  }
  catch(error) {
    console.log(error);
  }
}

// 
async function main() {
  // attach click event listener to "Get data" button
  // <button id="get-data-btn">Get data</button>
  // document has getElementById method and return an element object
  // element has addEventListener method
  document.getElementById('get-data-btn').addEventListener('click', async function(event) {
    console.log('get data clicked');
    //
    await getData();
  });

}

main();
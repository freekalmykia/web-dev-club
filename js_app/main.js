
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

const createArticle = (article) => {
  // create all elements
  const container = document.getElementById('foreach-method');
  const card = document.createElement('div');
  const top = document.createElement('div');
  const bottom = document.createElement('div');
  const image = document.createElement('img');
  const title = document.createElement('h2');
  const summary = document.createElement('p');

  // use content
  image.setAttribute('src', article.image_url);
  title.textContent = article.title;
  summary.textContent = article.summary;

  // attach elements
  container.appendChild(card);

  card.appendChild(top);
  card.appendChild(bottom);

  top.appendChild(image);

  bottom.appendChild(title);
  bottom.appendChild(summary);
}

// foreach handler
const forEachMethod = (articles) => {
  console.log('results: ', articles);

  articles.forEach(article => {
    createArticle(article);
  })

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

  document.getElementById('foreach-method-btn').addEventListener('click', () => forEachMethod(data.results))

}

main();
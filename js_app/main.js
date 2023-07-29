
// flag that indicates whether data received
let dataReceived = false;
// variable to store data from the server
let data = null;

const DateTime = luxon.DateTime;

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

  // find entry point
  const container = document.getElementById('foreach-method');
  // create all elements
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

const createArticleCard = article => {
  // create all elements
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

  card.appendChild(top);
  card.appendChild(bottom);

  top.appendChild(image);

  bottom.appendChild(title);
  bottom.appendChild(summary);

  return card;
}

const attachArticleCard = card => {
  // find entry point
  const container = document.getElementById('foreach-method');
  container.appendChild(card);
}

// foreach handler
const forEachMethod = (articles) => {
  articles.forEach(article => {
    // createArticle(article);
    const card = createArticleCard(article);
    attachArticleCard(card);
  })
}

const createArticleCards = articles => {
  return articles.map((article) => {
    // create all elements
    const card = document.createElement('div');
    const top = document.createElement('div');
    const bottom = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const summary = document.createElement('p');

    // use content
    image.setAttribute('src', article.image_url);
    title.textContent = article.title.toUpperCase();
    summary.textContent = article.summary;

    card.appendChild(top);
    card.appendChild(bottom);

    top.appendChild(image);

    bottom.appendChild(title);
    bottom.appendChild(summary);

    return card;
  });
}

const mapMethod = articles => {
  const cards = createArticleCards(articles);
  const container = document.getElementById('map-method');
  container.append(...cards);
}

const filterMethod = articles => {
  const date1 = DateTime.now().minus({ hours: 24 });
  const filteredArticles = articles.filter(article => {
    const publishedAt = DateTime.fromISO(article.published_at);
    return date1 > publishedAt;
  })

  const cards = createArticleCards(filteredArticles);
  const container = document.getElementById('filter-method');
  container.append(...cards);

  getShownArticles();
}

const concatMethod = async () => {
  // get next data
  const response = await fetch(data.next);
  const nextData = await response.json();

  // get existing article
  const container = document.getElementById('map-method');
  const children = container.childNodes;

  const allArticles = [...children].concat(createArticleCards(nextData.results));

  container.append(...allArticles);
}

const sortMethod = (articles) => {
  const container = document.getElementById('map-method');

  const sortedArticles = articles.sort((a, b) => {
    const aDate = DateTime.fromISO(a.published_at);
    const bDate = DateTime.fromISO(b.published_at);

    if (aDate > bDate) return 1;
    if (aDate < bDate) return -1;
    return 0;
  })

  const sortedArticleCards = createArticleCards(sortedArticles);

  // remove previous article cards
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild)
  }

  container.append(...sortedArticleCards);
}

const getShownArticles = () => {
  const counter = document.getElementById('counter');

  const container = document.getElementById('filter-method');
  const childNodes = container.childNodes;

  const numberOfArticles = [...childNodes].reduce((acc, element, index) => {
    return acc + 1;
  }, 0)

  counter.textContent = numberOfArticles;
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

  document.getElementById('map-method-btn').addEventListener('click', () => {
    mapMethod(data.results);
  })

  document.getElementById('filter-method-btn').addEventListener('click', () => {
    filterMethod(data.results);
  })

  document.getElementById('concat-method-btn').addEventListener('click', () => {
    concatMethod();
  })

  document.getElementById('sort-method-btn').addEventListener('click', () => {
    sortMethod(data.results);
  })
}

main();
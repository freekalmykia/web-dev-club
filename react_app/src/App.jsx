import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Article from './components/Article';
import LifeCycleMethods from './components/LifeCycleMethods';
import HooksComponent from './components/Hooks';
import PropsComponent from './components/PropsComponent';

function App() {

  const [pageState, setPageState] = useState({
    articles: [],
    dataReceived: false,
    error: null,
    showLifeCycleMethods: true,
    showHooksComponent: true,
    title: 'Initial Title'
  })

  useEffect(() => {
    console.log('pageState: ', pageState);
  })

  const getData = async function() {
    try {
      const response = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/`);
      const data = await response.json();
      // we should check 'data' object for error property.
      // if does not exist then data has been received successfully
      if (!data.error) {
        // print data into browser console
        console.log('data received: ', data);
        setPageState({
          ...pageState,
          articles: data.results,
          dataReceived: true
        })
      } else {
        console.log('could not receive data!');
        setPageState({
          ...pageState,
          error: data.error
        })
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  const unmountLifeCycleComponent = () => {
    setPageState({ ...pageState, showLifeCycleMethods: false });
  }

  const unmountHooksComponent = () => {
    setPageState({ ...pageState, showHooksComponent: false });
  }

  const changeTitle = (text) => {
    setPageState({ ...pageState, title: text });
  }

  return (
    <div className="App">
      <Header />
      { pageState.showLifeCycleMethods ? <LifeCycleMethods /> : null }
      { pageState.showHooksComponent ? <HooksComponent /> : null }
      <PropsComponent title={pageState.title} />
      <Button onClick={unmountLifeCycleComponent} text="Unmount Life Cycle Component" />
      <Button onClick={unmountHooksComponent} text="Unmount Hooks Component" />
      <Button onClick={e => changeTitle('Updated Title')} text="Change Title" />
      <Button onClick={getData} text="Get Data" />
      {
        pageState.articles.map(article => {
          return <Article {...article} />
        })
      }

    </div>
  );
}

export default App;

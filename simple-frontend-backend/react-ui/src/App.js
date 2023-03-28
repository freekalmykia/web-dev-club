import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [people, setPeople] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!message) return;
        setTimeout(() => setMessage(null), 1500);
    }, [message])

    const getPeople = () => {
        fetch('http://localhost:5000/file')
            .then(response => response.json())
            .then(json => setPeople(json))
            .catch(error => console.log(error))
    }

    const deletePerson = event => {
        const personId = event.target.dataset.id;
        const updatedPeople = people.filter(person => person.id !== personId);
        const removedPerson = people.find(person => person.id === personId);
        setPeople(updatedPeople);
        setMessage(`${removedPerson.name}, age: ${removedPerson.age}, city: ${removedPerson.city}, state: ${removedPerson.state} removed`);
    }

    return (
        <div className="App">
            <h1>Simple Application: HTML, CSS, React and Express server</h1>
            <button id="get-people" onClick={getPeople}>Get People</button>
            <div id="people" className={`people-container ${people.length > 0 ? 'bg-blue' : ''}`}>
                {
                    people.map(person => {
                        const personInfo = `${person.name}, age: ${person.age}, city: ${person.city}, state: ${person.state}`;
                        return(
                            <div id={`person-id-${person.id}`} key={`person-id-${person.id}`}>
                                <span>{ personInfo }</span>
                                <button data-id={person.id} onClick={deletePerson}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <div id="message">{ message }</div>
        </div>
    );
}

export default App;

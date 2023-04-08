console.log('main.js file loaded');

function getPeople() {
    const peopleDivElement = document.getElementById('people');

    function clearMessage() {
        setTimeout(() => {
            const messageContainer = document.getElementById('message');
            messageContainer.textContent = '';
        }, 1500)
    }

    function deletePerson(event) {
        const personContainer = event.target.parentElement;
        personContainer.remove();
        const messageContainer = document.getElementById('message');
        const personInfo = event.target.previousSibling.textContent;
        messageContainer.textContent = `${personInfo} deleted`;
        clearMessage();

        const peopleDivElement = document.getElementById('people');
        if (peopleDivElement.children.length === 0) {
            peopleDivElement.classList.remove('bg-blue');
        }
    }

    fetch('http://localhost:5000/people')
        .then(response => response.json())
        .then(json => {
            json.forEach(person => {
                const personContainer = document.createElement('div');
                personContainer.setAttribute('id', `person-id-${person.id}`);

                const span = document.createElement('span');
                span.textContent = `${person.name}, age: ${person.age}, city: ${person.city}, state: ${person.state}`;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', deletePerson);

                personContainer.appendChild(span);
                personContainer.appendChild(deleteButton);

                peopleDivElement.appendChild(personContainer);
                peopleDivElement.classList.add('bg-blue');
            })
        })
        .catch(error => {
            console.log('error: ', error);
        })
}

const getPeopleButton = document.getElementById('get-people');
getPeopleButton.addEventListener('click', getPeople);
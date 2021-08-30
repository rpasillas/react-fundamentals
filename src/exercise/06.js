// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const inputRef = React.useRef(null);
    const [error, setError] = React.useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmitUsername(inputRef.current.value);
    }

    // Get the value of the input on change
    const handleChange = (event) => {
        const value = event.target.value;
        // Check if the input is all lowercase
        const isValid = (value) === value.toLowerCase();

        const btn = document.querySelector('form button');

        // (Re)enable the button
        btn.removeAttribute('disabled');

        // Set an Error
        setError(isValid ? null: 'Username must be lower case.' );
        
        if ( !isValid ) {
            // Disable the button
            btn.setAttribute('disabled', 'disabled');
        }
        return isValid;
    };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} onChange={handleChange}/>
      </div>
        <div role="alert" style={{ color: 'red' }}>
            {error}
        </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

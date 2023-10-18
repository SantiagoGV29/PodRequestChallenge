import React, { useState } from 'react';
import validator from 'validator';

function App() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = () => {
    if (validator.isEmail(email)) {
      setError(false);
    } else {
      setMessage('Oops! Please check your email');
      setError(true);
    }
  };
  return (
    <div className="Container_1">
      <img
        className="logo"
        src="../../public/assets/desktop/logo.svg"
        alt="logo"
      />
      <section className="Container_2">
        <h1>
          Publish your podcasts
          <span> everywhere.</span>
        </h1>
        <p>
          Upload your audio to Pod with a single click. We'll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
        <nav className="nav_bar">
          <img src="../../public/assets/desktop/spotify.svg" alt="spotify" />
          <img
            src="../../public/assets/desktop/apple-podcast.svg"
            alt="Apple"
            className="ml-10"
          />
          <img
            src="../../public/assets/desktop/google-podcasts.svg"
            alt="Google"
            className="ml-41px"
          />
          <img
            src="../../public/assets/desktop/pocket-casts.svg"
            alt="Pocket"
            className="ml-27px"
          />
        </nav>
      <form className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        {error && <span className="error">{message}</span>}
        <button onClick={handleSubmit} className="Request_Button" type="button">
          Request Access
        </button>
      </form>
      </section>

    </div>
  );
}

export default App;

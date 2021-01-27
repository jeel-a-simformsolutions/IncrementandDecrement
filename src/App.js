import React, { useState } from 'react';

const App = () => {

  const [num, setnum] = useState(0);

  const incNum = () => {
    setnum(num + 1);
  };

  const decNum = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      alert('sorry, zero limit reached')
      setnum(0);
    }
  }


  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> {num} </h1>
          <div className="btn_div">
            <button onClick={incNum}> Increment </button>
            <button onClick={decNum}> decrement </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
import React, { useState } from "react";

/**
 * Those are the following problems with provided component:
 
  1. Type error: The character "}" is not valid inside a JSX element  <h2>My Component ({this.state.clicks} clicks})</h2>
 
  2. Must call super constructor and pass props to it
 
  3. The clickHandler method is not bound to the component instance, so this.setState will not work as expected. 
  It needs to be bound in the constructor or use an arrow function to automatically bind this.

  4. The clickHandler method is using this.clicks instead of this.state.clicks.

  5. The refs property is being used to reference the component's DOM node, which is not recommended. 
  Instead, we can use a React.createRef() to create a ref and attach it to the component's div.

  */

// This is a better version of a counter component using hooks

const Counter = ({ children, headerText }) => {
  const [clicks, setClicks] = useState(0);

  const clickHandler = () => {
    setClicks((count) => count + 1);
  };

  return (
    <div className="my-5" onClick={clickHandler}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  );
};

export default Counter;

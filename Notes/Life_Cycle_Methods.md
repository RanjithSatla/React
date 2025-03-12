# Life Cycle Methods : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

1. Mounting Cycle :

- i. Render Phase :

  - Constructor is called then render method is called with initial data.

- ii. Commit Phase :

  - ComponentDidMount is called. Here we make the api call and update the state variables.

2. Updating Cycle :

- i. Render Phase :

  - setState() updates the state variables Hence render method is called to update the UI with new API data.

- ii. Commit Phase :

  - ComponentDidUpdate is called.

3. Unmouting :

- ii. Commit Phase :

  - componentWillUnmount is called when the component is unmounted from UI.

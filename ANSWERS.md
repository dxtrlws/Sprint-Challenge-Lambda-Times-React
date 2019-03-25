1. PropTypes are used to verify the type of data that our components are expecting. If we expect a 'string' to come in as a data type, we can strictly check to make sure that's the data we're expecting. 
2. React lifecycle methods have are basically the birth, growth and death of a component. 
   1. ComponentDidMount is what's called when a component if after the component had been renedred.
   2. ComponentWillUnmount will tear down the component
   3. ComponentDidUpdate will be called after changes in state or props have been made.
3. High Order Components are just like high order funcitons. They are basically funcitons that take other components as an argument. 
4. Here are the three different ways to style a component in react
   1. You can install a third party library such as Reactstrap. These libraries have taken popular styles such as "buttons" and turned them into components for you. All you have to do is import them into your project. 
   2. Another way is to use CSS and call them into your project using "className". This will require to have a saparate CSS file to host your code.
   3. Syled-Componenets is the last way. It works like the Reactstrap except you build your own components using regualr CSS syntax. They also take props and have a lot more freedom on how they are styled. ****
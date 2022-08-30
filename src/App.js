import "./App.css";
import Box from "./Box"

const App = () => {
  return (
    <>
      <div className="App">
        <div>
          <h1>Hello</h1>
          <p>Hello World</p>
        </div>

        <div>
          <h1>Hello</h1>
          <p>Hello World</p>
        </div>
      </div>
      <h1 className="bold">Hello  from react.js</h1>
      <Box para = "React is a JavaScript library for building user interfaces."/>
      <Box para1 = "React is used to build single-page applications."/>
      <Box para = " React allows us to create reusable UI components."/>
      <Box para = "React creates a VIRTUAL DOM in memory." />
      <Box para =" Current version of React.JS is V18.0.0. "/>
 
      {/* <span className="box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aliquid officia iusto suscipit praesentium reiciendis excepturi maxime alias quas vero quidem odit ex, inventore similique facere doloribus neque perspiciatis eius repellat quos recusandae rerum ea nam obcaecati. Nihil deserunt eius tempore provident ab sequi ipsam omnis temporibus maiores, aperiam numquam? <button>Read more</button></span> */}
     
    </>
  );
};

export default App;

import logo from "./logo.svg"
import "./App.css"
import FirstComponent from "./components/FirstComponent"
import Welcome from "./components/Welcome"
import PowerfulComponent from "./components/PowerfulComponent"
import MoreComplicatedComponent from "./components/MoreComplicatedComponent"

// const greet = () => {
//   console.log("Hello")
//   return "Hello"
// }

const App = () => {
  const info = {
    name: "Stefano",
    textColor: "blue",
  }

  return (
    // THIS IS JSX! ☺
    // <h1 id='hello'> </h1>
    // document.querySelector("h1") => {id: "hello", ....}
    <div className="App" style={{ color: info.textColor }}>
      <h1>CLASS COMPONENTS</h1>
      {/* className === class */}
      <PowerfulComponent userName="Paul" favouriteColor="blue" />
      <MoreComplicatedComponent user={{name: "Lidia", role: "student", batch: "Fall20"}} />
      {/* <FirstComponent />
      <FirstComponent /> */}
      <h1>FUNCTIONAL COMPONENTS</h1>
      <FirstComponent />
      <Welcome
        name="Lidia"
        batch="Fall20"
        role="TA"
        favouriteColor="green"
      />{" "}
      {/* props => {name: "Lidia"} */}
      <Welcome
        name="Stefano"
        batch="none"
        role="Teacher"
        favouriteColor="yellow"
      />
      <Welcome
        name="Riccardo"
        batch="none"
        role="Teacher"
        favouriteColor="orange"
      />
    </div>
  )
}

export default App

// const sum = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber
// }

// sum(3,3)

//DRY => Don't repeat yourself

// const Welcome = (props) => {
//   console.log(props)
// {name: "Lidia", role: "TA", batch: "Fall20", favouriteColor: "green"}
//   return (
//     <>
//       <h2>Welcome {props.name}</h2>
//       <h3>Your batch is: {props.batch}</h3>
//       <h3>You are are: {props.role}</h3>
//     </>
//   )
// }

// const obj = {name: "Lidia", lastName: "Kovac"}
// const {name} = obj //Lidia

// const Welcome = (props) => {
//   const {name, batch, role} = props
const Welcome = ({name, batch, role, favouriteColor}) => {
  return (
    <> {/* Empty React Frangment */}
      <h2 style={{color: favouriteColor}}>Welcome {name}</h2>
      <h3 style={{color: favouriteColor}}>Your batch is: {batch}</h3>
      <h3 style={{color: favouriteColor}}>You are are: {role}</h3>
    </>
  )
}



export default Welcome

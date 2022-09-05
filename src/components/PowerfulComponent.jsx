import { Component } from "react"

// Class???
// class Cat {
// constructor() {}
//     // ........

//     // color, size, amountOfHair
// }

// class Cat {
//     constructor(color, size, amountOfHair) {
//         this.color = color
//         this.size = size
//         this.amountOfHair = amountOfHair
//     }
//     meow() {
//         console.log("meow")
//     }
// }

// const myCat = new Cat("orange", "medium", "way too much")
// console.log(myCat)
// myCat.meow()

// new Cat(color, size, amountOfHair) => {color, size, amountOfHair}

class PowerfulComponent extends Component {
    render() {
    console.log(this)
    return <h1 style={{color: this.props.favouriteColor}}>Hello {this.props.userName}</h1>
  }
}

export default PowerfulComponent

//'this' => {..... scope .....}

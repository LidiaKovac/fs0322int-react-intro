import { Component } from "react"

class MoreComplicatedComponent extends Component {
  // represent a user
  // if the user has a role === "student" => show the batch
  // if not, don't show the batch
  render() {
    console.log(this.props.user)
    return (
      <>
        <h3>{this.props.user.name}, {this.props.user.role}</h3>
        {(this.props.user.role === "student") && <h4>{this.props.user.batch}</h4>}
      </>
    )
  }
}

export default MoreComplicatedComponent

/*

From https://scrimba.com/scrim/c893vh2

Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

import React from "react"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  
  handleClick = () => {
    //this part was hard and I didn't know what to do.
    this.setState(prevState => {
      return{
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    //it's good to use the ternary operator. Don't forget about plugging variables in to represent data
    let btnTxt = this.state.isLoggedIn ? "Log out" : "Log in"
    let loginTxt = this.state.isLoggedIn ? "You are currently logged in" : "You are currently logged out"
    
    return(
      <div>
        <button onClick={this.handleClick}>{btnTxt}</button>
    <h1>{loginTxt}</h1>
      </div>      
    )
  }

}

export default App

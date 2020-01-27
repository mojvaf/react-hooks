import React, { Component } from 'react'

export class counterClass extends Component {
  constructor(props){
   super(props)
   this.state ={
     counter :0
   }
  }
  render() {
    return (
      <div>
        <h2>Class Counter</h2>
        <p>Your counter is {this.state.counter}</p>
        <button  onClick={()=> this.setState(
          //{ counter: this.state.counter + 1}
          prevState => ({ counter: prevState.counter + 1})
          )}>Increment</button>
      </div>
    )
  }
}

export default counterClass

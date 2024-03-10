import { Component } from "react"

export default class FourthComponent extends Component{
    render(){
      return (
        <div className='FourthComponent'>Fourth Component </div>
      )
    }
  
  }

  // This is not a default export since in one file/module there can be only one default export
export function FifthComponent(){
  return(
    <div className='FifthComponent'>Fifth Component </div>
  )
}
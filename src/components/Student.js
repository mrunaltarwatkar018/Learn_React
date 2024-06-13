import Comp from "./Comp"
import propTypes from 'prop-types'


// props concept 

// accessing method 1

// const Student = ({name, age}) => {
//     return (
//       <div>
//           <h1> {name} </h1>
//           <h1> {age} </h1>
//       </div>
//     )
// }



// accessing method 2

const Student = (props) => {
  return (
    <div>
        <h1> {props.name} </h1>
        <h1> {props.age} </h1>
        <Comp name={props.name}/>
    </div>
  )
}

// props Types

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number
}

// default propTypes
Student.defaultProps = {
    name: "Name",
    age: 0
}

export default Student

import React from 'react'

const Conditionalstatements = () => {


    // if-else condition    '
    // let login = false;
    // let login = true;

    // if (login == false) {
    //   return <h1> Don't show anything </h1>
    // } else {
    //   return <h1>Showing Movie</h1>
    // }

  // ternary operation
  let login = true;

  return (
    
    <div className='div'>

        {/* if-else */}

        {
            (() => {
                if (login) {
                    return <h1>Showing Movie</h1>
                } else {
                    return <h1>Don't show anything</h1>
                }
            })()
        }

        {/* // ternary operation */}

        {/* {
            login == false ? <h1 style={{color: 'cyan'}}>Don't show anything</h1> : <h1>Showing Movie</h1>
        } */}

    </div>
  )
}

export default Conditionalstatements

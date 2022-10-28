import React, { useState } from 'react';

//class way of writing components 
//class way of handling state
// class Item extends React.Component {

//     constructor(props){
//         super(props);

//         this.state = {
//             clicks: 0
//         }
//     }

//     clickMe() {
//         this.setState({
//             clicks: this.state.clicks + 1
//         })
//     }

//     render() {
//       return (
//         <div>        
//             <h1 onClick={() => this.clickMe()}>
//                 Hello {this.props.name}
//             </h1>
//             <span>{this.state.clicks} is the number of clicks</span>
//         </div>
//       );
//     }
//   }

//functional way of writing components - use arrow functions for the methods
//function way of handling state using useState hook
//setting up an object with state and update both values in that object
function Item(props) {

    const [clicks, setClicks] = useState({
        numClicks: 0,
        remainingClicks: 100
    });

    const clickMe = () => {
        setClicks(previousState => ({
            numClicks: previousState.numClicks + 1, 
            remainingClicks: previousState.remainingClicks - 1
        })
        );
    };

    return (
        <div>
            <h1 onClick={clickMe}>
                Hello {props.name}
            </h1>
            <span>{clicks.numClicks}, {clicks.remainingClicks}</span>
        </div>
    );
}

export default Item;
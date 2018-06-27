import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
  render(){

    // 2 - Reducer = state and action
    const reducer = function(state,action){
      if(action.type === "ATTACK" || action.type === "SuperAttack"){
        return action.payload;
      }
    }

    // 1 - Store = reducer and state
    const store = createStore(reducer,"Peace");


    // 3 - Subscribe
    store.subscribe(()=>{
      console.log("Store is now",store.getState());
    })

    // 4 - Dispatch action
    store.dispatch({type: "ATTACK", payload: "Super man"});
    store.dispatch({type: "SuperAttack", payload: "Thor"});


    return (<div>
        test
    </div>);
  }
}

export default ReduxDemo;

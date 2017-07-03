import {Component} from 'react';

export default function stateful({initialState,displayName},statelessRenderFn){
  // TODO: context

  let comp = class extends Component {
    constructor(props){
      super(props);
      this.state = initialState;
    }

    render(){
      return statelessRenderFn({
        props: this.props,
        state: this.state,
        setState: this.setState.bind(this)
      });
    }
  };

  comp.displayName = displayName;
  return comp;
}

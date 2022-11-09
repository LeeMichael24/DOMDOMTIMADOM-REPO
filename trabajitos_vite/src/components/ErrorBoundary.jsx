import {Component} from 'react';

class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        try {
            alert('Somethin went wrong hijupucta')   
        } catch (error) {
            this.setState({ error });
        }
    }

    render () {
       if (this.state.error) {
        return <h1>Caught an error.</h1>
       } 
       return <h1> Algo estas haciendo mal, revisa la consola DOM DOM Timadom</h1>
    }
     
}

export default MyComponent;
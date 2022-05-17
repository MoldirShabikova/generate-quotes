import logo from './logo.svg';
import './App.css';

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      index: 0,
      isLoading: false
     
    };
  }
  
  componentDidMount() {

     fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setTimeout(() =>{
        this.setState({ quotes: data, isLoading: true})
      },1000)
      )
      .catch((error) =>console.log('error'))
}

handleNext = () =>{
  const {index, quotes} = this.state
  if( index < quotes.length - 1){
    this.setState({index: index + 1})
  }
  
}
handlePrev = () =>{
  const {index} = this.state
  if(index > 0){
     this.setState({index: index - 1})
  }
 
}



        render() {
          console.log(this.state.quotes);
          const { quotes, index, isLoading} = this.state;
      const content =  isLoading ? (
      <>
      <p>{quotes[index].text}</p>
      <p>{quotes[index].author? quotes[index].author : 'No Author'}</p>
      <button onClick={this.handlePrev}>Prev</button>
      <button onClick={this.handleNext}>Next</button>
      <p>{index + 1}/ {quotes.length}</p>
      </>
      ) : (
      <i className='fa fa-spinner fa-spin' style={{fontSize : '48px'}}></i> )


    return (

      <div className="App">
    {content}
        <h1>{quotes.text}</h1>
        <h2>{quotes.author}</h2>
      </div>
    );
  }
}
export default App;


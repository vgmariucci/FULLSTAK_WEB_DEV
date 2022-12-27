import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';

// class FilmItemRow extends React.Component {
//   render(){
//     return(
//       <li>
//         <a href={this.props.url}> {this.props.url}</a>
//       </li>
//     )
//   }
// }



class StarWars extends React.Component {
  constructor(){
    super()
      this.state = {
        loadedCharacter: false,
        name: null,
        height: null,
        mass: null,
        homeworld: null,
        image: null,
        // films: [],
      }
  }
  getNewCharacter(){
    const randomNumber = Math.round(Math.random() * 88)
    console.log(randomNumber);
    console.log(`Get new character from a button`);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          mass: data.mass,
          homeworld: data.homeworld,
          image: data.image,
          // films: data.films,
          loadedCharacter: true,
        })
      })
  }

  render(){

    // const movies = this.state.films.map((film, i)=>{
    //   return <FilmItemRow key = {i} url = {film}/>
    // })
      

    return(
      <div>
         <button type="button" 
        onClick={()=>this.getNewCharacter()} 
        className='btn'>
          Randomize Character
        </button>
        {
          this.state.loadedCharacter && 
            <div>
              <h1>{this.state.name}</h1>
              <p>{this.state.height} cm</p>
              <p>{this.state.mass} kg</p>
              <p>{this.state.homeworld}</p>
              <ul>
               {/* {movies} */}
              </ul>
              <div className='centered_box'>
                <img className='image' src={this.state.image} alt={this.props.image} />
              </div>
            </div>
        }
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <StarWars/>
      </header>
    </div>
  );
}

export default App;

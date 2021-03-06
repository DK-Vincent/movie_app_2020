import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading:false})
  }
  
  componentDidMount(){
    // 영화 데이터가 로딩!
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;

    return <section className ="container">
     {isLoading? (
      <div className = "loader">
        <span className ="loader__text">Loading...</span>
      </div>
     ):(
     <div className = "movies"> 
      {movies.map(movie =>(
          <Movie 
            key={movie.id}  
            id = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
            genres = {movie.genres}
          />
      ))}
      </div>
     )}
     </section>
  }
}


export default Home;



/*
import React from 'react';
// App은 React.Component 속성을 상속 받음
class App extends React.Component {
  //Class 일 뿐이라서 함수형태로 만들어주기 위해서 render() 함수를 사용 (JSX를 반환)
  //함수형 Component : return 문이 JSX 반환 vs 클래스형 Component : render 함수가 JSX 반환
  constructor(props){
    super(props);
    console.log('hello');
  }
  state = {
    count : 0,
  };

  add = () => {
    this.setState(current => ({
      count : current.count +1,
    }));
  };

  minus = () =>{
    this.setState(current => ({
      count : current.count -1,
    }));
  };
  conmponentDidMount(){
    console.log('compent rendered');
  }
  componentDidUpdate(){
    console.log('I just updated');
  }
  componentWillUnmount(){
    console.log('GoodBye');
  }   
  render(){
    console.log('rendering');
    return(
        <div>
          <h1> The number is : {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      ); 
    }
}

export default App;
*/










/*
import React from 'react';
function Food({ name, picture }){
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>    
  )
}

const foodILike = [
  {
    name : 'Hand Made Burger',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Burger King',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Shack Shack',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Macdonalds',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
  {
    name : 'Lotteria',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.q8rSvHfjv9kNfP7PojeDhgHaGM%26pid%3DApi%26h%3D160&f=1',
  },
];

function App() {
  return (
  <div>
    {foodILike.map(dish => 
      (<Food name = {dish.name} picture = {dish.image} />
      
      ))}
    
  </div>
  );
}

export default App;
*/
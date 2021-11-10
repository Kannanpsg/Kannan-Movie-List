import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const movies = [

{
name:"Bahubali",
pic:"https://im.rediff.com/movies/2015/jul/10bahubali.jpg?w=670&h=900",
rating:"10",
summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
},

{
  name:"Jumanji",
  pic:"https://imgix.ranker.com/user_node_img/4269/85370637/original/jumanji-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=375",
  rating:"10",
  summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
},

{
  name:"2.0",
  pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAsvf8WbN40afuW6qdgZR6-w-ISUNGlY8mg&usqp=CAU",
  rating:"10",
  summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
  },
{
  name:"DYBBUK", 
  rating:"8", 
  summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
  pic:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Dybbuk_film.jpg/220px-Dybbuk_film.jpg",
},

  {
    name:"Avatar",
    pic:"https://hub4trendies.com/wp-content/uploads/2019/07/avatar-2009-min.jpg",
    rating:"10",
    summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
    },

    {
      name:"Free Guy",
      pic:"https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      rating:"10",
      summary:"In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy",
      },

]


export default function App() {
  return (
    <div className="App">

<nav>
<Link to="/Home">Home</Link>
<Link to="/">Movie</Link>
<Link to="/">Add movies</Link>
</nav>

<Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route path="/Home">

          {/* Match url display the below component */}
          <Home />
        </Route>
        <Route path="/Movie">
          <movie-list />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>


<section className="movie-list">
{movies.map((mv)=> (
  <Movie 
      name={mv.name} 
      rating={mv.rating}
      summary={mv.summary}
      pic={mv.pic}
      />
))}
</section>
      
      </div>
  );
  }

function Movie({name, rating, summary, pic})
 {
  return (
    <div classname="movie-container">
      <img
        src={pic}
        alt={name}
        className="movie-pictures"
      />

      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">IMDB Rating ⭐{rating}</p>
      <p className="movie-summary">{summary}</p>
      <Counter/>     
      </div>
    </div>
  );
}

function Counter()
{
  const [counter, setCounter] = useState({
    like: 1,
    dislike: 0
  });
  const [active, setActive] = useState({
    like: false,
    dislike: false
  });

  const likeClicked = () => {
    if (active.like === false && active.dislike === false) {
      setCounter({ ...counter, like: counter.like + 1 });
    }

    if (active.like === false && active.dislike === true) {
      setCounter({ like: counter.like + 1, dislike: counter.dislike - 1 });
    }

    if (active.like === true && active.dislike === false) {
      setCounter({ ...counter, like: counter.like - 1 });
    }
    setActive({ like: !active.like, dislike: false });
  };

  const dislikeClicked = () => {
    if (active.like === false && active.dislike === false) {
      setCounter({ ...counter, dislike: counter.dislike + 1 });
    }

    if (active.like === true && active.dislike === false) {
      setCounter({ like: counter.like - 1, dislike: counter.dislike + 1 });
    }

    if (active.like === false && active.dislike === true) {
      setCounter({ ...counter, dislike: counter.dislike - 1 });
    }

    setActive({ like: false, dislike: !active.dislike });
  };

  return (
    <div className="App">
      <button onClick={likeClicked} className={`${active.like && "button"}`}>
        like | {counter.like}
      </button>
      <button
        onClick={dislikeClicked}
        className={`${active.dislike && "button"}`}
      >
        dislike | {counter.dislike}
      </button>
    </div>


  );
}

function Home() {
  return (
    <div className = "Text-center">
      <h2>Welcome to My Movies Page</h2>
      <h1><TextField id="standard-basic" label="Search movies" variant="standard" /></h1>
    </div>
  );
}




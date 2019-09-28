import React, { Component } from "react";
import Tree from "./components/Tree";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import trees from "./trees.json";
import "./App.css";

class App extends Component {
 
  state = {
    trees : trees,
    score: 0,
    highscore: 0
  }
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.trees.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over. Try Again to Beat your HighScore :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.trees.find((o, i) => {
      if (o.id === id) {
        if(trees[i].count === 0){
          trees[i].count = trees[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.trees.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
      return false
    });
  }

  
  render() {
    return (
      <Wrapper>
     <Header score={this.state.score} highscore={this.state.highscore} title={"Trees Memory Game"} message={this.state.message} />
        <div className="container">
          {this.state.trees.map((tree) => (
            <Tree
              clickCount={this.clickCount}
              id={tree.id}
              key={tree.id}
              image={tree.image}
              name={tree.name}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;


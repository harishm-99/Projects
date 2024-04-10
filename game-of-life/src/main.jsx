import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

class Grid extends React.Component{
  render() {
    const width = this.props.cols * 14;
    var rowsArr = []

    var boxClass = "";
    for (var i = 0; i < this.props.rows; i++){
      for (var j; j < this.props.cols; j++){
        let boxId = i + " " + j;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row= 
        )
      }
    }

    return (
      <div className='grid' style={{width: width}}>
        {{rowsArr}}
        Grid
      </div>
    )
  }
}

class Main extends React.Component{

  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(()=> Array(this.cols).fill(false))
    }
  }
  
  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
        />
        <h2>Generation: {this.state.generation }</h2>
      </div>
    )
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)

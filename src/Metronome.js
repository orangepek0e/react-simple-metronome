import React, { Component } from 'react';
import './Metronome.css';
import * as click1 from './assets/click1.wav';
import * as click2 from './assets/click2.wav';

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  handleBpmChange = e => {
    this.setState({bpm: e.target.value});
  }

  handlePlayStateChange = () => {
    const currentPlayState = !this.state.playing;
    this.setState({ playing: currentPlayState });

    if (currentPlayState) {
      this.startLoop();
    } else {
      this.stopLoop();
    }
  }

  startLoop = () => {
    var self = this;
    var isFirstTick = true;
    this.clock = setInterval(function() {
      if (isFirstTick) {
        self.click1.play();
      } else {
        self.click2.play();
      }
      isFirstTick = !isFirstTick;
    }, (60000 / this.state.bpm));
  }

  stopLoop = () => {
    window.clearInterval(this.clock);
  }

  render() {
    const { playing, bpm } = this.state;

    return (
      <div className="metronome">
        <div className="bpm-slider">
          <div>{bpm} BPM</div>
          <input type="range" min="60" max="240" onChange={this.handleBpmChange} value={bpm} />
        </div>
        <button onClick={this.handlePlayStateChange}>{playing? 'Stop' : 'Start'}</button>
      </div>
    )
  }
}

export default Metronome;
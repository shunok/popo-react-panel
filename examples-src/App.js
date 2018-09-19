import React from 'react';
import Panel from '../src/Panel'; 
import * as P from 'popojs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Panel target="1" title="Panel Test">
          <div slot="center">123</div>
      </Panel>
    );
  }
  componentDidMount() {
    P.init({
      container: 'app',
      gutter: 20,
      layout: {
          rows: 3,
          cols: 8
      },
      panel: {
          enable: true,
          custom: [
              {panels: [1], headHeight: 30}
          ]
      },
      dev: {
          enable: true,
          panel: {
              show: false,
          }
      },
      style: {
          custom:[
              {panels:[1], panel: {classname:'popo-panel', css: {border: '5px solid red'}}}
          ]
      }
    });
  }
};

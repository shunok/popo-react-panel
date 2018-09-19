# popo-react-panel
> React panel for popojs

## Installation

### NPM

```bash
npm install popo-react-panel --save
```

## Usage

### ES6

*The following examples can also be used with CommonJS by replacing ES6-specific syntax with CommonJS equivalents.*

```js
import React from 'react';
import Panel from 'popo-react-panel'

...
render() {
    return (
      <div id="app">
        <Panel target="1">
           <div slot="center">example</div>
        </Panel>
      </div>
    );
  }
...
```

## Options

| Props          | Type             | Values                                 | Default          |
| -------------- |:-----------------|:---------------------------------------|:-----------------|
| target         | Number  | String | panel id or panel map key              | 1                |
| title          | String           | panel title                            | null             |

## Slot Options

| Props          | Type             | Values                                 | Default          |
| -------------- |:-----------------|:---------------------------------------|:-----------------|
| slot           | String           | head, center, left, right, foot        | center           |

## License
popo-vue-panel is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [DaShun](https://github.com/shunok).
import React from 'react';

class MyPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const propKeys = Object.keys(this.props || {});
    const stateKeys = Object.keys(this.state || {});

    const hasPropChanged = propKeys.every(
      (key) => this.props[key] === nextProps[key]
    );
    const hasStateChanged = stateKeys.every(
      (key) => this.state[key] === nextState[key]
    );

    return !hasPropChanged || !hasStateChanged;
  }
}

export default MyPureComponent;

import React from 'react';

export const myMemo = (Component) => {
  return class NewComponent extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
    shouldComponentUpdate(nextProps) {
      const propKeys = Object.keys(this.props || {});

      const hasPropChanged = propKeys.every(
        (key) => this.props[key] === nextProps[key]
      );

      return !hasPropChanged;
    }
  };
};

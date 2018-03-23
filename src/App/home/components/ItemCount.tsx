import React, { Component } from 'react';

export interface ItemCountProps {
  name: string,
  count: number
}

export class ItemCount extends Component<ItemCountProps, any> {
  render() {
    const { name, count } = this.props;
    return (
      <div className="p-2">
        <div className="row">
          <div className="col-10">
            <h6>{name} Count</h6>
          </div>
          <div className="col-2">
            <span>{count}</span>
          </div>
        </div>
      </div>
    );
  }
}

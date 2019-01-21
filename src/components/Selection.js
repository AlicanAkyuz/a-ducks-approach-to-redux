import React from 'react';
import './Selection.scss';

export default function Selection(props) {
  return (
    <div className="selection_holder">
      <h3>Please Select OP: </h3>
      <select onChange={(event) => {props.onOsSelection(event.target.value)}}>
        <option value="all ops">All Operating Systems</option>
        <option value="IOS">IOS Only</option>
        <option value="ANDROID">Android Only</option>
      </select>
    </div>
  )
}

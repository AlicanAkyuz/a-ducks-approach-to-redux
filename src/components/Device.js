import React from 'react';
import './Device.scss';

export default function Device(props) {
  return (
    <div className="data_holder">
      <div key={props.index} className="data">
        <div>
          <img src={`https://d3ty40hendov17.cloudfront.net/device-pictures/${props.descriptorId}.png`}
               alt="device" className="img" />
        </div>
        <div className="data_text">
          <div>
            <p className="titles">Name:&nbsp;</p>
            <p className="data">{props.name}</p>
          </div>
          <div>
            <p className="titles">Model Number:&nbsp;</p>
            <p className="data">{props.modelNumber}</p>
          </div>
          <div>
            <p className="titles">Operating System:&nbsp;</p>
            <p className="data">{props.os}</p>
          </div>
          <div>
            <p className="titles">Device Status:&nbsp;</p>
            <p className="status">{props.status}</p>
            <p className="nonStatus">{props.nonStatus}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

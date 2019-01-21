import React from 'react';
import { connect } from 'react-redux';
import { onOsSelection, getDevices, getAvailability } from '../ducks/devices/actions';
import Device from '../components/Device';
import Selection from '../components/Selection';
import Info from '../components/Info';

class OverviewContainer extends React.Component {
  componentWillMount() {
    this.props.getDevices();
    this.props.getAvailability();
    setInterval(this.props.getAvailability, 5000);
  }

  render() {
    if (this.props.loading) {
      return <Info text="Fetching Data..." />
    } else if (this.props.error) {
      return <Info text="Sorry, there has been a server problem!" />
    } else {
      return (
        <div>
          <Selection onOsSelection={this.props.onOsSelection} />
            {this.props.all_devices.filter(element =>
              element.os === this.props.operating_system || this.props.operating_system === "all ops")
              .map((device) => {
                if (this.props.available_devices.includes(device.descriptorId)) {
                  device.status = "Available"
                } else {
                  device.nonStatus = "Currently Not Available"
                }
                return device
              })
              .map((element, index) =>
                <Device
                  index={index}
                  descriptorId={element.descriptorId}
                  name={element.name}
                  modelNumber={element.modelNumber}
                  os={element.os}
                  status={element.status}
                  nonStatus={element.nonStatus} />
            )}
        </div>
      )
    }
  }
}

OverviewContainer.propTypes = {};

const mapStateToProps = state => {
  return {
    all_devices: state.devices.all_devices,
    available_devices: state.devices.available_devices,
    operating_system: state.devices.operating_system,
    loading: state.devices.loading,
    error: state.devices.error
  }
};

export default connect(
  mapStateToProps,
  {onOsSelection, getDevices, getAvailability}
)(OverviewContainer)

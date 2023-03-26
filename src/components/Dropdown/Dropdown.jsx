import { Component } from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  onTogle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="Dropdown">
        <button type="button" className="DropdownTogle" onClick={this.onTogle}>
          {this.state.visible ? 'Hide' : 'Show'}
        </button>
        {this.state.visible && (
          <div className="DropdownMenu">Dropdown Menu</div>
        )}
      </div>
    );
  }
}

export default Dropdown;

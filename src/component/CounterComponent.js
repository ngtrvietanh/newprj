import {Text, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {increse} from '../redux/todo';
import {decrese} from '../redux/todo';
import {connect} from 'react-redux';
class CounterComponent extends Component {
  // const [counter, setCounter] = useState(0);

  render() {
    console.log('====>>>>inra');
    const {count, increse, decrese} = this.props;
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 100}}>{count}</Text>
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => {
            increse(count + 1);
          }}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: 'green'}}
          onPress={() => {
            decrese(count - 1);
          }}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.todo.count,
  };
}
const mapActionsToProps = {
  increse,
  decrese,
};

export default connect(mapStateToProps, mapActionsToProps)(CounterComponent);

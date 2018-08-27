import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {
  // for storing initial local data/state
  // fires before our component is mounted and rendered
  constructor(props) {
    super(props); // super() is required in derived classes in order to reference this within the constructor
    this.state = {
      text: '',
    };
  }
  // allow us to update our state every time the input field is changed
  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    // destructure the state
    const { placeholder } = this.props;
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={text}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
SearchInput.defaultProps = {
  placeholder: '',
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});

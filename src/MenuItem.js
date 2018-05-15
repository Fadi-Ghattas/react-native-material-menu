import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import WidthContext from './WidthContext';

function MenuItem({
  children,
  disabled,
  disabledTextColor,
  onPress,
  style,
  viewStyle,
  underlayColor,
}) {
  return (
    <WidthContext.Consumer>
      {width => (
        <TouchableHighlight
          disabled={disabled}
          onPress={onPress}
          style={[styles.container, style, { width }]}
          underlayColor={underlayColor}
        >
          <View
            // numberOfLines={1}
            style={[
              styles.title,
              disabled && { color: disabledTextColor },
              viewStyle,
            ]}
          >
            {children}
          </View>
        </TouchableHighlight>
      )}
    </WidthContext.Consumer>
  );
}

MenuItem.propTypes = {
  children: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  disabledTextColor: PropTypes.string,
  onPress: PropTypes.func,
  style: TouchableHighlight.propTypes.style,
  viewStyle: Text.propTypes.style,
  underlayColor: TouchableHighlight.propTypes.underlayColor,
};

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#BDBDBD',
  underlayColor: '#E0E0E0',
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16,
  },
});

export default MenuItem;

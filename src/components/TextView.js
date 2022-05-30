/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

export default function Textview({
  numberOfLines,
  text,
  textCase,
  fontSize,
  color,
  children,
  textAlign,
}) {
  return (
    <Text
      numberOfLines={numberOfLines || 1}
      style={{
        color: color || '#333',
        fontFamily: 'Roboto-Medium',
        fontSize: fontSize || 14,
        textTransform: textCase || 'lowercase',
        textAlign: textAlign || 'center',
      }}>
      {children}
    </Text>
  );
}

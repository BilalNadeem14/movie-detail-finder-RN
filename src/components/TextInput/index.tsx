import React from 'react';
import {View, TextInput, TextInputProps, Text} from 'react-native';
import {themeColors} from '@utils/theme';
import useStyles from './styles';
import {SvgProps} from 'react-native-svg';

interface TextInputComponentProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
  style?: object;
  inputContainer?: object;
  multiline?: boolean;
  required?: boolean;
  error?: string;
  labelStyle?: object;
  LeftIcon?: React.FC<SvgProps>;
  searchText?: string;
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  isPassword,
  style,
  multiline,
  inputContainer,
  required,
  error,
  labelStyle,
  LeftIcon,
  searchText,
  ...props
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={[labelStyle, styles.labelText]}>
          {label}
          {required && <Text style={styles.requiredText}>*</Text>}
        </Text>
      )}
      <View style={[styles.inputContainter, inputContainer]}>
        {LeftIcon && <LeftIcon style={{marginLeft: 12}} />}
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={[styles.inputStyle]}
          selectionColor={themeColors.black}
          caretHidden={false}
          multiline={false}
          placeholderTextColor={themeColors.gray}
          {...props}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default TextInputComponent;

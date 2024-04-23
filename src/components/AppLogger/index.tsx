import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import NetworkLogger from 'react-native-network-logger';
import {wp} from '@utils/units';
import {themeColors as Colors} from '@utils/theme';
export const AppLogs = () => {
  const [showLoggs, setShowLogs] = React.useState(false);
  const onPressLoggsBtn = () => {
    setShowLogs(!showLoggs);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => onPressLoggsBtn()}
        style={styles.logButton}>
        <Text style={styles.text}>Logs</Text>
      </TouchableOpacity>
      <Modal
        style={styles.modal}
        backdropColor="#000"
        backdropOpacity={0.7}
        animationIn={'zoomInDown'} // slideInUp
        animationOut={'zoomOutUp'} //slideOutDown
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
        onBackdropPress={onPressLoggsBtn}
        onBackButtonPress={onPressLoggsBtn}
        isVisible={showLoggs}>
        <SafeAreaView style={styles.flex1}>
          <NetworkLogger theme={'dark'} />
          <TouchableOpacity onPress={onPressLoggsBtn} style={styles.exitButton}>
            <Text style={styles.exitText}>Exit Logs</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default AppLogs;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  logButton: {
    position: 'absolute',
    opacity: 0.5,
    right: wp(40),
    bottom: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(100),
    backgroundColor: Colors.blackShade,
  },
  text: {
    fontSize: wp(4),
    padding: wp(2),
    paddingHorizontal: wp(4),
    fontWeight: '700',
    color: Colors.white,
  },
  exitText: {
    fontSize: wp(4),
    padding: wp(3),
    paddingHorizontal: wp(10),
    fontWeight: '700',
    color: Colors.white,
  },
  modal: {height: wp(100)},
  exitButton: {
    marginTop: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(100),
    backgroundColor: Colors.blackShade,
  },
});

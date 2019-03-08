import {
  View, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import { passwordNoOfCharacters } from '../../../assets/data/constants';
import EnhancedView from '../../../commons/components/EnhancedView';
import Guide from '../../../commons/components/UI/Guide';
import Header from '../../../commons/components/UI/Header';
import PrimaryButton from '../../../commons/components/UI/PrimaryButton/PrimaryButton';
import PrimaryTextInput from '../../../commons/components/UI/PrimaryTextInput/PrimaryTextInput';
import styles from './styles';

class LoginScreen extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  onPressRegister=() => {
    const { navigation } = this.props;

    navigation.navigate('Register');
  }

  render() {
    return (
      <EnhancedView style={styles.container} backgroundImageBlueRadius={1} backgroundImageUrl="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80">
        <View>
          <Image
            style={{ width: 300, height: 120 }}
            source={{ uri: 'http://www.watersystems.co.th/wp-content/uploads/2015/05/logo-betagen-c.gif' }}
          />
          <Header>Sales System</Header>
        </View>
        <View>
          <PrimaryTextInput
            placeholder="First Name"
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
          />
          <PrimaryTextInput
            placeholder="Surname"
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
          />
          <PrimaryTextInput
            placeholder="Password"
            password
            color={colors.primaryLight}
            noAutoCapitalize
            backgroundColor={colors.primary.fade(0.2)}
            hasBackgroundOnFocus
            colorOnFocus={colors.trueWhite}
            keyboardType="numeric"
            maxCharacters={passwordNoOfCharacters}
          />
          <PrimaryButton backgroundColor={colors.primaryLight}>Login</PrimaryButton>
        </View>
        <Guide style={styles.registerGuide} text="Still have no account? Register here" color={colors.primary} onPress={this.onPressRegister} />
      </EnhancedView>
    );
  }
}

LoginScreen.defaultProps = {
  navigation: {},
};

LoginScreen.propTypes = {
  navigation: PropTypes.shape({}),
};


export default LoginScreen;

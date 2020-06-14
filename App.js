import React, { PureComponent } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import AppNavigator from './nav-stack';

export default class App extends PureComponent {
  state = {
    isLoadingComplete: false,
  };

  loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./assets/images/icon.png'),
        require('./assets/images/overlay.png'),
        require('./assets/images/boyfriend.png'),
        require('./assets/images/lady.png'),
        require('./assets/images/boy2.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/hart.png'),
        require('./assets/images/boy3.png'),
      ]),
      Font.loadAsync({
        orbitron: require('./assets/fonts/Orbitron-VariableFont-wght.ttf'),
      }),
    ]);

  handleLoadingError = error => {
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }

    return <AppNavigator />;
  }
}

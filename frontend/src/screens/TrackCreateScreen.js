import React, {
  useCallback,
  useContext,
} from 'react';

import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {
  SafeAreaView,
  withNavigationFocus,
} from 'react-navigation';

import { FontAwesome } from '@expo/vector-icons';

import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3 style={styles.textTitle}>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({
  textTitle:{
    textAlign:'center'

  }
});

export default withNavigationFocus(TrackCreateScreen);

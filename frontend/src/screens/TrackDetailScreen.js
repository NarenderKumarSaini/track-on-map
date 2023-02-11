import React, { useContext } from 'react';

import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { color } from 'react-native-reanimated';

import { Context as TrackContext } from '../context/TrackContext';
const deviceHeight = Dimensions.get('window').height;

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={styles.textTitle}>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
        style={styles.map}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          strokeColor={'green'}
          strokeWidth={5}
          lineDashPattern={[1]}
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: deviceHeight - 230,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 40,
    color: 'green',
  },
});

export default TrackDetailScreen;

import React, { useContext } from 'react';

import { Button, Input } from 'react-native-elements';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import Spacer from './Spacer';
import { Foundation } from '@expo/vector-icons';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder='Enter name'
        />
      </Spacer>
      <Spacer>
        <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={startRecording}
              disabled={recording || locations.length}
            >
              <Foundation
                name='record'
                size={50}
                style={{
                  color: recording || locations.length ? '#000' : 'red',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={stopRecording}
              disabled={!recording && !locations.length}
            >
              <Foundation
                name='stop'
                size={50}
                style={{
                  color: !recording && !locations.length ? '#000' : 'red',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title='Save Recording' onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 10,
  },
});
export default TrackForm;

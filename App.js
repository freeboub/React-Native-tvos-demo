import React, {useRef} from 'react';
import {View, TextInput, LogBox} from 'react-native';

const TVEventHandlerView = () => {
  const [show, setShow] = React.useState(true);

  const firstRef = useRef();

  return (
    <>
      {show && (
        <>
          <TextInput
            ref={firstRef}
            defaultValue={'hello'}
            showSoftInputOnFocus={true}
            autoFocus={true}
            editable={true}
            onChangeText={() => {
              console.log('onTextChange');
            }}
            onSubmitEditing={() => {
              console.log('onSubmitEditing');
              setShow(false);
            }}
            placeholder={'Search...'}
          />
        </>
      )}
    </>
  );
};

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <TVEventHandlerView />
    </View>
  );
}

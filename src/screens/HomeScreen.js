import * as React from 'react';
import {View, Button, Text} from 'react-native';

export default function HomeScreen({route, navigation}) {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
        />
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {route.params?.post ? (
        <Text>name: {JSON.stringify(route.params?.post)}</Text>
      ) : null}
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            id: 86,
            name: 'Red Jhon',
          })
        }
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
}

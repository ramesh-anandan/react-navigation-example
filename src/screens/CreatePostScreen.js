import * as React from 'react';
import {View, Button} from 'react-native';

export default function CreatePostScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: 'Jane'});
        }}
      />
    </View>
  );
}

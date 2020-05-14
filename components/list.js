import React from 'react';
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Item extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return (
      <TouchableOpacity onPress={() => {this.props.nav.navigate('Description', {data: this.props.title})}}>
      <View style={styles.item}>
        <Text style={styles.title}>{this.props.title.family_name}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}
  
  export default class List extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>&nbsp;</Text>
        <FlatList
          data={this.props.navigation.getParam('data')}
          renderItem={({ item }) => <Item title={item} nav={this.props.navigation}/>}
          keyExtractor={item => item.family_id.toString()}
          onEndReachedThreshold={0.5}
        />
      </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  
import React from 'react';
import { Text, Avatar, withStyles, List } from '@ui-kitten/components';
import { Image, View, TouchableOpacity } from 'react-native';
const DATA = [
  {
    id: 1,
    postTitle: 'Planet of Nature',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 2,
    postTitle: 'Lampost',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

const _Feed = ({ eva, navigation }) => {
  const renderItem = ({ item }) => (
    <View style={eva.style.card}>
      <Image source={{ uri: item.imageURI }} style={eva.style.cardImage} />
      <View style={eva.style.cardHeader}>
        <Text category="s1" style={eva.style.cardTitle}>
          {item.postTitle}
        </Text>
        <TouchableOpacity onPress={() => alert('Profile')}>
          <Avatar source={{ uri: item.avatarURI }} size="small" style={eva.style.cardAvatar} />
        </TouchableOpacity>
      </View>
      <View style={eva.style.cardContent}>
        <Text category="p2">{item.randomText}</Text>
      </View>
    </View>
  );

  return (
    <List style={eva.style.container} data={DATA} renderItem={renderItem} keyExtractor={DATA.id} />
  );
};

const Feed = withStyles(_Feed, (theme) => ({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    marginBottom: 25,
  },
  cardImage: {
    width: '100%',
    height: 300,
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: theme['color-basic-1000'],
  },
  cardAvatar: {
    marginRight: 16,
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: theme['color-basic-600'],
  },
}));

export default Feed;

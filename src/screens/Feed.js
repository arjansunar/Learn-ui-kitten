import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';

const Feed = () => {
  return (
    <Layout style={styles}>
      <Text>Feed</Text>
    </Layout>
  );
};

export default Feed;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

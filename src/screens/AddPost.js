import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';

const AddPost = () => {
  return (
    <Layout style={styles}>
      <Text>AddPost</Text>
    </Layout>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

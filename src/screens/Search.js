import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';

const Search = () => {
  return (
    <Layout style={styles.layout}>
      <Text>Search</Text>
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

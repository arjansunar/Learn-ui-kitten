import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';

const Activity = () => {
  return (
    <Layout style={styles.layout}>
      <Text>Activity</Text>
    </Layout>
  );
};

export default Activity;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

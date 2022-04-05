import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Layout } from '@ui-kitten/components';

const Profile = () => {
  return (
    <Layout style={styles}>
      <Text>Profile</Text>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

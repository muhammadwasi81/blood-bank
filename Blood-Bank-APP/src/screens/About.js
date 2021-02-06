import React from 'react';
import { Text, View, StyleSheet, Linking, ScrollView } from 'react-native';
import { SocialIcon, Icon } from 'react-native-elements';
import News from '../components/News';

class About extends React.Component {
  render() {
    const data = this.props.navigation.getParam('data', null);
    if (data) return <News data={data} />;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>আশ্রয় বিদ্যাপীঠ</Text>
        <Text style={styles.title2}>আমরা কারা? </Text>
        <Text style={styles.about}>
          আশ্রয় বিদ্যাপীঠ আশুগন্জ ভিত্তিক একটি অলাভজনক সংগঠন। বঞ্চিত শিশুদের
          শিক্ষাদানের উদ্দেশ্যে একটি স্কুল পরিচালনার পাশাপাশি আশ্রয় বিদ্যাপীঠ
          আশুগন্জ ও তার আশেপাশের এলাকায় বিভিন্ন সমাজসেবামূলক কার্যক্রম পরিচালনা
          করে থাকে। যার মধ্যে অন্যতম হল বিভিন্ন সময়ে ব্লাড ক্যাম্পেইনের মাধ্যমে
          জনসাধারণকে রক্তদানে উৎসাহিত করা, জরুরী রক্তের প্রয়োজনে সদস্যদের মধ্য
          থেকে বা অন্য কোন উপায়ে রক্তদাতা ম্যনেজ করে দেয়া।
        </Text>
        <Text style={styles.title2}>যোগাযোগ</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            onPress={() =>
              Linking.openURL('https://www.facebook.com/Asroy.biddapith/')
            }
            color="#4267b2"
            reverse
            name="facebook"
            type="material-community"
          />
          <Icon
            onPress={() => Linking.openURL('https://m.me/Asroy.biddapith/')}
            reverse
            color="#0084ff"
            name="facebook-messenger"
            type="material-community"
          />
          <Icon
            onPress={() => Linking.openURL('tel:01754599134')}
            reverse
            color="orange"
            name="phone"
            type="material-community"
          />
        </View>
        <Text
          style={[
            styles.about,
            { fontSize: 16, marginTop: 40, marginBottom: 0 }
          ]}>
          Application developed by sjsakib
          {'\n'}
          sjsakib.bd@gmail.com
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <SocialIcon
            onPress={() => Linking.openURL('https://github.com/sjsakib/')}
            type="github"
          />
          <SocialIcon
            onPress={() => Linking.openURL('https://medium.com/@sjsakib/')}
            type="medium"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    color: '#43484d',
    marginBottom: 10
  },
  title2: {
    fontSize: 18,
    color: '#43484d'
  },
  about: {
    margin: 20,
    marginTop: 0,
    textAlign: 'center',
    color: '#5e6977'
  }
});

export default About;

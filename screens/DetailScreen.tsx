import { FC } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ItemPropsType } from '../types';

const DetailScreen: FC = () => {
  const route = useRoute();

  const { item } = route.params as {
    item: ItemPropsType;
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.firstPreviewImage.watermarked }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title.replace(/<[^>]+>/g, '')}</Text>
        <Text style={styles.author}>{item.author.details.publicName}</Text>
        <Text style={styles.price}>{`${item.price} USD`}</Text>
        <Text style={styles.description}>
          {item.description.replace(/<[^>]+>/g, '')}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    padding: 10,
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    marginBottom: 10,
    color: '#696969',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#404040',
  },
});

export default DetailScreen;

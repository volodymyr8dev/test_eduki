import { useState, useEffect, FC } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { token } from '../App';
import { ItemPropsType } from '../types';
import { NavigatorProps } from '../types';

const SearchScreen: FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ItemPropsType[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const navigation = useNavigation<NavigatorProps>();

  const fetchResults = async (newPage = page) => {
    if (isLoading && isFetchingMore) return;
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.eduki.com/api/v1/elastic', {
        params: { limit: 10, p: newPage, q: query, world: 'de' },
        headers: {
          Authorization: token,
        },
      });
      if (newPage === 1) {
        setResults(response.data.data.items.materials);
      } else {
        setResults(prevResults => [
          ...prevResults,
          ...response.data.data.items.materials,
        ]);
      }
      setPage(newPage);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  const handleSearch = () => {
    setPage(1);
    fetchResults(1);
  };

  const handleEndReached = () => {
    if (!isFetchingMore) {
      setIsFetchingMore(true);
      fetchResults(page + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Page: {page}</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('Details', { item })}>
              <Image
                source={{ uri: item.firstPreviewImage.watermarked }}
                style={styles.image}
              />
              <Text style={styles.title}>
                {item.title.replace(/<[^>]+>/g, '')}
              </Text>
              <Text>{item.author.details.publicName}</Text>
              <Text>{`${item.price} USD`}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 30,
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    marginVertical: 16,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SearchScreen;

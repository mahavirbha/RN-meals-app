import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen(params) {
  return (
    <FlatList
      key={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderCategoryItem({ item })}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

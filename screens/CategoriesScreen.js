import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler(params) {
      navigation.navigate('MealsOverviewScreen', {
        categoryId: item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPressProp={pressHandler}
      />
    );
  }
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

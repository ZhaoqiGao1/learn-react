export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipes) => {
        return <div key={recipes.name}>
          <h1> {recipes.name}</h1>
          {
            <ul>
              {Array.from(recipes.ingredients).map((ingredient, index) => {
                return<li>}
              })
            </ul>
      })
      }

    </div>
  );
}
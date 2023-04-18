// import { Recipe } from './Recipe/Recipe';
// import { RecipeList } from './RecipeList/RecipeList';
import { PaymentWidget } from './PaymentWidget/PaymentWidget';
// import recipes from '../recepies.json';

export const App = () => {
  return (
    <div>
      {/* <RecipeList recipes={recipes} /> */}

      <PaymentWidget />

      {/* <Recipe recipe={recipes[0]} />
      <Recipe recipe={recipes[1]} /> */}
      {/* <Recipe name={recipes[0].name} time={recipes[0].time}/> */}
    </div>
  );
};

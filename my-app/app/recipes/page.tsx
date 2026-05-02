import RecipeList from "./components/RecipeList";

import recipes from "./data/recipes.json";

export default function RecipesPage() {

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Recipe Book
      </h1>

      <RecipeList recipes={recipes} />

    </main>
  );
}
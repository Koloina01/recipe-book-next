"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import Checkbox from "./Checkbox";
import RecipeCard from "./RecipeCard";

import { Recipe } from "../types/recipe";

type Props = {
  recipes: Recipe[];
};

export default function RecipeList({
  recipes,
}: Props) {

  const [search, setSearch] =
    useState("");

  const [
    selectedCategories,
    setSelectedCategories,
  ] = useState<string[]>([]);

  const categories = [
    ...new Set(
      recipes.map(
        (recipe) => recipe.category
      )
    ),
  ];

  const filteredRecipes =
    recipes.filter((recipe) => {

      const matchesSearch =
        recipe.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(
          recipe.category
        );

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Checkbox
        categories={categories}
        selectedCategories={
          selectedCategories
        }
        setSelectedCategories={
          setSelectedCategories
        }
      />

      <ul className="flex flex-wrap gap-6 justify-center">

        {filteredRecipes.map(
          (recipe) => (

            <li key={recipe.id}>

              <RecipeCard
                recipe={recipe}
              />

            </li>
          )
        )}
      </ul>
    </>
  );
}
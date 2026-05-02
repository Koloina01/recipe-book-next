"use client";

import { useState } from "react";

import styles from "./RecipeCard.module.css";

import { Recipe } from "../types/recipe";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({
  recipe,
}: Props) {

  const [pinned, setPinned] =
    useState(false);

  return (
    <article
      className={`${styles.card} ${
        pinned ? styles.pinned : ""
      }`}
    >

      <img
        src={recipe.image}
        alt={recipe.name}
        className={styles.image}
      />

      <div className={styles.body}>

        <h2 className={styles.name}>
          {recipe.name}
        </h2>

        <span className={styles.badge}>
          {recipe.category}
        </span>

        <p className={styles.duration}>
          {recipe.duration} min
        </p>

        <button
          className={styles.pin}
          onClick={() =>
            setPinned((p) => !p)
          }
        >
          {pinned ? "Unpin" : "Pin"}
        </button>

      </div>
    </article>
  );
}
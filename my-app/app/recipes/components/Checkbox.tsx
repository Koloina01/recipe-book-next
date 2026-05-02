"use client";

type Props = {
  categories: string[];

  selectedCategories: string[];

  setSelectedCategories:
    React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Checkbox({
  categories,
  selectedCategories,
  setSelectedCategories,
}: Props) {

  function handleChange(category: string) {

    if (
      selectedCategories.includes(category)
    ) {

      setSelectedCategories(
        selectedCategories.filter(
          (c) => c !== category
        )
      );

    } else {

      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);
    }
  }

  return (
    <div className="flex gap-4 justify-center mb-8 flex-wrap">

      {categories.map((category) => (

        <label
          key={category}
          className="flex gap-2"
        >

          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() =>
              handleChange(category)
            }
          />

          {category}

        </label>
      ))}
    </div>
  );
}
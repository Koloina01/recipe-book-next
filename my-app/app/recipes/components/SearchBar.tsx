"use client";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex justify-center mb-6">

      <input
        type="text"
        placeholder="🔍 Search recipe..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-80 px-4 py-2 rounded-xl border"
      />

    </div>
  );
}
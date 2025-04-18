interface Props {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
}

export default function CategoryList({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-3 mt-20 mb-12 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium border cursor-pointer shadow-sm transition-all duration-150 
            ${selected === cat
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
export default function Pagination({
  page,
  total,
  pageSize,
  onPageChange,
}: {
  page: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(total / pageSize);

  //if no data pagination it will not show
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-between gap-3 mb-20 items-center text-sm">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 text-black-300 hover:bg-primary-200 disabled:opacity-50 cursor-pointer"
      >
        Previous
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 rounded-full cursor-pointer font-medium transition-colors ${
              p === page
                ? "bg-blue-700 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 text-blue-500 hover: disabled:opacity-50 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

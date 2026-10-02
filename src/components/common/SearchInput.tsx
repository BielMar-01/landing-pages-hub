import { Search, X } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchInput({
  value,
  onChange,
  placeholder = 'Buscar...',
}: SearchInputProps) {
  return (
    <div className="search-input">
      <Search
        className="search-input__icon"
        size={20}
        aria-hidden="true"
      />

      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-label={placeholder}
      />

      {value && (
        <button
          type="button"
          className="search-input__clear"
          onClick={() => onChange('')}
          aria-label="Limpar busca"
        >
          <X size={18} />
        </button>
      )}
    </div>
  )
}
import { useState } from "react"
function useSearch() {
  const [searchText, setSearchText] = useState('')

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }

  function clearSearch() {
    setSearchText('')
  }

  return { searchText, handleSearch, clearSearch }
}
export default useSearch
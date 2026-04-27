import { useState } from "react"
const useSearch=()=> {
  const [searchText, setSearchText] = useState('')

  const handleSearch=(e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearchText(e.target.value)
  }

  const clearSearch=()=> {
    setSearchText('')
  }

  return { searchText, handleSearch, clearSearch }
}
export default useSearch
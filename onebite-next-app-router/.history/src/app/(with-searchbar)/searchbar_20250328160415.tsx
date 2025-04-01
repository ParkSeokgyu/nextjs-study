export default function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }
  return (
    <div>
      <input type="text" />
      <button>검색</button>
      </div>
  )
}
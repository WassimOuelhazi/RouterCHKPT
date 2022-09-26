import ListMovies from './ListMovies';
import Rate from './Rate';
const Search = ({setSearchName,Movies,searchRate,searchName,setSearchRate}) => {

  return (
    <div>
    
      <input style={{ backgroundColor:"lightGrey" ,padding :"10px 200px"  ,margin :"40px" ,borderRadius:"10px"}}  placeholder='search for movie' onChange={(e)=>setSearchName(e.target.value)}/>

      <Rate  searchRate={searchRate} setSearchRate={setSearchRate} />
      <ListMovies
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
      
    </div>
  )
}

export default Search

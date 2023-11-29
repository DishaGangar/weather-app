
const SearchCity = (props) => {
  
  return (
    <div className='search-box'>
        <input type="text" className='input-box bg-white  'value={props.city} onChange={e=>props.setCity(e.target.value)}/>
        <button className='btn bg-warning ' onClick={props.handleclick}>Search</button>
    </div>
  )
}

export default SearchCity
// error handling
// invalid city
// enter key
// loader
// date
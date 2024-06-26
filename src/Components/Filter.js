import React from 'react'
import "./Filter.css"

const Filter = (props) => {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

    function filterHandler(title){
      setCategory(title);
    }

  return (
    <div className='filter-wrapper'>
      <div className='filter'>
      {
        filterData.map( (data) => (
            <button onClick={()=>filterHandler(data.title)} className='button' key={data.id}>{data.title}</button>
        ))
      }
      </div>
    </div>
  )
}

export default Filter

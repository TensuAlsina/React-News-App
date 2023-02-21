import React from 'react'
 
function CategoryCard(props:any) {
 

  const category = [
    {
      id:1,
      type:"world"
    },
    {
      id:2,
      type:"politics"
    },
    {
      id:3,
      type:"sports"
    },
    {
      id:4,
      type:"entertainment"
    },
    {
      id:5,
      type:"technology"
    },
    {
      id:6,
      type:"business"
    },
    {
      id:7,
      type:"science"
    },
    {
      id:8,
      type:"startup"
    },
    {
      id:9,
      type:"miscellaneous"
    },
    {
      id:10,
      type:"automobile"
    },
    {
      id:11,
      type:"hatke"
    },
  ]
  const onCategoryButtonClick =async(categoryType:string)=>{
    props.setCategory(categoryType)
   await props.refechNews()
    
  }
  return (
    <div className='bg-white pt-4 rounded-lg text-start shadow-xl py-12 px-8 mt-10 flex flex-col'>
        
            <h1 className='font-bold text-2xl mb-6'>Category</h1>
            <div className='flex flex-col space-y-3'>
                {category.map((categ)=>(
                  <button onClick={()=>{onCategoryButtonClick(categ.type)}}  className='hover:text-indigo-200 transition-colors duration-150 capitalize' key={categ.id}>{categ.type}</button>
                ))}
            </div>
         
    </div>
  )
}

export default CategoryCard
import React from 'react'
 

interface NewsProps{
    title:string;
    author:string;
    imageUrl:string;
    description:string; 
    readMoreUrl:string;
    
}

function NewsCard(props:NewsProps) {
  return (
    
    <div className='bg-white rounded-xl pb-2 mb-3'>
        <img className="rounded-t-xl object-cover w-full" src={props.imageUrl} alt="" />
        <h1 className="font-bold text-2xl text-start mt-2 px-2">{props.title}</h1>
        <h1 className='text-start ml-3 my-2'>@{props.author}</h1>
        <p className="text-start px-3 text-gray-500">{props.description.substring(0,props.description.split("").length / 2)}...</p>
        <a target="_blank" rel='' href={props.readMoreUrl} className='text-red-400 inline text-end'>Read More</a>
    </div> 
  )
}


export default NewsCard
import React, { useState } from 'react'
import Markdown from 'react-markdown'   // to remove identations like ,,,, """" etc

const CreationItem = ({item}) => {

    const [expanded, setExpanded] = useState(false)

  return ( // box create kiya recent creation me jisme heading , type , date , button hai
    <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer'>
        <div className='flex justify-between items-center gap-4'>
            <div>
                <h2>{item.prompt}</h2>
                <p className='text-gray-500'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full'>{item.type}</button>
        </div>
        {    //Ye code sirf tab content dikhata hai jab expanded true ho.
             //Agar item.type === 'image' hai → image display hoti hai.
             // Otherwise → item.content ko Markdown format me render karke text/content display karta hai.
            expanded && (
                <div>
                    {item.type === 'image' ? (
                        <div>
                            <img src={item.content} alt="image" className='mt-3 w-full max-w-md'/>
                        </div>
                    ) : (
                        <div className='mt-3 h-full overflow-y-scroll text-sm text-slate-700'>
                            <div className='reset-tw'>
                                <Markdown>{item.content}</Markdown>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    </div>
  )
}

export default CreationItem

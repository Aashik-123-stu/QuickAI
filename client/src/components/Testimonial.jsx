import { assets } from "../assets/assets"

const Testimonial = () => {
    const dummyTestimonialData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: 'Arjun Mehta',
            title: 'Founder, Bloomstack Studio',
            content: 'We used to spend entire weekends drafting social captions and email copy. Now it takes minutes. The only reason I am not giving 5 stars is the occasional tone mismatch for very technical topics — but for 90% of our content, it is spot on.',
            rating: 4,
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: 'Rohit Kumar',
            title: 'Content Strategist, Lumen & Co.',
            content: 'ContentAI fits right into our workflow. What I appreciate most is that it does not sound robotic — our readers genuinely can not tell the difference. It is become an essential part of how our small team competes with bigger content teams.',
            rating: 5,
        },
        {
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
            name: 'Priya Sharma',
            title: 'Head of Marketing, Nexora Labs',
            content: 'I was skeptical about AI-generated content at first, but ContentAI completely changed my mind. It understands context way better than the tools I have tried before, and our blog output has literally tripled without hiring extra writers.',
            rating: 4,
        },
    ]

    return (
        <div className='px-4 sm:px-20 xl:px-32 py-24'>
            <div className='text-center'>
                <h2 className='text-slate-700 text-[42px] font-semibold'>Loved by Creators</h2>
                <p className='text-gray-500 max-w-lg mx-auto'>Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className='flex flex-wrap mt-10 justify-center'>
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-4 transition duration-300 cursor-pointer'>
                        <div className="flex items-center gap-1">
                            {Array(5).fill(0).map((_, index) => (
                                <img
                                    key={index}
                                    src={
                                    index < testimonial.rating
                                        ? assets.star_icon
                                        : assets.star_dull_icon
                                    }
                                    className="w-4 h-4"
                                    alt="star"
                                />
                                ))}                          
                        </div>
                        <p className='text-gray-500 text-sm my-5'>"{testimonial.content}"</p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} className='w-12 object-contain rounded-full' alt='' />
                            <div className='text-sm text-gray-600'>
                                <h3 className='font-medium'>{testimonial.name}</h3>
                                <p className='text-xs text-gray-500'>{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial;
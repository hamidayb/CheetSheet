import { deploy } from '../data/deploy'

const Sample = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-wrap w-full'>
          <div className='lg:w-4/5 md:w-max sm:w-screen md:py-6'>
            {deploy.map((d) => (
              <div className='flex relative pb-12'>
                <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                  <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                </div>
                <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                  {d.count}
                </div>
                <div className='flex-grow pl-4'>
                  <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                    {d.step}
                  </h2>
                  <p className='leading-relaxed'>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sample

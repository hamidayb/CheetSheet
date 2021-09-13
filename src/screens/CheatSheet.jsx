// import { useState } from 'react'
import { deploy } from '../data/firebase'

const CheatSheet = () => {
  // const { step, setStep } = useState('')

  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='flex flex-wrap w-full'>
          <h1 className='text-3xl text-center text-black'>
            {deploy[0].heading}
          </h1>
          <div className='lg:w-5/5 md:w-max sm:w-screen md:py-6'>
            {deploy.map((d) => (
              <>
                {d.step &&
                  d.step.map((dd) => (
                    <div className='flex relative pb-12'>
                      <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
                        <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
                      </div>
                      {console.log(dd)}
                      <div class='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10'>
                        {dd.count}
                      </div>
                      <div className='flex-grow pl-4'>
                        <h2 className='font-medium title-font text-sm text-gray-900 mb-1 tracking-wider'>
                          {dd.title}
                        </h2>
                        {dd.desc &&
                          dd.desc.map((ddd) => (
                            <>
                              <p className='leading-relaxed'>{ddd.details}</p>
                              {ddd.command && (
                                <pre>
                                  <code className='language-js'>
                                    {ddd.command}
                                  </code>
                                </pre>
                              )}
                              {ddd.image && (
                                <>
                                  <img src={ddd.image}></img> <br />
                                </>
                              )}
                            </>
                          ))}
                      </div>
                    </div>
                  ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheatSheet

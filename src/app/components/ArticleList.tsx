import { Article } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleProps = {
  articles: Article[];
};

const ArticleList = ({articles}:ArticleProps) => {
  return (
    <div>
      {articles.map((article) => (
              <article className='shadow  my-4 flex-col' key={article.id}>
              <Link href="#" className='hover:opacity-75'>
              <Image src="https://picsum.photos/800"
              alt=""
              width={1280}
              height={300}
              />
              </Link>
              <div className='bg-white flex flex-col justify-start p-6'>
                <Link href="#" className='text-blue-700 pb-4 font-bold'>
                Technology
                </Link>
                <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
                Next.Js勉強中</Link>
                <p className='text-sm pb-3 text-slate-900'>published on 2025/05/24</p>
                <Link href="#" className='text-slate-900 pb-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis quidem beatae maxime, dolorem sit labore recusandae hic est quibusdam nemo neque esse ducimus possimus commodi quasi, reiciendis, blanditiis nulla!
                </Link>
                <Link href="#" className='text-pink-800 hover:text-black'>
                続きを読む
                </Link>
              </div>
            </article>
      ))}
      <article className='shadow  my-4 flex-col'>
        <Link href="#" className='hover:opacity-75'>
        <Image src="https://picsum.photos/800"
        alt=""
        width={1280}
        height={300}
        />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>
          Technology
          </Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
          Next.Js勉強中</Link>
          <p className='text-sm pb-3 text-slate-900'>published on 2025/05/24</p>
          <Link href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis quidem beatae maxime, dolorem sit labore recusandae hic est quibusdam nemo neque esse ducimus possimus commodi quasi, reiciendis, blanditiis nulla!
          </Link>
          <Link href="#" className='text-pink-800 hover:text-black'>
          続きを読む
          </Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList

import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Hrichik
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                CEO & Co-founder at{' '}
                <span className="font-semibold">Dogegram</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I'm a 14 year old dev from India. I love to build things and code in JavaScript. I'm currently working on Dogegram, a privacy friendly social media platform for everybody (cats are welcome too! 🐈)
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Hrichik"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                style={{ alignSelf: 'left' }}
                priority
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Not much up here now, but I'm working on it!
          </h3>
          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}

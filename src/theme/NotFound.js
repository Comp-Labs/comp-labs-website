import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <section class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-2xl text-primary-600 dark:text-primary-500">404 Not Found</h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Whoops! That page doesn't exist.</p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
              <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg" alt="mockup" />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

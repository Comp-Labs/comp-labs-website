import * as React from 'react';
import Link from '@docusaurus/Link';
import Tooltip from "@mui/joy/Tooltip";

export default function BlogPage() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div>
                        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to Tech Fiddle Guides!</h2>
                            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Select one of the blog posts from the Blog Archive or search using the search box above for your convenience. As most of our blog posts are YouTube Videos, we recommend you to visit our YouTube Channel and browse our videos by clicking on the button below. You can see the Blog Archive below as well.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="button-group">
                                <Link className="button button--primary button--md" href="/blog/rss.xml">
                                    <i className="fa-solid fa-rss" /> RSS Feed
                                </Link>
                                <Link className="button button--primary button--md" to="/blog/tags">
                                    <i className="fa-solid fa-tag" /> Filter by Tags
                                </Link>
                                <Link className="button button--primary button--md" to="/blog/archive">
                                    <i className="fa-solid fa-box-archive" /> Archive
                                </Link>
                                <Link
                                    className="button button--primary button--md"
                                    href="https://youtube.com/@techfiddle"
                                >
                                    <i className="fa-brands fa-youtube" /> YouTube Channel
                                </Link>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="grid gap-4 lg:grid-cols-3">
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </Link>
                            <br /><br />
                            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> August 13, 2023</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-clock" /> 14 min read</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="#">How to quickly deploy a static website</Link></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex mb-5 -space-x-4">
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Tech Fiddle">
                                                <img data-tooltip-target="tooltip-complabs" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/comp-labs.png" alt="" />
                                            </Tooltip>
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Rudra Sen">
                                                <img data-tooltip-target="tooltip-rudrasen2" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/rudrasen2.png" alt="" />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </Link>
                            <br /><br />
                            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> August 13, 2023</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-clock" /> 14 min read</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="#">How to quickly deploy a static website</Link></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex mb-5 -space-x-4">
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Tech Fiddle">
                                                <img data-tooltip-target="tooltip-complabs" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/comp-labs.png" alt="" />
                                            </Tooltip>
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Rudra Sen">
                                                <img data-tooltip-target="tooltip-rudrasen2" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/rudrasen2.png" alt="" />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </article>
                        <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <Link href="#">
                                <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                            </Link>
                            <br /><br />
                            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                                    Tutorial</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> August 13, 2023</span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-clock" /> 14 min read</span>
                            </div>
                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">How to quickly deploy a static website</a></h2>
                            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex mb-5 -space-x-4">
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Tech Fiddle">
                                                <img data-tooltip-target="tooltip-complabs" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/comp-labs.png" alt="" />
                                            </Tooltip>
                                            <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Rudra Sen">
                                                <img data-tooltip-target="tooltip-rudrasen2" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/rudrasen2.png" alt="" />
                                            </Tooltip>
                                        </div>
                                    </div>
                                </div>
                                <Link href="#" className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Read more
                                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
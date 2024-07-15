import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import {cn} from '../../../lib/utils';
import {Button} from '../../components/ui';
import {useHistory} from '@docusaurus/router';
import {useVersions} from '@docusaurus/plugin-content-docs/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components/ui';
import Link from '@docusaurus/Link';
import ProductSubCard from '../ProductSubCard';

function FeatureCard({item, HomePageData}) {
  const history = useHistory();
  return (
    <Link
      className={cn('text-inherit hover:text-inherit hover:no-underline')}
      href={item.link}>
      <div
        className={cn(
          `border-brand h-full w-full hover:shadow-brand/50 focus-visible:shadow-brand/50 flex basis-1/4 flex-col rounded-xl border p-4 duration-500  will-change-auto hover:cursor-pointer hover:bg-gray-100 hover:shadow-xl focus-visible:bg-gray-100 focus-visible:shadow-xl dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800`,
        )}>
        <div className={cn('text-2xl font-bold')}>{item.title}</div>
        <div className={cn('mt-4 line-clamp-4')}>{item.description}</div>
      </div>
    </Link>
  );
}

function Product({HomePageData}) {
  const history = useHistory();
  const versions = useVersions();

  return (
    <>
      <div className={''}>
        <div className={cn('relative flex flex-col md:min-h-[90vh]')}>
          <section
            className={cn(
              'my-6 flex flex-col items-center justify-center lg:my-16',
            )}>
            <div
              className={cn(
                'flex flex-col-reverse items-center justify-center gap-12 md:gap-20 lg:flex-row lg:gap-24',
              )}>
              <div>
                  <iframe width="400" height="215" src="https://www.youtube.com/embed/JaY6_1NyUXE?si=cRGB1d2lrIYlwJZW" title="TeamForge Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              <div className={cn('flex basis-1/2 flex-col gap-4')}>
                <div
                  className={cn('text-4xl font-bold md:text-6xl lg:text-7xl')}>
                  <span>{HomePageData.name}</span>
                </div>
                <div
                  className={cn(
                    'line-clamp-4 inline-block max-w-lg text-ellipsis text-lg md:text-xl',
                  )}>
                  {HomePageData.description}
                </div>
                {!HomePageData.isBusinessSegment && (
                  <div
                    className={cn(
                      'flex flex-col justify-center lg:justify-start items-center gap-8 md:flex-row md:gap-16 mt-4',
                    )}>
                    <Button
                      asChild
                      size={'lg'}
                      tabIndex="0"
                      className={cn(`text-lg font-bold uppercase bg-brand`)}>
                      <Link
                        href={
                          versions[versions.length > 1 ? 1 : 0].path +
                          '/' +
                          versions[versions.length > 1 ? 1 : 0].mainDocId
                        }
                        className={cn(
                          `text-white hover:no-underline hover:text-white`,
                        )}>
                        TeamForge 23.1
                      </Link>
                    </Button>
                    {versions.length > 2 && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            tabIndex="0"
                            size={'lg'}
                            className={`bg-brand text-lg font-semibold uppercase text-white`}>
                            Other Versions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          className={cn(
                            'min-w-[12rem] bg-gray-200 dark:bg-zinc-800',
                          )}
                          size={'lg'}>
                          {versions.map((version) => (
                            <DropdownMenuItem
                              asChild
                              className={cn(
                                'hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-zinc-700',
                              )}
                              key={version.label}>
                              <Link
                                tabIndex={'0'}
                                className={cn(
                                  'text-inherit hover:text-inherit hover:no-underline',
                                )}
                                href={`${version.path}/${version.mainDocId}`}>
                                {version.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {HomePageData.isBusinessSegment && (
            <section
              className={cn('mx-auto flex w-full flex-col gap-8 p-4 px-36')}>
              {/* <HoverEffect
                items={HomePageData.subSegments}
                Card={ProductSubCard}
              /> */}

              <div
                className={cn(
                  'grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3',
                )}>
                {HomePageData.subSegments.map((segment) => (
                  <ProductSubCard
                    HomePageData={HomePageData}
                    SegmentData={segment}
                    key={segment?.id}
                  />
                ))}
              </div>
            </section>
          )}
          <section
            className={cn(
              'mx-auto flex w-full flex-col gap-8 p-4 px-12 md:px-36',
            )}>
            <div className={cn('text-xl font-bold md:text-4xl')}>
              Release notes
            </div>
            <div
              className={cn(
                'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
              )}>
              {HomePageData.releaseNotes.map((item) => (
                <FeatureCard
                  asChild
                  key={item.id}
                  item={item}
                  HomePageData={HomePageData}
                />
              ))}
            </div>
          </section>
          <section
            className={cn(
              'mx-auto flex w-full flex-col gap-8 p-4 px-12 md:px-36',
            )}>
            <div className={cn('text-xl font-bold md:text-4xl')}>
              Get started
            </div>
            <div
              className={cn(
                'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
              )}>
              {HomePageData.getStarted.map((item) => (
                <FeatureCard
                  asChild
                  key={item.id}
                  item={item}
                  HomePageData={HomePageData}
                />
              ))}
            </div>
          </section>          
        </div>
      </div>
    </>
  );
}

export function ProductHomePage({HomePageData}) {
  return (
    <Layout>
      <div className={'max-w-8xl px-4 sm:px-6 md:px-8 lg:px-16'}>
        <Product HomePageData={HomePageData} />
      </div>
    </Layout>
  );
}

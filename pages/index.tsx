import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '@/styles/utils.module.css'
import { getSortedPostsData } from '@/lib/posts'
import Layout, { siteTitle } from '@/components/layout'
import Date from '@/components/date'

interface Props {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

const Home: React.FC<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                {title}
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
          <li className={utilStyles.listItem} key="ssr_1">
            <Link href="/ssr/[id]" as={`/ssr/1`}>
              SSR POST 1
            </Link>
          </li>
          <li className={utilStyles.listItem} key="ssr_2">
            <Link href="/ssr/[id]" as={`/ssr/2`}>
              SSR POST 2
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}

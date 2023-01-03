import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Layout from '@/components/layout'
import Date from '@/components/date'
import utilStyles from '@/styles/utils.module.css'

interface Props {
  postData: {
    title: string
    date: string
    id: string
  }
  refererParams: string
}

const SSRPost: React.FC<Props> = ({ postData, refererParams }) => {
  console.warn('refererParams : ', refererParams)
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <p>{postData.id}</p>
      </article>
    </Layout>
  )
}

export default SSRPost

export const getServerSideProps: GetServerSideProps = async (context) => {
  // console.log(context.req.headers.referer)
  return {
    props: {
      postData: {
        title: 'SSR',
        date: '2023-01-03',
        id: context.query.id,
      },
      refererParams: context.req.headers.referer,
    },
  }
}

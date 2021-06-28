import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

export default function FirstPost() {
  return (
    <div className={utilStyles.textCenter}>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </h2>
    </div>
  )
}
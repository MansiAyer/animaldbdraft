import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'

export async function getServerSideProps(context: any) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="display-1 mb-4">Stray DB</p>

        {isConnected ? (
          <small className="subtitle">You are connected to MongoDB</small>
        ) : (
          <small className={inter.className}>
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </small>
        )}

        <div className="description">
          <form className="d-flex flex-row" action="/api/form" method="post">
            <div className="input-group my-3">
              <input
                type="text"
                className="form-control text-light bg-transparent"
                id="searchString"
                name="searchString"
                placeholder="Search for a stray"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button className="btn btn-light" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="container w-50 h-25">
          <div className="row">
            <div className="btn btn-light my-3 p-3 col">
              <h3>Add a stray &rarr;</h3>
            </div>
          </div>

          <div className="row">
            <div className="btn btn-light my-3 p-3">
              <h3>See existing entries &rarr;</h3>
            </div>
          </div>
        </div>
      </main>

      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        <div className="border-top border-light mt-3 mb-0">
          <p>
            Built&nbsp;and&nbsp;Maintained by
            <code>
              <a> Solulogy</a>
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

import clientPromise from "../lib/mongodb";

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("straysdb");

        const strays = await db
            .collection("sample1")
            .find({})
            .sort({ _id: 1 })
            .limit(20)
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(strays)) },
        };
    } catch (e) {
        console.error(e);
    }
}

export default function Movies({ strays:any }) {
    return (
        <div>
            <h1>Top 20 strays of All Time</h1>
            <p>
                <small>(According to straycritic)</small>
            </p>
            <ul>
                {strays.map((stray) => (
                    <li>
                        <h2>{stray.strayName}</h2>
                        <h3>{stray.strayAddr}</h3>
                        <p>{stray.feederName}</p>
                        <p>{stray.feederNum}</p>
                        <p>{stray.mediaFolder}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import Head from 'next/head'

const ReviewsPage = ({ reviews }) => {

    return (
        <>
            <Head>
                <title>Fat burgers | Home</title>
                <meta name="title" content="Fat burgers"/>
            </Head>
            <div>
                <h1>Client reviews</h1>
                <div className="reviews">
                    {!!reviews.length && reviews.slice(0, 20).map((res) => {
                        return (
                            <div key={res.id} className={'review'}>
                                {`${res.id} `}
                                {`${res.body.slice(0, 90)}...`}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    return ({ props: { reviews: data.slice(0, 20)}})
}
export default ReviewsPage
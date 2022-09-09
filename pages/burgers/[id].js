import styles from '../../styles/Burgers.module.css'
import Image from 'next/image'

export const getStaticPaths = async () => {
    const res = await fetch(' http://localhost:3700/items')
    const data = await res.json()

    const paths = data.map((burger) => ({
        params: { id: burger.id.toString() }
    }))

    return ({ paths, fallback: false })
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch(` http://localhost:3700/items/${id}`)
    const data = await res.json()

    return ({ props: { burger: data } })
}

const Details = ({ burger }) => {
    console.log('details burger >>>', burger)
    return (
        <div className={styles.singleBurger}>
            <h1>{burger.name}</h1>
            <div className={styles.imageContainer}></div>
            <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width="100%" height="100%"
                layout="responsive"
                objectFit="cover"
            />
            <p>burger.desc</p>
        </div>
    )
}
export default Details
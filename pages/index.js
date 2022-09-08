import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import {useRouter} from 'next/router';

const Home = () => {
    console.log('render home')
    return (
        <>
            <Head>
                <title>Fat burgers | Home</title>
                <meta name="title" content="Fat burgers"/>
            </Head>
            <div className={styles.container}>
                <h1 className={`${styles.title} font-effect-fire-animation`}>The Fattest burger!</h1>
                <div className={styles.mainImage}>
                    <Image src="/fatburger.png" alt="fat burger" width={400} height={300} />
                </div>
                <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
                <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
                <Link href="/burgers/">
                    <a className={styles.btn}>All burgers</a>
                </Link>
            </div>
        </>
    )
}
export default Home
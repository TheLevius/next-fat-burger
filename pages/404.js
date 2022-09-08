import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFoundPage = () => {
    const router = useRouter()
    const sec = 3
    useEffect(() => {
        const tsId = setTimeout(() => {
                router.replace('/')
        }, sec * 1000)
        return () => clearTimeout(tsId)
    }, [])

    console.log('render 404')
    return (
        <div className="not-fount">
            <h1>Oops</h1>
            <h2>Page not found</h2>
            <p>redirect to
                <Link href={'/'}>
                    <a> Home page </a>
                </Link>
                after {sec} sseconds
            </p>
        </div>
    )
}
export default NotFoundPage
import Link from 'next/link'
import { useRouter } from 'next/router'


const Export = ({query}) => {  
    const router = useRouter()
    console.log(router.query.shop)

    return (
    <div>Shop's name: <strong>{router.query.shop}</strong></div>
    )
}

Export.getInitialProps = ({query}) => {
  return {query}
}

export default Export;
import useFetch from "."


export default function UseFetchHookTest() {

    const {data, pending, error} = useFetch('https:/dummyjson.com/products',{})

    console.log(data, pending, error)
    return (
        <div>
          <h1>Use Fetch Hook</h1>
        </div>
    )
}
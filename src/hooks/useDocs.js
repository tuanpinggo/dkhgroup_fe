import useSWR from 'swr'

export function useDocs(){
    const {data: listDocs, isLoading, isValidating, error, mutate} = useSWR(`/noauth/docs?pagination[page]=1&pagination[pageSize]=5`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    return{
        listDocs,
        isLoading
    }
}
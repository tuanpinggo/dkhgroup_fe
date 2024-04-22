import useSWR from 'swr'

export function useStaticPage(){
    const {data: listPage, isLoading, isValidating, error, mutate} = useSWR(`/noauth/static-pages`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    return{
        listPage,
        isLoading
    }
}
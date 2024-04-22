import useSWR from 'swr'

export function useContact(){
    const {data: contact, isLoading, isValidating, error, mutate} = useSWR(`/noauth/contact?populate[0]=Hotline&populate[1]=Email&populate[2]=social&populate[3]=social.icon&populate[4]=img_copyright&populate[5]=img_copyright.image`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    return{
        contact,
        isLoading
    }
}
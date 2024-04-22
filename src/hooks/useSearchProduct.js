import axiosClient from '@/axiosConfig/axiosClient'
import useSWR from 'swr'

export function useSearchProduct(){
    const {data: searchProduct, isLoading, isValidating, error, mutate} = useSWR(`/noauth/search?populate[0]=keywords&populate[1]=san_phams&populate[2]=san_phams.thumbnail&populate[3]=san_phams.tag&populate[4]=san_phams.tag_img&populate[5]=san_phams.attributes&populate[6]=san_phams.attributes.property&populate[7]=san_phams.attributes.thumbnail&populate[8]=keyword`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    return{
        searchProduct,
        isLoading,
        error
    }
}
import axiosClient from "@/axiosConfig/axiosClient";
import useSWR from 'swr'

export function useAddressBook(){
    const {data: addressBooks, isLoading, isValidating, error, mutate} = useSWR(`/address-books?limit=100&offset=0`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    async function create(datas){
        await axiosClient.post('/address-books', datas)
        await mutate()
    }

    async function update(datas,id){
        await axiosClient.put(`/address-books/${id}`, datas)
        await mutate()
    }

    async function deleteAddress(id){
        await axiosClient.delete(`/address-books/${id}`)
        await mutate()
    }

    async function setDefaultAddress(id){
        await axiosClient.post('address-books/set-default-address',{id})
        await mutate()
    }

    return{
        addressBooks,
        isLoading,
        create,
        deleteAddress,
        setDefaultAddress,
        update
    }
}
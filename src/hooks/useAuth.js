import axiosClient from "@/axiosConfig/axiosClient";
import useSWR from 'swr'

export function useAuth(){
    const {data: userData, isLoading, isValidating, error, mutate} = useSWR(`/users/me`,{
        refreshInterval: 10000,
        dedupingInterval: 10000,
        refreshWhenHidden: true,
        revalidateOnFocus: true
    })

    async function login(body){
        const request = await axiosClient.post('/login',body)
        await mutate(request)
    }

    async function register(body){
        const request = await axiosClient.post('/register',body)
        await mutate(request)
    }

    async function changeInfo(body){
        const request = await axiosClient.put('/user/me',body)
        await mutate(request)
    }

    async function logout(){
        await axiosClient.post('logout')
        await mutate(undefined)
    }

    return{
        userData,
        isLoading,
        login,
        register,
        changeInfo,
        logout
    }
}
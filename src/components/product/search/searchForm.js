import { Stack } from "@mui/material";
import SearchProductInput from "./input";
import KeywordSearchProduct from "./keyword";
import ResultSearch from "./result";
import { useSearchProduct } from "@/hooks/useSearchProduct";
import { useState } from "react";
import { useFormik } from "formik";
import { searchProducts } from "@/validations/search";
import axiosClient from "@/axiosConfig/axiosClient";

export default function SearchFormProduct(){

    const {searchProduct, isLoading} = useSearchProduct()
    const [isResult,setIsResult] = useState(false)
    const [keyword,setKeyword] = useState("")
    const [loading,setLoading] = useState()
    const [products,setProducts] = useState(searchProduct?.data?.attributes?.san_phams?.data)

    const [disableInput,setDisableInput] = useState(false)

    const formik = useFormik({
        initialValues: {keyword: keyword},
        validationSchema: searchProducts,
        onSubmit: async (values) => {
            setLoading(true)
            setDisableInput(true)
            try {

                const request = await axiosClient.get(`/noauth/products?populate[0]=thumbnail&fields[0]=name&fields[1]=expert&fields[2]=price&fields[3]=old_price&populate[1]=tag&populate[2]=tag_img&fields[4]=bg_color_thumbnail&populate[3]=attributes&populate[4]=attributes.property&populate[5]=tag_img&fields[5]=slug&populate[6]=attributes.thumbnail&fields[6]=id&filters[name][$contains]=${values.keyword}`)

                setProducts(request?.data)

            } catch (error) {
                console.log("🚀 ~ onSubmit: ~ error:", error)
            }
            setLoading(false)
            setIsResult(true)
            setDisableInput(false)
        }
    })

    return(
        <Stack spacing={3} width={{xs: 400, md: 1140}}>
            <SearchProductInput 
                datas={searchProduct?.data?.attributes}
                keyword={keyword}
                setKeyword={setKeyword}
                loading={loading}
                setLoading={setLoading}
                formik={formik}
                disableInput={disableInput}
            />
            <KeywordSearchProduct 
                datas={searchProduct?.data?.attributes}
                keyword={keyword}
                setKeyword={setKeyword}
                loading={loading}
                setLoading={setLoading}
                formik={formik}
                setProducts={setProducts}
            />
            <ResultSearch 
                datas={searchProduct?.data?.attributes}
                keyword={keyword}
                setKeyword={setKeyword}
                loading={loading}
                setLoading={setLoading}
                products={products}
                isResult={isResult}
            />
        </Stack>
    )
}
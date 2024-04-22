import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { regions } from "./regions";
import { useEffect, useState } from "react";
import axiosClient from "@/axiosConfig/axiosClient";
import { globalError } from "../handle/globalError";

async function getDatas(key,parent,parent_value,func){
    try {
        const req = await axiosClient.get(`/${key}?filters[${parent}]=${parent_value}&pagination[page]=1&pagination[pageSize]=100`)
        func(req.data)
        return req.data[0].id
    } catch (error) {
        globalError()
    }
}

export default function SelectAddress({formik}){

    const [loading1,setLoading1] = useState(false)
    const [loading2,setLoading2] = useState(false)

    const [districts,setDistricts] = useState()
    const [wards,setWards] = useState()

    useEffect(()=>{
        setLoading1(true)
        setLoading2(true)
        getDatas('districts','region',formik.values.region,setDistricts)
        getDatas('wards','district',formik.values.district,setWards)
        setLoading1(false)
        setLoading2(false)
    },[])

    const handleChangeRegion = async (event) => {

        setLoading1(true)
        setLoading2(true)

        formik.setFieldValue('region',event.target.value)

        const dictrictSelect = await getDatas('districts','region',event.target.value,setDistricts)
        const wardSelect = await getDatas('wards','district',dictrictSelect,setWards)

        formik.setFieldValue('district',dictrictSelect)
        formik.setFieldValue('ward',wardSelect)

        setLoading1(false)
        setLoading2(false)
    }

    const handleChangedistrict = async (event) => {
        setLoading2(true)
        formik.setFieldValue('district',event.target.value)
        const wardSelect = await getDatas('wards','district',event.target.value,setWards)
        formik.setFieldValue('ward',wardSelect)
        setLoading2(false)
    }

    const handleChangeward = (event) => {
        formik.setFieldValue('ward',event.target.value)
    }

    return(
        <Stack direction={"row"} alignItems={"center"} spacing={1}>

            <FormControl fullWidth>
                <InputLabel id="region-label">Tỉnh / Thành phố</InputLabel>
                <Select
                    labelId="region-label"
                    id="region"
                    name="region"
                    value={formik?.values.region}
                    label="Tỉnh / Thành phố"
                    onChange={handleChangeRegion}
                >
                    {regions.map(item => 
                        <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                    )}
                </Select>
            </FormControl>

            <Box position={"relative"} width={"100%"}>
                <FormControl fullWidth sx={{position: 'relative',zIndex: 0}}>
                    <InputLabel id="district-label">Quận / Huyện</InputLabel>
                    <Select
                        labelId="district-label"
                        id="district"
                        name="district"
                        value={formik?.values.district}
                        label="Quận / Huyện" 
                        onChange={handleChangedistrict}
                    >
                        {districts && districts?.map(item => <MenuItem key={item?.id} value={item?.id}>
                            {item?.attributes?.name}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                {loading1 &&
                    <Stack 
                        justifyContent={"center"} 
                        alignItems={"center"} 
                        sx={styles.loading}
                    >
                        <CircularProgress size={20} color="primary"/>
                    </Stack>
                }
            </Box>

            <Box position={"relative"} width={"100%"}>
                <FormControl fullWidth>
                    <InputLabel id="ward-label">Phường / Xã</InputLabel>
                    <Select
                        labelId="ward-label"
                        id="ward"
                        name="ward"
                        value={formik?.values.ward}
                        label="Phường / Xã"
                        onChange={handleChangeward}
                    >
                        {wards && wards?.map(item => <MenuItem key={item?.id} value={item?.id}>
                            {item?.attributes?.name}
                        </MenuItem>)}
                    </Select>
                </FormControl>
                {loading2 &&
                    <Stack 
                        justifyContent={"center"} 
                        alignItems={"center"} 
                        sx={styles.loading}
                    >
                        <CircularProgress size={20} color="primary"/>
                    </Stack>
                }
            </Box>


        </Stack>
    )
}

const styles = {
    loading: {
        position: 'absolute', 
        top: 0, 
        left: 0,
        right: 0, 
        width: '100%', 
        height: '100%', 
        background: 'rgb(0,0,0,0.05)'
    }
}
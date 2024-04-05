import { globalConfig } from "@/theme/globalConfig";
import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductFilter(){

    const [filter, setFilter] = useState('new');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    return(
        <Container maxWidth={globalConfig.maxWidth}>
            <Box>
                <Stack direction={"row"} spacing={3} my={3} justifyContent={"flex-start"} alignItems={"center"} width={400}>
                    <Box>
                        <Typography color={'#888'} fontWeight={400}>
                            PHÂN LOẠI
                        </Typography>
                    </Box>
                    <Box flex={1}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={filter}
                            onChange={handleChange}
                            size="small"
                            hiddenLabel
                            sx={{
                                borderRadius: 20,
                                minWidth: 200,
                                bgcolor: '#F2F2F2'
                            }}
                        >
                            <MenuItem value={'new'}>Mới nhất</MenuItem>
                            <MenuItem value={'best-sale'}>Bán chạy</MenuItem>
                            <MenuItem value={'price-low'}>Giá thấp - cao</MenuItem>
                            <MenuItem value={'price-high'}>Giá cao - thấp</MenuItem>
                        </Select>
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}
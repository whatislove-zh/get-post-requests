
import {Box, CircularProgress} from "@mui/material"

export const Loader = () => {
  return (
    <Box height="565px" sx={{ display: 'flex', justifyContent:"center", alignItems:"center" }}>
      <CircularProgress size={100} />
    </Box>
  )
}

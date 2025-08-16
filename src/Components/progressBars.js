import { Typography, Grid, Card, Box, LinearProgress } from "@mui/material";

export default function ProgressBars() {
  var gridCount = ['text', 'text2', 'text3']
  return (
    <>
      <Grid container>
        <Grid size={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography>
                Season Rank
              </Typography>
              <LinearProgress variant="determinate" value={'100'} color="success" />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography>
                Artifact Unlocks
              </Typography>
              <LinearProgress variant='determinate' value={50} color="success" />
            </Box>
          </Card>
        </Grid>
        <Grid size={6}>
          <Card sx={{ display: 'flex' }}>
            <Box>
              <Typography>
                Current Season: {"Placeholder"}
              </Typography>
              <Grid container rowSpacing={0}>
                {gridCount.map(item => (
                  <Grid size={4}>
                    <Typography>
                      {item}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
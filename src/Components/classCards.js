import { Grid, Card, Box, Typography, CardContent, CardMedia } from "@mui/material"

export default function ClassCards() {
  var gridCount = ['text', 'text2', 'text3']
  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={4}>
          <Card sx={{ display: "flex" }}>
            <CardMedia component="jpg" sx={{ width: 151 }} image="test.jpg" alt="TEST IMG" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography>
                    Class {'TRACKED CLASSES'} {'classIcon'}
                  </Typography>
                  <Typography>
                    Seasonal Power: {'currentPowerLvl'}
                  </Typography>
                </CardContent>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{}}>
                  <Typography>
                    Equiped Weapons
                  </Typography>
                  <Grid container rowSpacing={0} columnSpacing={{}}>
                    {gridCount.map(item => (
                      <Grid size={4} sx={{ border: 1 }}>
                        <Typography>
                          {item}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
                <CardContent>
                  <Typography>
                    Equiped Armor
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
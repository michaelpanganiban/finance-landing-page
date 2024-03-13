import { Grid, Stack, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Button from '@mui/material/Button';
import { Colors } from '@/src/theme/enum/colors';
import { constants } from '@/src/theme/enum/constants';

export const HeaderDetails = () => {
    return (
        <Toolbar variant='dense'>
          <Grid container columns={6} spacing={2}>
            <Grid item xs={6} sm={3} md={3} lg={2}>
              <Stack alignItems={{xs: 'center', sm: 'end', md: 'end', lg: 'end' }}>
                <Typography style={{ fontSize: 'small' }} borderRight={{ xs: 'none', sm: '1px solid white' }}>
                  <CallSharpIcon 
                    style={{ fontSize: 'small'}} 
                  /> &nbsp;
                  Call us: {constants.CONTACT_NUMBER}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} md={3} lg={2}>
              <Stack alignItems={{xs: 'center', sm: 'start', md: 'start', lg: 'start' }}>
                <Typography style={{ fontSize: 'small' }} >
                  <EmailSharpIcon 
                    style={{ fontSize: 'small' }} 
                  /> &nbsp;
                  Email: {constants.EMAIL}
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={3} lg={1}>
              <Stack alignItems={{xs: 'center', sm: 'end', md: 'end', lg: 'end'}}>
                <Typography style={{ fontSize: 'small' }} >
                  <HelpSharpIcon 
                    style={{ fontSize: 'small' }} 
                  /> &nbsp;
                  Have any questions?
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} sm={3} lg={1}>
              <Stack alignItems={{xs: 'center', sm: 'start', md: 'start', lg: 'start'}}>
                <Button 
                  sx={{ 
                    backgroundColor: Colors.SECONDARY, 
                    color: Colors.WHITE,
                    fontWeight: 'bolder',
                    borderRadius: 0,
                    height: '40px',
                  }}
                >
                  GET AN APPOINTMENT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
    );
}
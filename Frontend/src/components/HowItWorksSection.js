  import React from 'react';
  import { Container, Grid, Typography, Box } from '@mui/material';
  import '../styles/HowItWorksSection.css';
  import Addd from '../assets/add.mhtml'
  import Del from '../assets/delete.mhtml'

  const HowItWorksSection = () => {
    return (
      <Container className="works-container">
        <Typography variant="h4" component="h4">
          How it <span className='span'> Works?</span>
        </Typography>
  
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box className="works-box">
              <Typography variant="h5">Add Items</Typography>
              <img
                src={"https://cdn.pixabay.com/photo/2020/07/23/10/09/add-5430935_1280.png" }
                alt="Add Items"
                className="works-image"
              />
              <Typography variant="h6" className="hover-text">
              Effortlessly add new tasks to your to-do list, ensuring you stay organized and on track with your goals.
                
              </Typography>
            </Box>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <Box className="works-box">
              <Typography variant="h5">Delete Items</Typography>
              <img
                src={"https://toppng.com/uploads/preview/delete-circle-icon-11563655960vxqxj7ly3u.png"}
                alt="Delete Items"
                className="works-image"
              />
              <Typography variant="h6" className="hover-text">
              Remove completed or unnecessary tasks from your list quickly to maintain a clutter-free and focused to-do list
              
              </Typography>
            </Box>
          </Grid>
  
          <Grid item xs={12} md={4}>
            <Box className="works-box">
              <Typography variant="h5">Mark as Done</Typography>
              <img
                src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif"
                alt="Mark as Done"
                className="works-image"
              />
              <Typography variant="h6" className="hover-text">
              Easily mark tasks as completed to keep track of your progress and celebrate your accomplishments
           
                </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  };
  export default HowItWorksSection;